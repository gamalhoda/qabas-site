
function enterAdmin() {
  const code = prompt("أدخلي رمز الدخول إلى صفحة الإدارة:");
  if (code === "123456789") {
    window.location.href = "admin.html";
  } else {
    alert("رمز غير صحيح!");
  }
}
