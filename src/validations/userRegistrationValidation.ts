import * as yup from "yup";

const userRegistrationValidation = yup.object().shape({
  emailOrPhone: yup.string().required("Email or phone is required"),
  password: yup.string().required("Password is required"),
  name: yup.string().required("Name is required"),
});

export default userRegistrationValidation;
