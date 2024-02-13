console.clear();

const form = document.querySelector('[data-js="form"]');


form.addEventListener("submit", (event) => {
    event.preventDefault();
/*

    const data = {
        firstName: event.target.elements.firstName.value,
        lastName: event.target.elements.lastName.value,
        age: event.target.elements.age.value,
        email: event.target.elements.email.value,
        whatWentWrong: event.target.elements.complaint.value,
        aboutComplaint: event.target.elements.details.value,
        experience: event.target.elements.badness.value,
        date: event.target.elements.orderDate.value,
        tos: event.target.elements.tos.checked,
    };
*/
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    event.target.elements.firstName.focus();
    event.target.reset();
});


