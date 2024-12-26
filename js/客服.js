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



// 發送訊息
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
      const chatBody = document.getElementById('chatBody');
      // 顯示用戶的訊息
      const userMessage = document.createElement('div');
      userMessage.classList.add('chat-message', 'user');
      userMessage.innerHTML = `<p>${message}</p>`;
      chatBody.appendChild(userMessage);

      // 清空輸入框
      input.value = '';

      // 模擬客服回應
      setTimeout(() => {
        const supportMessage = document.createElement('div');
        supportMessage.classList.add('chat-message', 'support');
        supportMessage.innerHTML = `<p>客服: 我們已經收到您的訊息，會儘快回覆。</p>`;
        chatBody.appendChild(supportMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);

      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }