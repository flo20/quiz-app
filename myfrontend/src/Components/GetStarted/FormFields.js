import React from 'react'
import {useFormik} from "formik";

export default function FormFields() {

    const initialValues = {
        name:"",
        email:"",
        channel:""
    }
    const onSubmit = values => {
        console.log("Form data", values);
     }

     const validate = values => {
        let errors={};
        if(!values.name){
            errors.name = "Required"
        }
        if(!values.email){
            errors.email = "Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Invalid email format"
        }
        if(!values.channel){
            errors.channel = "Required"
        }
        return errors;
    }
const formik = useFormik({
    initialValues,
    onSubmit,
    validate
    
})
console.log("Visited field", formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="input-container" style={{display:"flex", flexDirection:"column", width:"50%"}}>
                <div>
                <label htmlFor="name">Name</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                onChange={formik.handleChange} 
                value={formik.values.name} 
                onBlur={formik.handleBlur} //visited fields
                />
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
               <div>
               <label htmlFor="name">Email</label>
                <input 
                type="email" 
                name="email" 
                id="email" 
                onChange={formik.handleChange} 
                value={formik.values.email}
                onBlur={formik.handleBlur} //visited fields
                />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
               </div>
              <div>
              <label htmlFor="channel">Channel</label>
                <input 
                type="text" 
                name="channel" 
                id="channel" 
                onChange={formik.handleChange} 
                value={formik.values.channel}
                onBlur={formik.handleBlur} //visited fields
                />
                {formik.touched.channel && formik.errors.channel ? <div>{formik.errors.channel}</div> : null}
              </div>
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
