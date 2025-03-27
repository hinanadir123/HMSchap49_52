// 1. Create a signup form and display form data in your web 
// page on submission. 

document.getElementById("signupform").addEventListener("submit", function(event){
    event.preventDefault();

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value

    document.getElementById("output").innerHTML=
    ` <p>Name: ${name}</p>
    <p>Name: ${email}</p>`
})


// 2. Suppose in your webpage there is content area in which 
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// // displayed.  

function toggle() {     
    var moretext = document.querySelector(".more-text");     
    var btntext = document.getElementById("readMoreButton");  

    if (moretext.style.display === "none" || moretext.style.display === "") {        
        moretext.style.display = "inline";        
        btntext.textContent = "Read Less";     
    } else {        
        moretext.style.display = "none";        
        btntext.textContent = "Read More";  
    } 
}

// 3. In previous assignment you have created a tabular data 
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.  

document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const studentTable = document.getElementById("student-table").querySelector("tbody");
    let editRow = null;

    studentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const grade = document.getElementById("grade").value;

        if (editRow) {
            editRow.innerHTML = `<td>${name}</td><td>${age}</td><td>${grade}</td>
                                <td><button class="edit-btn">Edit</button>
                                <button class="delete-btn">Delete</button></td>`;
            editRow = null;
        } else {
            const row = studentTable.insertRow();
            row.innerHTML = `<td>${name}</td><td>${age}</td><td>${grade}</td>
                            <td><button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button></td>`;
        }
        studentForm.reset();
    });

    studentTable.addEventListener("click", function (event) {
        const row = event.target.closest("tr");
        if (event.target.classList.contains("delete-btn")) row.remove();
        if (event.target.classList.contains("edit-btn")) {
            document.getElementById("name").value = row.cells[0].textContent;
            document.getElementById("age").value = row.cells[1].textContent;
            document.getElementById("grade").value = row.cells[2].textContent;
            editRow = row;
        }
    });
});
