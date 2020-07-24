import React from 'react'

class TodoListItem extends React.Component {
    render() {
        return (
            <li data-value={this.props.value}>
                <span dangerouslySetInnerHTML={{__html: this.props.value}}></span>
                <button onClick={this.props.onDelete}>Delete</button>
            </li>
        )
    }
}

export default TodoListItem
