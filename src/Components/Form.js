import React from "react"
import * as yup from "yup"

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


export default function Form(props){

    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
    
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return(
        <form className='form-container' /* on submit function */ >
            <div className='form-submit'>
                <h2>Add User</h2>

            <div className='errors'>
                <div>{errors.fistname}</div>
                <div>{errors.lastname}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
                

            </div>
            <div className='form-inputs'>
                <h3>New User Info</h3>
                <label>First Name: &nbsp;
                    <input 
                      value={values.firstname}
                      onChange={onInputChange}
                      placeholder='First Name'
                      maxlength='15'
                      name='firstname'
                      type='text'
                    />
                </label>
                <label> LastName: &nbsp;
                    <input 
                        value={values.lastname}
                        onChange={onInputChange}
                        placeholder='Last Name'
                        maxlength='15'
                        name='lastname'
                        type='text'
                    />
                </label>
                <label>E-mail: &nbsp;
                    <input 
                        value={values.email}
                        onChange={onInputChange}
                        placeholder='E-mail'
                        maxlength='20'
                        name='email'
                        type='email'
                    />
                </label>
                
                <label>Password: &nbsp;
                    <input 
                        value={values.password}
                        onChange={onInputChange}
                        placeholder='Password'
                        maxlength='15'
                        name='password'
                        type='text'
                    />
                </label>
                
                <label>Terms of Service
                    <input
                    type='checkbox'
                    name='tos'
                    checked={values.tos === true}
                    onChange={onCheckboxChange}
                />
                </label>
            </div>
            
            <button disabled={disabled}>submit</button>

        </form>
    )


}