import React from 'react'
import PropTypes from 'prop-types'

class TodoListItem extends React.Component {
    render() {
        return (
            <li data-value={this.props.value} onClick={this.props.onActive}>
                <span dangerouslySetInnerHTML={{__html: this.props.value}}></span>
                <button onClick={this.props.onDelete}>Delete</button>
            </li>
        )
    }
}

TodoListItem.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    onDelete: PropTypes.func
}

TodoListItem.defaultProps = {
    value: 'index'
}

export default TodoListItem
