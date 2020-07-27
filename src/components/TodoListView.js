import React from 'react'
import store from '../store'

class TodoListView extends React.Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = () => {
        this.setState((prevState) => {
            return store.getState()
        }, () => {})
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeListItem === nextState.activeListItem) return false
        return true
    }
    render() {
        const $list = this.state.list
        const $activeListItem = this.state.activeListItem
        return (
            <React.Fragment>
                <div>{$list[$activeListItem]}</div>
            </React.Fragment>
        )
    }
}

export default TodoListView