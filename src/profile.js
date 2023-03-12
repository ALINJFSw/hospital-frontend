window.onload = async() => {
    const main = document.getElementById("main")
    const token = sessionStorage.getItem("token");
    const DATA = await work_pages.postData("http://localhost//hospitals/backend/get_all_user_data.php",null,{
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if(DATA.main.user_type == "patient") {
            const patient = document.createElement("div")
            patient.innerHTML = ` <div class="long__input">
            <label for="blood_type">
               blood type:
            </label>
            <input type="text" value = ${DATA.blood_type} id="blood_type" />
        </div>
        <div class="long__input">
           <label for="EHR">
               EHR:
           </label>
           <input type="text" value = ${DATA.ehr} id="EHR" />`
        main.appendChild(patient)
      }
      else {
        const employee = document.createElement("div")
        employee.innerHTML = ` <div class="long__input">
            <label for="ssn">
            ssn:
            </label>
            <input type="text" value = ${DATA.ssn} id="ssn" />
        </div>
        <div class="long__input">
           <label for="date_joined">
           date joined:
           </label>
           <input type="text" value = ${DATA.date_joined} id="date_joined" />
           </div>
           <div class="long__input">
           <label for="position">
           position:
           </label>
           <input type="text" value = ${DATA.position} id="position" />
           </div>`
        main.appendChild(employee)
      }
}

