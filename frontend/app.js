async function loadEmployees(){

    const response = await fetch("/api/employees");

    const employees = await response.json();

    let html="";

    employees.forEach(emp=>{

        html += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
        </tr>
        `;

    });

    document.querySelector("#employees tbody").innerHTML=html;

}