const isEmpty=require('./IsEmpty');
const validator =require('validator');

module.exports = function ValidateUser(data) {
    let errors = {};
    data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
    data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.Password = !isEmpty(data.Password) ? data.Password : "";
    if (validator.isEmpty(data.Firstname)) {
      errors.Firstname = "Required Firstname";
    }
    if (validator.isEmpty(data.Lastname)) {
      errors.Lastname = "Required Lastname";
    }
    if (!validator.isEmail(data.Email)) {
      errors.Email = "Format Email required";
    }
    if (validator.isEmpty(data.Email)) {
      errors.Email = "Required Email";
    }
    if (validator.isEmpty(data.Password)) {
      errors.Password = "Required Password";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
  };