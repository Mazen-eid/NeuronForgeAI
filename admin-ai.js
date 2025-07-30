const ADMIN_PASS = "YourStrongPassword"; // عدلها لكلمة سر قوية خاصة بك

function adminLogin() {
  const pass = document.getElementById("admin-pass").value;
  if (pass === ADMIN_PASS) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-ai-section").style.display = "block";
    showMessage("success", "تم تسجيل الدخول بنجاح!");
  } else {
    showMessage("error", "كلمة المرور غير صحيحة.");
  }
}

// تنفيذ أوامر الذكاء الاصطناعي (مطلوب Backend حقيقي)
async function sendAICommand() {
  const cmd = document.getElementById("ai-command").value.trim();
  const result = document.getElementById("ai-result");
  if (!cmd) { showMessage("error", "اكتب أمرك أولاً"); return; }
  result.textContent = "جارٍ تنفيذ الأمر...";
  try {
    // هنا يجب أن يكون لديك backend API يستقبل الأمر من لوحة التحكم وينفذه فعلياً في الموقع
    // مثال: fetch('https://your-backend-url/ai-edit', { ... })
    result.textContent = "تم إرسال الأمر للذكاء الاصطناعي (يلزم backend).";
  } catch (e) {
    result.textContent = "خطأ في الاتصال بالخادم.";
    showMessage("error", "فشل التنفيذ.");
  }
}