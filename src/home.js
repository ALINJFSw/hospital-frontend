

const token = sessionStorage.getItem("token");
const type = sessionStorage.getItem("type");
if(type != "patient") {
    window.location.href = "login.html"
}
const login = document.getElementById("login");
const register = document.getElementById("register");
const profile = document.getElementById("profile")

if (token) {
    login.style.display = "none";
    register.style.display = "none";
}

else {
    profile.style.display = none
}

login.addEventListener("click", () => {
    window.location.href = "login.html"
})
register.addEventListener("click", () => {
    window.location.href = "register.html"
})

const submit = document.getElementById("submit");
submit.addEventListener("click", async() => {
    const employee_email = document.getElementById("employee").value;
    const description = document.getElementById("description").value;

    const data = new FormData();
    data.append("description",description);
    data.append("employee_email",employee_email);
    const response = await work_pages.postData("http://localhost//hospitals/backend/ask_services.php",data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    console.log(response);
    document.getElementById("employee").value = ''
    document.getElementById("description").value = ''
})