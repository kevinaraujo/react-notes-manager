class Categories {
    constructor() {
        this.categories = []
        this._subscribed = []
    }

    subscribe(func) {
        this._subscribed.push(func)
    }

    unsubscribe(func) {
        console.log(this._subscribed.length)
        this._subscribed = this._subscribed.filter(f => f !== func)
        console.log(this._subscribed.length)
    }

    notify() {
        this._subscribed.forEach(func => {
            func(this.categories)
        })
    }

    addCategory(newCategory) {
        this.categories.push(newCategory)
        this.notify()
    }
}

export default Categories