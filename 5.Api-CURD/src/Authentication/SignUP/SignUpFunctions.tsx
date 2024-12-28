import { useState } from "react"

const handleSignUp = () =>{

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const nameRegex = /^[A-Za-z\s]+$/;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^[A-Za-z]{5,}\d{2,}$/

    const formFields = {...form}
    const newErrors = {...errors}
    let IsFormValid = true

    if(!nameRegex.test(formFields.name)){
        newErrors.name = "Full Name should only contain letters and spaces.";
        IsFormValid = false;
    }
    else{
        newErrors.name = ''
    }

    if(!emailRegex.test(formFields.email)){
        newErrors.email = "Please enter a valid email address.";
        IsFormValid = false;
    }
    else{
        newErrors.email = ''
    }

    if(!passwordRegex.test(formFields.password)){
        newErrors.password = "Password should contain at least 5 characters and 2 numbers.";
        IsFormValid = false;
    }
    else{
        newErrors.password = ''
    }

    if(formFields.password !== formFields.confirmPassword){
        newErrors.confirmPassword = "Passwords do not match.";
        IsFormValid = false;
    }
    else{
        newErrors.confirmPassword = ''
    }

    if(IsFormValid){
        console.log(formFields)
    }
    else{
        setErrors(newErrors)
    }    
}

export default handleSignUp