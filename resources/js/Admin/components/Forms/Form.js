import React, { useState } from 'react'
import TinyMCEForm from './TinyMCE'

const Form = (props, cb) => {
    console.log(props.data);

    const { name, label, type } = props.data;

    const InputType = (props) => {
        const className = `form-input mt-1 block w-full`;
        if (type == 'text' || type == 'number') {
            return (
                <input type={type} name={name} placeholder={label} className={className} />
            )
        } else if (type == 'textarea') {
            return (
                <textarea name={name} rows="10" className={className}>

                </textarea>
            )
        } else if (type == 'file'){
            return (
                <input type="file" className={className} name={name}/>
            )
        } else if (type == 'tinyMCE'){
            return (
                // HALO
                <TinyMCEForm name={name}/>
            )
        } else{
            return (
                <p>HALOO</p>
            );
        }
    };


    return (
        <>
            <label className="block">
                <span className="text-gray-700">{label}</span>
                {/* <input type={type} name={name} placeholder="Jane Doe" className="form-input mt-1 block w-full" /> */}

                <InputType/>
            </label>
        </>
    )
}



export default Form
