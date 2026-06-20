import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp, 
  deleteDoc, 
  doc,
  where,
  writeBatch,
  getDocs
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

// Shops menu and metadata configuration
const SHOPS_DATA = {
  '50lan': {
    name: '50嵐',
    themeClass: 'theme-50lan',
    menu: [
      { name: '四季春珍波椰 (1號)', price: 45 },
      { name: '波霸奶茶', price: 60 },
      { name: '波霸紅茶拿鐵', price: 75 },
      { name: '冰淇淋紅茶', price: 65 },
      { name: '多多綠茶', price: 65 },
      { name: '重焙烏龍拿鐵', price: 75 },
      { name: '8冰綠', price: 60 },
      { name: '混珠奶烏', price: 60 },
      { name: '芒果青', price: 55 },
      { name: '珍珠阿華田', price: 65 },
      { name: '四季奶青瑪奇朵', price: 60 },
      { name: '茉莉綠茶', price: 40 },
      { name: '四季春茶', price: 40 },
      { name: '黃金烏龍茶', price: 40 },
      { name: '阿薩姆紅茶', price: 40 },
      { name: '燕麥奶茶', price: 65 }
    ]
  },
  'chingshin': {
    name: '清心福全',
    themeClass: 'theme-chingshin',
    menu: [
      { name: '珍珠蜂蜜鮮奶普洱', price: 75 },
      { name: '優多綠茶', price: 55 },
      { name: '烏龍綠茶', price: 45 },
      { name: '波霸奶茶', price: 55 },
      { name: '錫蘭奶紅', price: 50 },
      { name: '雙Q百香果綠茶', price: 65 },
      { name: '蜜桃凍紅茶', price: 55 },
      { name: '梅子綠茶', price: 50 },
      { name: '極品菁茶', price: 40 },
      { name: '特選普洱茶', price: 40 },
      { name: '翡翠烏龍茶', price: 40 },
      { name: '椰果奶茶', price: 55 },
      { name: '布丁奶茶', price: 65 },
      { name: '冬瓜檸檬', price: 55 },
      { name: '鮮奶拿鐵', price: 70 }
    ]
  },
  'coco': {
    name: 'CoCo 都可',
    themeClass: 'theme-coco',
    menu: [
      { name: '百香雙響炮', price: 65 },
      { name: '奶茶三兄弟', price: 65 },
      { name: '葡萄柚果粒茶', price: 70 },
      { name: '21歲輕檸烏龍', price: 55 },
      { name: '珍珠奶茶', price: 55 },
      { name: '四季珍椰青', price: 55 },
      { name: '紅柚雙響炮', price: 70 },
      { name: '手採紅茶', price: 40 },
      { name: '茉莉綠茶', price: 40 },
      { name: '四季春茶', price: 40 },
      { name: '布丁奶茶', price: 65 },
      { name: '法式奶蓋綠茶', price: 60 },
      { name: '檸檬冬瓜露', price: 50 },
      { name: '芋頭牛奶', price: 70 },
      { name: '金桔檸檬', price: 55 }
    ]
  },
  'presotea': {
    name: '鮮茶道',
    themeClass: 'theme-presotea',
    menu: [
      { name: '琥珀奶茶', price: 55 },
      { name: '墾丁冰茶', price: 55 },
      { name: '焙茶烤奶', price: 60 },
      { name: '招牌水果茶', price: 65 },
      { name: '阿里山冰茶', price: 45 },
      { name: '伯爵奶茶家族', price: 65 },
      { name: '紅心芭樂汁', price: 60 },
      { name: '日月潭紅玉', price: 50 },
      { name: '文山清茶', price: 40 },
      { name: '四季春茶', price: 40 },
      { name: '玄米茶拿鐵', price: 70 },
      { name: '百香雙Q', price: 60 },
      { name: '冬瓜檸檬', price: 55 },
      { name: '黑糖珍珠鮮奶', price: 75 }
    ]
  },
  'mrwish': {
    name: 'Mr. Wish',
    themeClass: 'theme-mrwish',
    menu: [
      { name: '光果茶', price: 70 },
      { name: '楊枝甘露', price: 85 },
      { name: '愛文芒果冰沙', price: 80 },
      { name: '芒果厚奶', price: 85 },
      { name: '青果茶', price: 65 },
      { name: '紅心芭樂梅', price: 65 },
      { name: '波霸珍珠鮮奶茶', price: 70 },
      { name: '湖塩太妃烤奶', price: 65 },
      { name: '芋頭QQ鮮奶', price: 80 },
      { name: '高山金萱茶', price: 40 },
      { name: '熟成紅茶', price: 40 },
      { name: '奇異果綠茶', price: 65 },
      { name: '鮮榨柳橙綠', price: 70 },
      { name: '冬瓜青茶', price: 45 },
      { name: '珍珠奶茶', price: 55 }
    ]
  }
};

// Parse Query Parameters
const urlParams = new URLSearchParams(window.location.search);
const shopId = urlParams.get('shop');

// Redirect if shopId is invalid
if (!shopId || !SHOPS_DATA[shopId]) {
  alert('請選擇有效的飲料店！');
  window.location.href = 'index.html';
}

const shopInfo = SHOPS_DATA[shopId];

// Dynamically set shop theme, title and page head title
document.body.classList.add(shopInfo.themeClass);
document.title = `作伙喝飲料！ - ${shopInfo.name}`;
document.getElementById('shop-title').textContent = shopInfo.name;
document.getElementById('shop-subtitle').textContent = `朋友同事專屬 · ${shopInfo.name} 即時訂單看板`;

// Fallback helper to get drink price for old orders
function getDrinkPrice(shop, drink) {
  const shopData = SHOPS_DATA[shop];
  if (!shopData) return 0;
  const item = shopData.menu.find(m => m.name === drink);
  return item ? item.price : 0;
}

// Dynamically populate drink options
const drinkSelect = document.getElementById('drink-name');
shopInfo.menu.forEach(drink => {
  const option = document.createElement('option');
  option.value = drink.name;
  option.setAttribute('data-price', drink.price);
  option.textContent = `${drink.name} ($${drink.price})`;
  drinkSelect.appendChild(option);
});

// Firebase configuration
const firebaseConfig = {
  projectId: "drink-ordering-chang",
  appId: "1:230592197281:web:0d8c834040877bdde836e0",
  storageBucket: "drink-ordering-chang.firebasestorage.app",
  apiKey: "AIzaSyDhW_Nv_YYK0XlbQ-7ssmVTS046VNRz2kQ",
  authDomain: "drink-ordering-chang.firebaseapp.com",
  messagingSenderId: "230592197281",
  projectNumber: "230592197281",
  version: "2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const ordersCollection = collection(db, 'orders');

// Sign in anonymously
signInAnonymously(auth)
  .then((userCredential) => {
    console.log('Firebase Anonymous Auth Success. UID:', userCredential.user.uid);
  })
  .catch((error) => {
    console.error('Firebase Auth failed:', error);
    showToast('❌ 驗證失敗，無法連接資料庫！', 'error');
  });

// DOM Elements
const orderForm = document.getElementById('order-form');
const buyerNameInput = document.getElementById('buyer-name');
const cupCountInput = document.getElementById('cup-count');
const sweetnessSelect = document.getElementById('sweetness');
const iceLevelSelect = document.getElementById('ice-level');

const stepperMinusBtn = document.getElementById('stepper-minus');
const stepperPlusBtn = document.getElementById('stepper-plus');

const ordersList = document.getElementById('orders-list');
const emptyState = document.getElementById('empty-state');
const statPeople = document.getElementById('stat-people');
const statCups = document.getElementById('stat-cups');
const toast = document.getElementById('toast');
const summaryTableBody = document.getElementById('summary-table-body');
const clearAllBtn = document.getElementById('clear-all-btn');

// Custom Cup Count Stepper Logic
stepperMinusBtn.addEventListener('click', () => {
  let val = parseInt(cupCountInput.value) || 1;
  if (val > 1) {
    cupCountInput.value = val - 1;
  }
});

stepperPlusBtn.addEventListener('click', () => {
  let val = parseInt(cupCountInput.value) || 1;
  if (val < 100) {
    cupCountInput.value = val + 1;
  }
});

cupCountInput.addEventListener('change', () => {
  let val = parseInt(cupCountInput.value);
  if (isNaN(val) || val < 1) {
    cupCountInput.value = 1;
  } else if (val > 100) {
    cupCountInput.value = 100;
  }
});

// Toast Notification System
function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.remove('hidden');
  
  if (window.toastTimeout) {
    clearTimeout(window.toastTimeout);
  }
  
  window.toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Form Validation and submission
orderForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  let isValid = true;

  // Reset errors
  document.querySelectorAll('.input-group').forEach(grp => grp.classList.remove('invalid'));

  // 1. Name Check
  if (!buyerNameInput.value.trim()) {
    buyerNameInput.closest('.input-group').classList.add('invalid');
    isValid = false;
  }

  // 2. Drink Check
  if (!drinkSelect.value) {
    drinkSelect.closest('.input-group').classList.add('invalid');
    isValid = false;
  }

  // 3. Cups Check
  const cups = parseInt(cupCountInput.value);
  if (isNaN(cups) || cups < 1) {
    cupCountInput.closest('.input-group').classList.add('invalid');
    isValid = false;
  }

  // 4. Sweetness Check
  if (!sweetnessSelect.value) {
    sweetnessSelect.closest('.input-group').classList.add('invalid');
    isValid = false;
  }

  // 5. Ice Check
  if (!iceLevelSelect.value) {
    iceLevelSelect.closest('.input-group').classList.add('invalid');
    isValid = false;
  }

  if (!isValid) {
    showToast('請填寫所有必要欄位喔！', 'error');
    return;
  }

  // Disable submit button during save
  const submitBtn = document.getElementById('submit-order-btn');
  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-text').textContent = '送出中...';

  try {
    const selectedOption = drinkSelect.options[drinkSelect.selectedIndex];
    const price = parseInt(selectedOption.getAttribute('data-price')) || 0;

    // Add document to Firestore (including shopId, shopName, price)
    await addDoc(ordersCollection, {
      shopId: shopId,
      shopName: shopInfo.name,
      buyerName: buyerNameInput.value.trim(),
      drinkName: drinkSelect.value,
      price: price,
      cups: cups,
      sweetness: sweetnessSelect.value,
      ice: iceLevelSelect.value,
      createdAt: serverTimestamp()
    });

    showToast('🎉 訂單已成功送出！');
    
    // Clear inputs (except name for convenience)
    drinkSelect.value = '';
    cupCountInput.value = '1';
    sweetnessSelect.value = '';
    iceLevelSelect.value = '';
    
  } catch (error) {
    console.error('Error adding document: ', error);
    showToast('❌ 送出失敗，請再試一次！', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-text').textContent = '送出訂單';
  }
});

// Delete Order logic
window.deleteOrder = async (id, buyerName) => {
  if (confirm(`確定要刪除 ${buyerName} 的訂單嗎？`)) {
    try {
      await deleteDoc(doc(db, 'orders', id));
      showToast('🗑️ 訂單已成功刪除');
    } catch (error) {
      console.error('Error deleting document: ', error);
      showToast('❌ 刪除失敗，請再試一次', 'error');
    }
  }
};

// Clear All Shop Orders logic
clearAllBtn.addEventListener('click', async () => {
  if (confirm(`⚠️ 警告：確定要一鍵清除所有《${shopInfo.name}》的訂單嗎？此動作將無法復原！`)) {
    clearAllBtn.disabled = true;
    clearAllBtn.querySelector('span').textContent = '清除中...';
    try {
      // Get all orders for the current shop
      const q = query(ordersCollection, where('shopId', '==', shopId));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        showToast('目前沒有可清除的訂單', 'error');
        clearAllBtn.disabled = false;
        clearAllBtn.querySelector('span').textContent = '一鍵清除本頁訂單';
        return;
      }
      
      const batch = writeBatch(db);
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      
      await batch.commit();
      showToast(`🗑️ 已成功清除所有《${shopInfo.name}》的訂單！`);
    } catch (error) {
      console.error('Error clearing documents: ', error);
      showToast('❌ 清除失敗，請再試一次', 'error');
    } finally {
      clearAllBtn.disabled = false;
      clearAllBtn.querySelector('span').textContent = '一鍵清除本頁訂單';
    }
  }
});

// Listen for Real-time orders updates from Firestore for this specific shop
const q = query(
  ordersCollection, 
  where('shopId', '==', shopId)
);

onSnapshot(q, (snapshot) => {
  // Clear loading state or current list
  ordersList.innerHTML = '';
  summaryTableBody.innerHTML = '';
  const paymentTableBody = document.getElementById('payment-table-body');
  paymentTableBody.innerHTML = '';
  
  if (snapshot.empty) {
    emptyState.classList.remove('hidden');
    statPeople.textContent = '0';
    statCups.textContent = '0';
    
    // Empty stats table
    summaryTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--text-muted);">無統計資料</td>
      </tr>
    `;
    
    // Empty payments table
    paymentTableBody.innerHTML = `
      <tr>
        <td colspan="3" style="text-align: center; color: var(--text-muted);">無統計資料</td>
      </tr>
    `;
    return;
  }
  
  emptyState.classList.add('hidden');
  
  let totalCups = 0;
  let totalMoney = 0;
  const uniqueNames = new Set();
  const summaryMap = {};
  const paymentMap = {};
  
  // Extract and sort documents client-side to avoid requiring a composite index
  const orders = [];
  snapshot.forEach((doc) => {
    orders.push({ id: doc.id, ...doc.data() });
  });
  
  orders.sort((a, b) => {
    const timeA = a.createdAt ? (a.createdAt.toMillis ? a.createdAt.toMillis() : new Date(a.createdAt).getTime()) : 0;
    const timeB = b.createdAt ? (b.createdAt.toMillis ? b.createdAt.toMillis() : new Date(b.createdAt).getTime()) : 0;
    return timeB - timeA;
  });
  
  orders.forEach((order) => {
    const id = order.id;
    const cups = parseInt(order.cups) || 1;
    const drinkName = order.drinkName || '未填寫';
    const price = parseInt(order.price) || getDrinkPrice(shopId, drinkName);
    const subtotal = price * cups;
    
    totalCups += cups;
    totalMoney += subtotal;
    
    if (order.buyerName) {
      uniqueNames.add(order.buyerName.trim());
    }
    
    // Grouping for Drink Summary Table
    const sweetness = order.sweetness || '未選';
    const ice = order.ice || '未選';
    const specKey = `${drinkName} (${sweetness}/${ice})`;
    
    if (!summaryMap[specKey]) {
      summaryMap[specKey] = {
        drinkName: drinkName,
        price: price,
        specs: `${sweetness} / ${ice}`,
        cups: 0,
        total: 0
      };
    }
    summaryMap[specKey].cups += cups;
    summaryMap[specKey].total += subtotal;
    
    // Grouping for Personal Payment Table
    const buyer = order.buyerName ? order.buyerName.trim() : '無名氏';
    if (!paymentMap[buyer]) {
      paymentMap[buyer] = {
        buyer: buyer,
        items: [],
        total: 0
      };
    }
    paymentMap[buyer].items.push(`${drinkName} ($${price}) x${cups}`);
    paymentMap[buyer].total += subtotal;
    
    // Create list row element
    const orderRow = document.createElement('div');
    orderRow.className = 'order-row';
    
    // Safe output escaping
    const buyerName = escapeHtml(buyer);
    const displayDrink = escapeHtml(drinkName);
    const displaySweetness = escapeHtml(sweetness);
    const displayIce = escapeHtml(ice);
    
    orderRow.innerHTML = `
      <div class="col-name">${buyerName}</div>
      <div class="col-drink">
        ${displayDrink}
        <span style="font-size: 0.8rem; opacity: 0.75; display: block; font-weight: 500;">單價: $${price}</span>
      </div>
      <div class="col-specs">
        <div class="badge-wrapper">
          <span class="badge badge-sweetness">${displaySweetness}</span>
          <span class="badge badge-ice">${displayIce}</span>
        </div>
      </div>
      <div class="col-cups">
        <span class="badge-cups">${cups} 杯</span>
        <span style="font-size: 0.8rem; display: block; margin-top: 4px; font-weight: 700; color: var(--primary-color);">$${subtotal}</span>
      </div>
      <div class="col-action">
        <button class="delete-order-btn" onclick="deleteOrder('${id}', '${buyerName}')" title="刪除此訂單">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    
    ordersList.appendChild(orderRow);
  });
  
  // Render consolidated summary table
  const sortedKeys = Object.keys(summaryMap).sort((a, b) => a.localeCompare(b));
  sortedKeys.forEach(key => {
    const item = summaryMap[key];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(item.drinkName)} <span style="font-size: 0.8rem; opacity: 0.75;">($${item.price})</span></td>
      <td>${escapeHtml(item.specs)}</td>
      <td style="text-align: center; font-weight: 700;">${item.cups} 杯</td>
      <td style="text-align: center; font-weight: 700; color: var(--primary-color);">$${item.total}</td>
    `;
    summaryTableBody.appendChild(tr);
  });
  
  // Add total row to summary table
  const totalTr = document.createElement('tr');
  totalTr.className = 'summary-row-total';
  totalTr.innerHTML = `
    <td colspan="2" style="text-align: right;">總計：</td>
    <td style="text-align: center;">${totalCups} 杯</td>
    <td style="text-align: center;">$${totalMoney}</td>
  `;
  summaryTableBody.appendChild(totalTr);
  
  // Render Personal Payment Table
  const sortedBuyers = Object.keys(paymentMap).sort((a, b) => a.localeCompare(b));
  sortedBuyers.forEach(buyer => {
    const info = paymentMap[buyer];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-weight: 700; color: var(--accent-color);">${escapeHtml(info.buyer)}</td>
      <td style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.4;">${escapeHtml(info.items.join('、'))}</td>
      <td style="text-align: center; font-weight: 800; color: var(--primary-color);">$${info.total}</td>
    `;
    paymentTableBody.appendChild(tr);
  });
  
  // Update dashboard stats
  statPeople.textContent = uniqueNames.size;
  statCups.textContent = totalCups;
}, (error) => {
  console.error("Firestore listen error: ", error);
  showToast("❌ 資料庫同步失敗！請重新載入網頁", "error");
});

// Escape HTML utility function for security
function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
