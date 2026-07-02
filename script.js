const email = document.querySelector("#user-email");

// 1. Handle the custom error messages when validation fails
email.addEventListener("invalid", (event) => {
  // If the required field is empty
  if (email.validity.valueMissing) {
    email.setCustomValidity("Oops! Please add your email");
  } else if (email.validity.typeMismatch) {
    // If they typed something, but it's not a valid email format
    email.setCustomValidity("Oops! Please check your email");
  }
});

// 2. CRITICAL: Clear the custom error when the user starts typing again
email.addEventListener("input", () => {
  email.setCustomValidity("");
});
