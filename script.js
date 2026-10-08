

const studentForm =
    document.getElementById("studentForm");

const studentSection =
    document.getElementById("studentSection");

const dashboardSection =
    document.getElementById("dashboardSection");

const registrationSection =
    document.getElementById("registrationSection");

const studentError =
    document.getElementById("studentError");


studentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    

    const name =
        document.getElementById("studentName").value.trim();

    const usn =
        document.getElementById("usn").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const department =
        document.getElementById("department").value.trim();


    

    if (
        name === "" ||
        usn === "" ||
        email === "" ||
        phone === "" ||
        department === ""
    ) {

        studentError.textContent =
            "All student credentials are required.";

        return;
    }


    

    studentError.textContent = "";

    studentSection.style.display = "none";

    dashboardSection.style.display = "block";

});




const eventButtons =
    document.querySelectorAll(".eventBtn");

const selectedEvent =
    document.getElementById("selectedEvent");


eventButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const eventName =
            button.getAttribute("data-event");


        selectedEvent.textContent =
            eventName;


        dashboardSection.style.display =
            "none";


        registrationSection.style.display =
            "block";

    });

});




const registrationForm =
    document.getElementById("registrationForm");

const registrationMessage =
    document.getElementById("registrationMessage");


registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    

    const regName =
        document.getElementById("regName").value.trim();

    const regUsn =
        document.getElementById("regUsn").value.trim();

    const role =
        document.getElementById("role").value;

    const year =
        document.getElementById("year").value;


  

    if (
        regName === "" ||
        regUsn === "" ||
        role === "" ||
        year === ""
    ) {

        registrationMessage.textContent =
            "All registration fields are required.";

        return;
    }



    registrationMessage.textContent =
        "Registration successful for " +
        selectedEvent.textContent;

});