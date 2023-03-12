if(sessionStorage.getItem("type") != "admin") {
    window.location.href = "./login.html"
}
const token = sessionStorage.getItem("token");
console.log(token);

const submit = document.getElementById("submit");
submit.addEventListener("click", async() => {
    const user_email = document.getElementById("user");
    const hospital = document.getElementById("hospital");
    const formData = new FormData();
    formData.append("email",user_email)
    formData.append("hospital",hospital)
    
    const response = await work_pages.postData('http://localhost//hospitals/backend/assign_user_hospital_api.php',formData, {
        headers:{
            'Authorization' : "Bearer " + token
        }
    })
    console.log(response);
})