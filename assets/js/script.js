// ==========================================================================
// 1. NOTIFICATION SYSTEM (Hệ thống thông báo)
// ==========================================================================
function showNotify(message) {
  // Kiểm tra nếu chưa có container chứa thông báo thì tạo mới
  let notifyContainer = document.querySelector('.notify-container');
  if (!notifyContainer) {
    notifyContainer = document.createElement('div');
    notifyContainer.className = 'notify-container';
    // Style nhanh cho container chứa các thông báo xếp chồng
    Object.assign(notifyContainer.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '9999',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    });
    document.body.appendChild(notifyContainer);
  }

  // Tạo khung thông báo nhỏ
  const notifyBox = document.createElement('div');
  notifyBox.className = 'notify-box';
  notifyBox.innerText = message;

  notifyContainer.appendChild(notifyBox);

  // Tự động xóa thông báo sau 3 giây
  setTimeout(() => {
    notifyBox.style.opacity = '0';
    notifyBox.style.transform = 'translateX(20px)';
    setTimeout(() => {
      notifyBox.remove();
    }, 300);
  }, 300);
}

// ==========================================================================
// 2. NEWSLETTER SUBSCRIPTION (Đăng ký nhận tin)
// ==========================================================================
function initNewsletter() {
  // Tạo khung cấu trúc HTML cho form đăng ký email
  const emailAlert = document.createElement('div');
  emailAlert.className = 'email-alert';
  
  emailAlert.innerHTML = `
    <h3>Đăng ký nhận tin</h3>
    <p>Nhập email của bạn để nhận ưu đãi mới nhất.</p>
    <input type="email" placeholder="Nhập email tại đây..." required />
    <button type="button" id="btn-submit-newsletter">Đăng ký</button>
  `;

  document.body.appendChild(emailAlert);

  // Lắng nghe sự kiện click nút đăng ký
  const submitBtn = document.getElementById('btn-submit-newsletter');
  submitBtn.addEventListener('click', () => {
    const emailInput = emailAlert.querySelector('input');
    const email = emailInput.value.trim();

    if (email && email.includes('@')) {
      // Lưu vào localStorage
      localStorage.setItem('newsletterEmail', email);
      // Hiển thị thông báo thành công
      showNotify('Đã đăng ký nhận tin thành công!');
      emailInput.value = '';
    } else {
      showNotify('Vui lòng nhập địa chỉ email hợp lệ!');
    }
  });
}

// ==========================================================================
// 3. PRODUCT ADVANCED PERFORMANCE MONITOR (Theo dõi hiệu suất)
// ==========================================================================
const performanceData = {
  startTime: window.performance ? window.performance.now() : Date.now(),
  metrics: {},
  
  logPerformance() {
    const endTime = window.performance ? window.performance.now() : Date.now();
    this.metrics.loadTimeMs = (endTime - this.startTime).toFixed(2);
    console.log(`[Performance Monitor] Render Time: ${this.metrics.loadTimeMs}ms`);
  }
};

// ==========================================================================
// INITIALIZATION (Khởi chạy khi trang tải xong)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNewsletter();
  performanceData.logPerformance();
});