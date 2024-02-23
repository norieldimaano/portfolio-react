import "./FormStyle.css"

import React from 'react'

const Form = () => {
  function Submit(e){
    const formEl = document.querySelector("form")
    const form = document.forms["submit-to-google-sheet"]
    e.preventDefault()
    const formData = new FormData(formEl)
    fetch("https://script.google.com/macros/s/AKfycbwq8NCsGBq9YkTyiXdhmp_4IEvMSim6wKZRtbHf7f_i9U_Q70bzKvpMq496ZGQHPHs9/exec",{
      method: "POST",
      body: formData
    }).then(response => {
      alert("Message sent succesfully")
      form.reset()
    }).catch((error)=>console.log(error))
  }
  return (
    <div>
        <form name="submit-to-google-sheet" className="form" onSubmit={(e)=> Submit(e)} autocomplete="off">
            <label>Your Name</label>
            <input placeholder="Name" name="Name" type="text" required/>
            <label>Email</label>
            <input placeholder="Email" name="Email" type="email"  required/>
            <label>Subject</label>
            <input placeholder="Subject" name="Subject" type="text"></input>
            <label>Message</label>
            <textarea row="6" placeholder="Type your message here..." name="Message" required/>
            <input className="btn" type="submit" />
        </form>
    </div>
  )
}

export default Form