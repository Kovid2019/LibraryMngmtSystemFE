//Atleast 6 characters required
//Atleast 1 UPPERCASE
//Atleast 1 lowercase
//Atleast 1 digit
//Atleast 1 special character(!@#$%^&*(){}<>?)
//Password do not match with confirm password
export const validator = (password = "", confirmPassword = "") => {
  const error = [];
  password.length < 6 && error.push("Atleast 6 characters required");
  !/[A-Z]/.test(password) &&
    error.push("Password must contain atleast 1 UPPER CASE letter");
  !/[a-z]/.test(password) &&
    error.push("Password must contain atleast 1 lower case letter");
  !/[0-9]/.test(password) &&
    error.push("Password must contain atleast 1 Number");
  !/[!@#$%^&*(){}<>?]/.test(password) &&
    error.push("Password must contain atleast 1 special character");
  password !== confirmPassword &&
    error.push("Password and confirm password do not match");
  return error;
};
