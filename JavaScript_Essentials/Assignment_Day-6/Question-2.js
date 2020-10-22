// Question-02
// Create a blank array and later on create a add bus functionality bus object contains{name,source,destination,number,passenger capacity}
//      1) A form to add new bus
//      2) Display data in table format
//      3) Search by source and destination
//      4) Data should be stored permanently in localstorage

window.onload = function () 
{
        let listbuses = [
            
        ];
    if (localStorage.getItem("buses") == null) {

        localStorage.setItem("buses", JSON.stringify(listbuses));
    }
};

function display(busarray = undefined){
    let tableData = "";
    let buses;
    if(busarray == undefined){
        buses = JSON.parse(localStorage.getItem("buses"))

    }else{
        buses = busarray;
    } 

    buses.forEach(function(bus, index){
        let currentrow = `<tr>
        <td>${index+1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.passenger}</td>
        <td>
        <button onclick="deleteBuses(${index})">Delete</button>
        <button onclick="showModal(${index})">Update</button>
        </td>
        </tr>`;
        
        tableData += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tableData;

}

display();

function addBuses(e){
    e.preventDefault();

    let bus={};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passenger = document.getElementById("passenger").value;
   
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = Number(number);
    bus.passenger = passenger;

    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses",JSON.stringify(buses))

    display();

    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("passenger").value="";
}

function searchBySource(){
    let searchValue = document.getElementById("searchSource").value;
    let buses = JSON.parse(localStorage.getItem("buses"))

    let newdata = buses.filter(function (bus){
        return bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
    
    display(newdata);
}
function searchByDestination(){
    let searchValue = document.getElementById("searchDestination").value;
    let buses = JSON.parse(localStorage.getItem("buses"))

    let newdata = buses.filter(function (bus){
        return bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
    
    display(newdata);
}


function deleteBuses(index){
    let buses = JSON.parse(localStorage.getItem("buses"))

    buses.splice(index, 1);
    localStorage.setItem("buses",JSON.stringify(buses));
    display();
}

let upindex;

function copyBuses(index){
    let buses = JSON.parse(localStorage.getItem("buses"))

    upindex=index;
    
    let bus = buses[index];
    
    document.getElementById("upname").value= bus.name;
    document.getElementById("upsource").value=bus.source;
    document.getElementById("updestination").value=bus.destination;
    document.getElementById("upnumber").value=bus.number;
    document.getElementById("uppassenger").value=bus.passenger;
}

function updateBuses(e){
    e.preventDefault();
    let buses = JSON.parse(localStorage.getItem("buses"))

    let bus = buses[upindex];
    let name = document.getElementById("upname").value;
    let source = document.getElementById("upsource").value;
    let destination = document.getElementById("updestination").value;
    let number = document.getElementById("upnumber").value;
    let passenger = document.getElementById("uppassenger").value;

    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = Number(number);
    bus.passenger = passenger;

    
    localStorage.setItem("buses", JSON.stringify(buses))
    display(buses);
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
}

function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";

    copyBuses(index);

}
  
function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
}