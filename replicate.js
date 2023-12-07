document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("#nav a[data-target],#rocket2 a[data-target]");

  navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
          event.preventDefault();

          var targetId = link.getAttribute("data-target");
          var targetElement = document.querySelector(targetId);

          if (targetElement) {
              // 使用 smooth 滚动效果
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
    var emailLink = document.getElementById("ca2");

    emailLink.addEventListener("click", function () {
        // 获取邮箱地址
        var emailAddress = "newthread_geek@outlook.com";

        // 创建一个文本区域元素
        var textarea = document.createElement("textarea");
        // 设置文本区域的内容为邮箱地址
        textarea.value = emailAddress;
        // 将文本区域元素添加到页面
        document.body.appendChild(textarea);
        // 选择文本区域的内容
        textarea.select();
        // 尝试执行复制操作
        document.execCommand("copy");
        // 移除文本区域元素
        document.body.removeChild(textarea);

        // 可以在复制成功后添加一些反馈，比如提示用户
        alert("Geek的邮箱已经复制到剪贴板了！😎");
    });


    var questionLinks = document.querySelectorAll("#QAlist a.QAp");

    questionLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // 获取与问题相关联的答案元素
            var answer = link.nextElementSibling;

            // 切换答案的显示状态
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });
});

