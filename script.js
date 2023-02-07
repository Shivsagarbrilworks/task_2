
    // script for popup
    console.log("halksjdhfk");
    const addRecordPop = () => {
      console.log("halksjdhfk");

      let data = document.querySelector("#popup");

      if (data.classList.contains("disblank")) {
        data.classList.remove("disblank");
      } else {
        data.classList.add("disblank");
      }
    };

    const tableRefres = () => {
      if (localStorage.getItem("TABLE")) {
        let tabel_data = localStorage.getItem("TABLE");
        //  converting  readable data from json

        tabel_data = JSON.parse(tabel_data);
        tabel_data.map((data, index) => {
          console.log(data);
          document.getElementById("insert_data").innerHTML =
            document.getElementById("insert_data").innerHTML +
            `
        <tr>
            <td>${data.srn}</td>
            <td>${data.ID}</td>
            <td>${data.LocationName}</td>
            <td>${data.address}</td>
            <td>
              <div>
                <button Onclick = "view(${data.srn})"><i class="fa-regular fa-eye"></i>view</button>
                <button Onclick= "delet()"><i class="fa-solid fa-trash"></i>Delete</button>
                <button Onclick= "edit()"><i class="fa-solid fa-pen-to-square"></i>edit</button>
              </div>
            </td>
          </tr>`;
        });

      }



    };
  const close_box=()=>{
    const data = document.getElementById("view_data");
    data.classList.add('disblank')
  }
    
    const view=(srn)=>{
        const data = document.getElementById("view_data");
    data.classList.remove('disblank')

       let table =  localStorage.getItem("TABLE");
       table = JSON.parse(table);
      
      
        let cur = table.filter((data)=>{
            return data.srn == srn
         })
        
        
    }



    // script for data opreation
    const addData = () => {
      let Location_name = document.querySelector("#Location_name").value;
      let Address = document.querySelector("#textbox").value;
      let ID = document.querySelector("#ID").value;

      console.log(Address);
      console.log(ID);

      console.log(Location_name);

      if (Location_name && Address) {
        // data opreation
        let erro = document.getElementById("total-error");
        erro.innerText = "";

        if (localStorage) {
          console.log("data");

          if (localStorage.getItem("TABLE")) {
            let lo = localStorage.getItem("TABLE");

            lo = JSON.parse(lo);
            var data = {
              srn: lo.length,
              ID: ID,
              LocationName: Location_name,
              address: Address,
            };

            lo.push(data);
            localStorage.removeItem("TABLE");
            localStorage.setItem("TABLE", JSON.stringify(lo));
            tableRefres();
            alert("Data added successfully")
            addRecordPop();
          } else {
            var data = {
              srn: 0,
              ID: ID,
              LocationName: Location_name,
              address: Address,
            };

            localStorage.setItem("TABLE", JSON.stringify([{ ...data }]));
            tableRefres();
            addRecordPop();

          }
        }

        // localStorage.setItem("TABLE",)
      } else if (Location_name == "" || Address == "") {
        // error printing
        let erro = document.querySelector("#total-error");
        erro.innerHTML = "Invalid data";
      } else if (Location_name == "" && Address == "") {
        // /error message
        let erro = document.querySelector("#total-error");
        erro.innerHTML = "Invalid data";
      }
    };
    tableRefres();