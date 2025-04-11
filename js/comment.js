document.addEventListener('DOMContentLoaded', function() {
    if (typeof twikoo !== 'undefined') {
      twikoo.init({
        envId: 'your_env_id',
        placeholder: {
          comment: '水贴处——昵称输入QQ号即可快速添加昵称头像和邮箱！'
        }
      });
    }
  });