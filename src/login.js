

const submit = document.getElementById("submit");
submit.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password",password);
  const response = await work_pages.postData("http://localhost//hospitals/backend/login_api.php",formData, {});
  sessionStorage.setItem("token",response.token);
  sessionStorage.setItem("type",response.user_type);
  window.location.href = "home.html"
});


