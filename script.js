 // 获取标题元素
 var titleElement = document.getElementById("dynamicTitle");

 // 当文档可见性状态发生变化时触发
 document.addEventListener("visibilitychange", function() {
     if (document.visibilityState === 'visible') {
         titleElement.innerText = "艹，走，忽略ጿ ዽ ኈ ቼ ጿ";
     } else {
         titleElement.innerText = "小亮给他整个活";
     }
 });

// 获取倒计时元素
var countdownElement = document.getElementById("countdown");

// 初始倒计时时间
var initialSeconds = 60;
var seconds = initialSeconds;

// 启动倒计时
var countdownInterval = setInterval(function() {
    seconds--;

    // 更新倒计时元素的文本内容
    countdownElement.innerText = seconds;

    // 判断倒计时是否结束
    if (seconds <= 0) {
        countdownElement.innerText = "🤡";

        // 重置倒计时
        seconds = initialSeconds;
    }
}, 1000); // 每秒执行一次