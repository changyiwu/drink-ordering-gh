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
  doc 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

// Firebase configuration from CLI output
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
    // Since toast function is defined later in the file, call it safely after DOM is loaded or when error occurs
    window.addEventListener('DOMContentLoaded', () => {
      showToast('❌ 驗證失敗，無法連接資料庫！', 'error');
    });
  });

// DOM Elements
const orderForm = document.getElementById('order-form');
const buyerNameInput = document.getElementById('buyer-name');
const drinkNameInput = document.getElementById('drink-name');
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
  
  // Clear any existing timeout
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
  if (!drinkNameInput.value.trim()) {
    drinkNameInput.closest('.input-group').classList.add('invalid');
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
    // Add document to Firestore
    await addDoc(ordersCollection, {
      buyerName: buyerNameInput.value.trim(),
      drinkName: drinkNameInput.value.trim(),
      cups: cups,
      sweetness: sweetnessSelect.value,
      ice: iceLevelSelect.value,
      createdAt: serverTimestamp()
    });

    showToast('🎉 訂單已成功送出！');
    
    // Clear inputs (except name for convenience)
    drinkNameInput.value = '';
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

// Listen for Real-time orders updates from Firestore
const q = query(ordersCollection, orderBy('createdAt', 'desc'));

onSnapshot(q, (snapshot) => {
  // Clear loading state or current list
  ordersList.innerHTML = '';
  
  if (snapshot.empty) {
    emptyState.classList.remove('hidden');
    statPeople.textContent = '0';
    statCups.textContent = '0';
    return;
  }
  
  emptyState.classList.add('hidden');
  
  let totalPeople = 0;
  let totalCups = 0;
  const uniqueNames = new Set();
  
  snapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;
    
    // Count stats
    totalCups += data.cups || 0;
    if (data.buyerName) {
      uniqueNames.add(data.buyerName.trim());
    }
    
    // Create list row element
    const orderRow = document.createElement('div');
    orderRow.className = 'order-row';
    
    // Safe output escaping
    const buyerName = escapeHtml(data.buyerName || '無名氏');
    const drinkName = escapeHtml(data.drinkName || '未填寫');
    const sweetness = escapeHtml(data.sweetness || '未選');
    const ice = escapeHtml(data.ice || '未選');
    const cups = parseInt(data.cups) || 1;
    
    orderRow.innerHTML = `
      <div class="col-name">${buyerName}</div>
      <div class="col-drink">${drinkName}</div>
      <div class="col-specs">
        <div class="badge-wrapper">
          <span class="badge badge-sweetness">${sweetness}</span>
          <span class="badge badge-ice">${ice}</span>
        </div>
      </div>
      <div class="col-cups">
        <span class="badge-cups">${cups} 杯</span>
      </div>
      <div class="col-action">
        <button class="delete-order-btn" onclick="deleteOrder('${id}', '${buyerName}')" title="刪除此訂單">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    
    ordersList.appendChild(orderRow);
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
