
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


const tableRefresd = () => {



  if (localStorage.getItem("TABLE")) {
    let tabel_data = localStorage.getItem("TABLE");
    //  converting  readable data from json

    tabel_data = JSON.parse(tabel_data);
    tabel_data.map((data, index) => {
      console.log(data);
       let HTML_data=document.getElementById("insert_data").innerHTML
      document.getElementById("insert_data").innerHTML = "";
     
      document.getElementById("insert_data").innerHTML =
        HTML_data+
        `
        <tr>
            <td>${data.srn}</td>
            <td>${data.ID}</td>
            <td>${data.LocationName}</td>
            <td>${data.address}</td>
            <td>
              <div>
                <button Onclick = "view(${data.srn})"><i class="fa-regular fa-eye"></i>view</button>
                <button Onclick= "open_delet_popup(${data.srn})"><i class="fa-solid fa-trash"></i>Delete</button>
                <button Onclick= "edit_data(${data.srn})"><i class="fa-solid fa-pen-to-square"></i>edit</button>
              </div>
            </td>
          </tr>`;
        
    });

  }



};
let count = 0;
const tableRefres = () => {
  
   
 
    document.getElementById("insert_data").innerHTML = "";
  if (localStorage.getItem("TABLE")) {
    let tabel_data = localStorage.getItem("TABLE");
    //  converting  readable data from json

    tabel_data = JSON.parse(tabel_data);
    tabel_data.forEach(data=> {


     
      document.getElementById("insert_data").innerHTML +=
       
        `
        <tr>
            <td>${data.srn}</td>
            <td>${data.ID}</td>
            <td>${data.LocationName}</td>
            <td>${data.address}</td>
            <td>
              <div>
                <button Onclick = "view(${data.srn})"><i class="fa-regular fa-eye"></i>view</button>
                <button Onclick= "open_delet_popup(${data.srn})"><i class="fa-solid fa-trash"></i>Delete</button>
                <button Onclick= "edit_data(${data.srn})"><i class="fa-solid fa-pen-to-square"></i>edit</button>
              </div>
            </td>
          </tr>`;
    });
  
  }

  


};
const edit_data=()=>{
  
}


const close_box = () => {
  const data = document.getElementById("view_data");
  data.classList.add('disblank')
}
// this will insiate popup of delet  and then connect it with  delet function
const open_delet_popup = (srn) => {
  console.log("hello1")
  const data = document.getElementById("Delet_veiw");
  data.classList.remove('disblank')

  const call_fun = document.getElementById("button-popup");
  console.log(data)
  call_fun.innerHTML = `<button onclick="Delet(${srn})" type="submit" class="yes"> Yes</button> <button onclick="close_box()" type="submit" class="no"> N0</button>`
}
// to delet data
const Delet = (srn) => {
  console.log("inside-delet")
  let table;
  let cur;




  table = localStorage.getItem("TABLE");
  table = JSON.parse(table);





  if (table.length == 1) {
    localStorage.removeItem("TABLE");

  } else {
    cur = table.splice(() => {
      table.map((data, i) => {
        if (srn == data.srn) {
          return i;
        }

      })
    }, 1)

    localStorage.removeItem("TABLE");
    localStorage.setItem("TABLE", JSON.stringify(cur));
  }





}
// to view data


const view = (srn) => {
  const ID = document.getElementById("ID_veiw_data");
  const name_veiw_data = document.getElementById("name_veiw_data")
  const location_drcr = document.getElementById("location_drcr_veiw_data")
  const viewbox = document.getElementById("view_data");
  viewbox.classList.remove('disblank')

  let table = localStorage.getItem("TABLE");
  table = JSON.parse(table);


  let cur = table.filter((data) => {
    return data.srn == srn
  })

  ID.value = cur[0].ID;
  name_veiw_data.value = cur[0].LocationName;
  location_drcr.value = cur[0].address;
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
     tableRefres()
     location.reload(true)
    
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