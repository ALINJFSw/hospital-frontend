const employee = document.getElementById("employee");
const admin = document.getElementById("admin");
const patient = document.getElementById("patient");
const submit = document.getElementById("submit")
let type = "";
const addInputs = (html,type) => {
    const main = document.getElementById("main");
    const elements = document.createElement("div");
    elements.id = type;
    elements.innerHTML = html;
    main.appendChild(elements);
}


employee.addEventListener("click",() => {
    addInputs(`
    <label for="ssn"><b>SSN</b></label>
    <input type="text" placeholder="Enter ssn" name="ssn" id="ssn" required>
    <label for="email"><b>Date Joined</b></label>
    <input type="text" placeholder="Enter your Date joined" name="email" id="date_joined" required>
    <label for="position"><b>position</b></label>
    <input type="text" placeholder="Enter position" name="position" id="position" required>
    `,"patient");
    type = "employee"

})
patient.addEventListener("click",() => {
  
    addInputs(`
    <label for="EHR"><b>EHR</b></label>
    <input type="text" placeholder="Enter EHR" name="EHR" id="ehr" required>
    <label for="blood"><b>Blood type</b></label>
    <input type="text" placeholder="Enter your blood type" name="blood" id="blood_type" required>
    
    `,"employee");
    type = "patient"

})
admin.addEventListener("click",() => {
})

submit.addEventListener("click",async () => {
    const name= document.getElementById("name").value;
    const dob= document.getElementById("dob").value;
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("dob", dob);
    formData.append("email", email);
    formData.append("password", password);
    if ( type == 'patient') {
        const blood_type= document.getElementById("blood_type").value;
        const ehr= document.getElementById("ehr").value; 
        formData.append("type", "patient");
        formData.append("blood_type", blood_type);
        formData.append("ehr", ehr);
        const response = await work_pages.postData("http://localhost//hospitals/backend/register_api.php",formData,{});
        console.log(response);
    }
    else if(type == 'employee') {
        const ssn= document.getElementById("ssn").value;
        const position= document.getElementById("position").value; 
        const date_joined= document.getElementById("date_joined").value; 
        formData.append("type", "employee");
        formData.append("date_joined", date_joined);
        formData.append("position", position);
        formData.append("ssn", ssn);
        const response = await work_pages.postData("http://localhost//hospitals/backend/register_api.php",formData,{});
        console.log(response);

    }
    else {
        formData.append("type", "admin");

        const response = await work_pages.postData("http://localhost//hospitals/backend/register_api.php",formData,{});
        console.log(response);
        window.location.href = "./login.html";
    }
})