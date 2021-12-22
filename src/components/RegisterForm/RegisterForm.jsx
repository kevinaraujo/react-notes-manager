import React, { Component } from 'react'
import './style.css'

class RegisterForm extends Component {

    constructor(props) {
        super()

        this.title = ''
        this.text = ''
        this.category = ''
        this.state = { categories: [] }
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newCategories.bind(this))
    }

    _newCategories(categories) {
        this.setState({ ...this.state, categories })
    }

    _handlerTitleChange(e) {
        this.title = e.target.value        
    }

    _handleTextChange(e) {
        this.text = e.target.value
    }

    _handleCategoryChange(e) {
        this.category = e.target.value
    }

    _createNote(e) {
        e.preventDefault()
        e.stopPropagation()

        this.props.createNote(this.title, this.text, this.category)
    }

    render() {
        return (
            <form 
                className="register-form"
                onSubmit={ this._createNote.bind(this) }
            >   
                <select 
                    className="register-form-input"
                    onChange={ this._handleCategoryChange.bind(this) }>
                    <option>---</option>
                    { 
                        this.state.categories.map((category, index) => {
                            return (
                                <option key={ index }>{ category }</option>
                            )
                        })
                    }
                </select>

                <input 
                    type="text" 
                    placeholder="Title"
                    className="register-form-input"
                    onChange={ this._handlerTitleChange.bind(this) }
                    
                />
                <textarea 
                    rows={ 15 }
                    placeholder="Type your note..."
                    className="register-form-input"
                    onChange={ this._handleTextChange.bind(this) }
                />

                <button className="register-form-input register-form-submit">
                    Create Note
                </button>
            </form>
        )     
    }
}

export default RegisterForm