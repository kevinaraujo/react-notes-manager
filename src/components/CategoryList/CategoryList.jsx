import React, { Component } from 'react';
import './style.css'
class CategoryList extends Component {

    constructor() {
        super()
        this.state = { categories: []}
        this._newCategories = this._newCategories.bind(this)
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newCategories)
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategories)        
    }

    _newCategories(categories) {
        this.setState({ ...this.state, categories })
    }

    _handler(e) {
        if (e.key == 'Enter') {
            let category = e.target.value
            
            this.props.addCategory(category)
        }
    }

    render() {
        return (
            <section className="category-list">
                <ul className="category-list-list">
                    { this.props.categories.categories.map((category, index) => { 
                        return (
                            <li key={ index }
                            className="category-list-item">
                                { category }
                            </li>
                        )
                    })}
                </ul>
                <input 
                    type="text" 
                    className="category-list-input"
                    placeholder="Add Category"
                    onKeyUp={ this._handler.bind(this) }/>
            </section>
        )
    }
}

export default CategoryList