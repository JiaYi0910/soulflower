document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // 阻止表單預設的提交行為

    // 獲取表單輸入的資料
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 模擬表單行為，執行其他操作，例如跳轉頁面
    if (username && password) {
        alert(`登入成功！\n帳號：${username}\n密碼：${password}`);
        window.location.href = "首頁.html"; // 跳轉到首頁
    } else {
        alert("請輸入完整的帳號和密碼！");
    }
});