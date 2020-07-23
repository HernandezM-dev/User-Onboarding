import React, {useState, useEffect} from 'react';
import axios from 'axios'
import * as yup from 'yup'
import './App.css';
import FormSchema from './Components/FormSchema';
import Form from './Components/Form';
import User from  './Components/User';

const initialFormValues = {
  firstname: '',
  lastname:'',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  firstname: '',
  lastname:'',
  email: '',
  password: '',
  tos: false,
}

const initialUsers = []
const initialDisabled = true;

function App() {

const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const getUsers = () =>{
  axios.get('https://reqres.in/api/users')
    .then(res =>{
      setUsers(res.data.data)
    })
    .catch(err => {
      debugger
    })
}

const postNewUser = newUser =>{
  axios.post('https://reqres.in/api/users', newUser)
    .then(res =>{
    
      setUsers([res.data, ...users])
      console.log(res.data)
      setFormValues(initialFormValues)
    })
    .catch(err => {
      debugger
      console.log(err)
    })
}

const inputChange = (name, value) => {
  yup
    .reach(FormSchema, name)
    .validate(value)
    .then(valid =>{
      setFormErrors({...formErrors, [name]: ''})
    })

    .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
}

const checkboxChange = (name, isChecked) => {
  // 🔥 STEP 7- IMPLEMENT!
  //  set a new state for the whole form
  setFormValues({...formValues,tos:isChecked})
}

const submit = () =>{
  // debugger
  const newUser = {
    firstname: formValues.firstname.trim(),
    lastname: formValues.lastname.trim(),
    email: formValues.email.trim(),
  }
  postNewUser(newUser)
}

useEffect(() =>{
  getUsers()
}, [])

useEffect(() =>{
  FormSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])




  return (
    <div className="App">
      <header className="App-header">
        <Form
          values={formValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
          disabled={disabled}
          errors={formErrors}
        />
        {
          
           users.map(user =>{
            return <User details={user}/>
          })

        }
       
      </header>
    </div>
  );
}

export default App;
