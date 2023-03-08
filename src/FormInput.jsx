import React from 'react'

const FormInput = (props) => {
  return (
    <div>
      <input placeholder={props.placeholder} onChange = {e=>props.setEmail(e.target.value)}/>
    </div>
  )
}

export default FormInput