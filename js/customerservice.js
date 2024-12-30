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
    const input = document.getElementById('chatInput');  // 取得輸入框的元素
    const message = input.value.trim();  // 取得並修剪輸入框中的訊息（去除前後空白）
    
    // 如果訊息不為空
    if (message) {
      const chatBody = document.getElementById('chatBody');  // 取得顯示訊息的容器

      // 顯示用戶的訊息
      const userMessage = document.createElement('div');  // 創建一個新的 div 元素來顯示訊息
      userMessage.classList.add('chat-message', 'user');  // 給新訊息添加類別，代表是用戶訊息
      userMessage.innerHTML = `<p>${message}</p>`;  // 設定訊息內容
      chatBody.appendChild(userMessage);  // 將用戶的訊息添加到 chatBody 容器中

      // 清空輸入框
      input.value = '';  // 清除輸入框中的文字

      // 模擬客服回應
      setTimeout(() => {
        const supportMessage = document.createElement('div');  // 創建客服回應的訊息元素
        supportMessage.classList.add('chat-message', 'support');  // 給客服回應訊息添加類別
        supportMessage.innerHTML = `<p>客服: 我們已經收到您的訊息，會儘快回覆。</p>`;  // 設定客服訊息內容
        chatBody.appendChild(supportMessage);  // 將客服訊息添加到 chatBody 容器中

        // 滾動到最新訊息
        chatBody.scrollTop = chatBody.scrollHeight;  // 滾動至最底部，顯示最新的訊息
      }, 1000);  // 模擬延遲 1 秒後客服回應

      // 滾動到最新訊息
      chatBody.scrollTop = chatBody.scrollHeight;  // 滾動至最底部，顯示用戶的最新訊息
    }
}
