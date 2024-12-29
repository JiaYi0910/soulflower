function loadCustomFont() {
  const style = document.createElement('style');
  style.innerHTML = `
      @font-face {
  font-family: 'LXGWWenKai';
  src: url('../fonts/LXGWWenKai-Medium.ttf') format('truetype');
  }
  `;
  document.head.appendChild(style);

  // 設置頁面字體
  document.body.style.fontFamily = 'LXGWWenKai, sans-serif';
}

loadCustomFont();




// 星星互動邏輯
const stars = document.querySelectorAll('.rating-section span');
let selectedRating = 0;

stars.forEach((star, index) => {
  // 當鼠標懸停時，高亮當前星星及之前的星星
  star.addEventListener('mouseover', () => {
    stars.forEach((s, i) => {
      s.classList.toggle('hovered', i <= index);
    });
  });

  // 當鼠標移出時，清除暫時的高亮效果
  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.classList.remove('hovered'));
  });

  // 點擊選擇評分
  star.addEventListener('click', () => {
    selectedRating = star.getAttribute('data-value');
    stars.forEach((s, i) => {
      s.classList.toggle('selected', i < selectedRating);
    });
  });
});

// 提交回饋
function submitFeedback() {
  const feedbackText = document.getElementById('feedbackText').value.trim();
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (selectedRating === 0) {
    alert('請選擇一個評分！');
    return;
  }

  if (feedbackText === '') {
    alert('請輸入您的意見！');
    return;
  }

  // 模擬提交成功
  thankYouMessage.style.display = 'block';
  document.querySelector('.feedback-form').style.display = 'none';
  document.querySelector('.rating-section').style.display = 'none';
}