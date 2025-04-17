import {FormReservation} from './FormReservation.js';

const bookingForm = document.getElementById("booking-form");
const reservedSlots = [
    "2025-04-20T09:00",
    "2025-06-21T10:30"
];

const myForm = ()=>{
    bookingForm.addEventListener("submit", (event) =>{
        event.preventDefault()

        const { reservation } = getFormAndReservation(bookingForm);

        reservationSlot(reservation)
        checkInputForm(reservation);
    });
};

const getFormAndReservation = (formElement) => {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    const reservation = new FormReservation(
        data.name,
        data.date,
        data.time,
        data.participants
    );

    return { data, reservation };
};

const reservationSlot =(form)=>{
    form.validate(reservedSlots);
}

const checkInputForm = (reservation) => {
    if (reservation.hasErrors()) {
        const errors = reservation.getErrors();
        console.log("Form has errors:", errors);
        handleFormErrors(bookingForm, errors);
    } else {
        const slotKey = `${reservation.date}T${reservation.time}`;

        if (!reservedSlots.includes(slotKey)) {
            reservedSlots.push(slotKey);
        }

        console.log("✅ Reservation added:", reservedSlots);
        console.log("Reservation is valid:", reservation.toJSON());
        handleFormErrors(bookingForm);
    }
};

const handleFormErrors = (formElement, errors = {}) => {
    const allInputs = formElement.querySelectorAll("input");
    const errorBox = document.getElementById("global-error");


    for (const input of allInputs) {
        input.style.backgroundColor = errors[input.name] ? "red" : "white"; //add style
    }

    if (Object.keys(errors).length > 0) { //display or not errors messages
        errorBox.innerHTML= Object.values(errors).map(msg => `• ${msg}`).join("<br><br>");
        errorBox.style.display = "block";
    } else {
        errorBox.innerText = "";
        errorBox.style.display = "none";
    }
};

myForm();
