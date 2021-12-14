import React, { Component } from 'react'
import './style.css'

class RegisterForm extends Component {
    render() {
        return (
            <form className="register-form"> 
                <input 
                    type="text" 
                    placeholder="Title"
                    className="register-form-input"
                />
                <textarea 
                    rows={ 15 }
                    placeholder="Type your note..."
                    className="register-form-input"
                />

                <button className="register-form-input register-form-submit">
                    Create Note
                </button>
            </form>
        )     
    }
}

export default RegisterForm