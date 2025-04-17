import { FormReservation } from './FormReservation.js';

const bookingForm = document.getElementById("booking-form");
const errorDisplay = document.getElementById("global-error");
const allInputs = bookingForm.querySelectorAll("input");

const reservedSlots = [];

const myForm = ()=>{
    bookingForm.addEventListener("submit", (event) =>{
        event.preventDefault()

        const formData = new FormData (bookingForm); //save data of bookingForm
        const data = Object.fromEntries(formData.entries());

        const reservation = new FormReservation(
            data.name,
            data.date,
            data.time,
            data.participants
        );

        console.log(reservation.toJSON());
        reservation.validate(reservedSlots);

        const errors = reservation.getErrors();

        allInputs.forEach(input => {
            if (errors[input.name]) {
                input.style.backgroundColor = "red";
            } else {
                input.style.backgroundColor = "white";
            }
        });

        allInputs.forEach(input => {
            input.addEventListener("input", myForm);
        });

        if (reservation.hasErrors()) {
            const errors = reservation.getErrors();
            console.log("Form has errors:", errors);
            console.log("Reservation is invalid:");
        } else {
            console.log("Reservation is valid:", reservation.toJSON());
        }

    });
};

// const handleFormErrors = (errors = null)=> {
//     const errorDisplay = document.getElementById("global-error");
//     const allInputs = bookingForm.querySelectorAll("input");
//
//     if (errors && Object.keys(errors).length > 0) {
//         errorDisplay.textContent = Object.values(errors).map(msg => `• ${msg}`).join("<br>");
//         errorDisplay.style.display = "block";
//
//         allInputs.forEach(input => {
//             input.style.backgroundColor = errors[input.name] ? "red" : "white";
//         });
//     } else {
//         errorDisplay.style.display = "none";
//         errorDisplay.innerHTML = "";
//
//         allInputs.forEach(input => {
//             input.style.backgroundColor = "white";
//         });
//     }
// };

myForm();
