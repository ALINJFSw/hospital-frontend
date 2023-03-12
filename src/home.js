window.onload = async () => {
  const token = sessionStorage.getItem("token");
  const type = sessionStorage.getItem("type");
  if (type != "patient") {
    window.location.href = "login.html";
  }
  const login = document.getElementById("login");
  const register = document.getElementById("register");
  const profile = document.getElementById("profile");

  if (token) {
    login.style.display = "none";
    register.style.display = "none";
  } else {
    profile.style.display = none;
  }

  login.addEventListener("click", () => {
    window.location.href = "login.html";
  });
  register.addEventListener("click", () => {
    window.location.href = "register.html";
  });

  const tbody = document.getElementById("tbody");
  const MEDICATIONS = await work_pages.getData(
    "http://localhost//hospitals/backend/get_medication.php"
  );
  MEDICATIONS.map((data, index) => {
    const tr = document.createElement("tr");
    tr.id = "tr" + index;
    tr.innerHTML = `
    <td>${data.name}.1</td>
    <td>$ ${data.price}</td>
 
    <td><button id=${"order" + index}>order</button></td>
    
    `;
    tbody.appendChild(tr);

    const order = document.getElementById("order" + index);
    const formData = new FormData()
    formData.append("medication_id",data.medication_id);
    formData.append("quantity",1);
    order.addEventListener("click", async () => {
      const response = await work_pages.postData(
        "http://localhost//hospitals/backend/add_user_has_medication_api.php",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
    });
  });
};

const submit = document.getElementById("submit");
submit.addEventListener("click", async () => {
  const employee_email = document.getElementById("employee").value;
  const description = document.getElementById("description").value;

  const data = new FormData();
  data.append("description", description);
  data.append("employee_email", employee_email);
  const response = await work_pages.postData(
    "http://localhost//hospitals/backend/ask_services.php",
    data,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  console.log(response);
  document.getElementById("employee").value = "";
  document.getElementById("description").value = "";
});
