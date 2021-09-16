
import React from 'react';
import { useState, useEffect } from 'react';
import "./effects.css";
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    })

    const {name, email}  = formState;


    useEffect(()=>{
        //console.log("hey!");
    }, []);

    useEffect(()=>{
        //console.log("formState Cambio!");
    }, [formState]);

    useEffect(()=>{
        //console.log("email Cambio!");
    }, [email]);


    const handleInputChange = ({target})=>{
        
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1> 
            <hr />
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingresa Tu Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Ingresa Tu Email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            { (name==="123") && <Message />}

        </>
    )
}

export default SimpleForm



