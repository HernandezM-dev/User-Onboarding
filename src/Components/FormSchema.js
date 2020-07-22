import * as yup from 'yup'

const formSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email must be valid")
        .required("Email is required"),
    firstname: yup  
        .string()
        .min(2, "First Name must be at least 2 characters"),
     lastname: yup
        .string()
        .min(4, "Lastname must be at least 4 character")
        .required("Last Name is required"),
    tos: yup
        .boolean()
        .oneOf([true], "Must Accept Terms of Service")
})

export default formSchema