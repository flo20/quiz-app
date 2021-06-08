import React from 'react'
import {useFormik} from "formik";

export default function FormFields() {
const formik = useFormik({
    initialValues:{
        name:"",
        email:"",
        channel:""
    },
    onSubmit: values=> {
       console.log("Form data", values);
    }
    
})
//console.log(formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="input-container" style={{display:"flex", flexDirection:"column", width:"50%"}}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name}/>
                <label htmlFor="name">Email</label>
                <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email}/>
                <label htmlFor="channel">Channel</label>
                <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
