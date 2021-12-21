import React, { Component } from 'react';
import './style.css'
class CategoryList extends Component {
    _handler(e) {
        if (e.key == 'Enter') {
            const category = e.target.value
            this.props.addCategory(category)
        }
    }

    render() {
        return (
            <section className="category-list">
                <ul className="category-list-list">
                    { this.props.categories.map((category, index) => { 
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