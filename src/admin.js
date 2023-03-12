window.onload = async () => {
  if (sessionStorage.getItem("type") != "admin") {
    window.location.href = "./login.html";
  }
  const SERVICES = await work_pages.postData(
    "http://localhost//hospitals/backend/get_services_api.php",
    null,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const tbody = document.getElementById("tbody");
  SERVICES.map((data, index) => {
    const tr = document.createElement("tr");
    tr.id = "tr" + index;
    tr.innerHTML = `     <td>${data.patient_email}.1</td>
            <td>${data.employe_email}</td>
            <td>${data.description}</td>
            <td>$ ${data.cost}</td>

            <td><button id=${"accept" + index}>accept</button></td>
            <td><button id=${"decline" + index}>decline</button></td>`;
    tbody.appendChild(tr);

    const accept = document.getElementById("accept" + index);
    const decline = document.getElementById("decline" + index);

    accept.addEventListener("click", async () => {
          const formData = new FormData();
          formData.append("service_id",data.service_id)  
      const response = await work_pages.postData(
        "http://localhost//hospitals/backend/accept_service.php",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      tbody.removeChild(document.getElementById("tr"+index))

    });
    decline.addEventListener("click", async () => {
        const formData = new FormData();
        formData.append("service_id",data.service_id)
      const response = await work_pages.postData(
        "http://localhost//hospitals/backend/decline_service.php",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);

      tbody.removeChild(document.getElementById("tr"+index))

    });
  });
};
const token = sessionStorage.getItem("token");
console.log(token);

const submit = document.getElementById("submit");
submit.addEventListener("click", async () => {
  const user_email = document.getElementById("user").value;
  const hospital = document.getElementById("hospital").value;
  const formData = new FormData();
  formData.append("email", user_email);
  formData.append("hospital", hospital);

  const response = await work_pages.postData(
    "http://localhost//hospitals/backend/assign_user_hospital_api.php",
    formData,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  console.log(response);
});

//   <tr>

//             </tr>
