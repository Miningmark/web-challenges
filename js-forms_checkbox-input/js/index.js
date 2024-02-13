console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}
function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", () => {
  if(tosCheckbox.checked){
    hideTosError();
  }else{
    showTosError()
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
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

  if(data.tos){
    hideTosError();
    alert("Form submitted");
    event.target.elements.firstName.focus();
    event.target.reset();
  }else{
    showTosError()
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  //alert("Form submitted");
});
