window.onload = async() => {
    const main = document.getElementById("main")
    const token = sessionStorage.getItem("token");
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const dob = document.getElementById("dob")
    const save = document.getElementById("save");
    const DATA = await work_pages.postData("http://localhost//hospitals/backend/get_all_user_data.php",null,{
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      name.value = DATA.main.name
      email.value = DATA.main.user_email
      dob.value = DATA.main.dob
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
        const blood_type = document.getElementById("blood_type").value;
        const ehr = document.getElementById("ehr").value;
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("dob", dob)
        formData.append("blood_type", blood_type)
        formData.append("ehr", ehr)
        save.addEventListener("click" , async() => {
            if (condition) {
                const response = await work_pages.postData("http://localhost//hospitals/backend/edit_profile_api.php",formData,{
            headers: {
              Authorization: "Bearer " + token,
            },
          } )
          console.log(response);
            }
          })
        

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
        const ssn = document.getElementById("ssn").value;
        const position = document.getElementById("position").value;
        const date_joined = document.getElementById("date_joined").value;
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("dob", dob)
        formData.append("ssn", ssn)
        formData.append("position", position)
        formData.append("date_joined", date_joined)
        
        

          save.addEventListener("click" , async() => {
            if (condition) {
                const response = await work_pages.postData("http://localhost//hospitals/backend/edit_profile_api.php",formData,{
            headers: {
              Authorization: "Bearer " + token,
            },
          } )
          console.log(response);
            }
          })
      }


    
}

