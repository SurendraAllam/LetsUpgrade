// Question-01
// Create a array containing five objects with properties{name,age,city,salary}
//      1) Display all the objects in a table
//      2) Create button to delete records
//      3) Data is not permanent

let employees = [
    {
        name: "Surendra",
        age: 20,
        city: "Rajahmundry",
        salary: 40000,
    },
    {
        name: "rajesh",
        age: 18,
        city: "HYD",
        salary: 34000,
    },
    {
        name: "ramesh",
        age: 45,
        city: "Mumbai",
        salary: 60000,
    },
    {
        name: "ram",
        age: 37,
        city: "Chennai",
        salary: 55000,
    }
];
function display(employeearray){
    let tableData = "";
    employeearray.forEach(function(employee, index){
        let currentrow = 
        `<tr>
        <td>${index+1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.city}</td>
        <td>${employee.salary}</td>
        <td>
        <button onclick="deleteEmployee(${index})">Delete</button>
        <button onclick="showModal(${index})">Update</button>
        </td>
        </tr>`;
        
        tableData += currentrow;
    });
    document.getElementsByClassName("tdata")[0].innerHTML = tableData;
}

display(employees);

function addEmployee(e){
    e.preventDefault();
    let employee={}
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
   
    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;

    employees.push(employee)


    display(employees);

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("city").value="";
    document.getElementById("salary").value="";
}

function searchByName(){
    let searchValue = document.getElementById("searchName").value;
    
    let newdata = employees.filter(function (employee){
        return employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });

    display(newdata);
}

function searchByCity(){
    let searchValue = document.getElementById("searchCity").value;
    
    let newdata = employees.filter(function (employee){
        return employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });

    display(newdata);
}


function deleteEmployee(index){
    employees.splice(index, 1);
    display(employees);
}

let upindex;

function copyStudents(index){
    upindex=index;

    let employee = employees[index];

    document.getElementById("upname").value=employee.name;
    document.getElementById("upage").value=employee.age;
    document.getElementById("upcity").value=employee.city;
    document.getElementById("upsalary").value=employee.salary;
}

function updateEmployees(e){
    e.preventDefault();

    let employee = employees[upindex];
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary = document.getElementById("upsalary").value;

    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;

    display(employees);

    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
}

function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";

    copyStudents(index);

}
  
function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
}