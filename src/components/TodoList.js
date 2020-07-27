import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Empty } from 'antd'

const TodoListItem = (props) => {
    return (
        <ul className={["tdl-list", props.list.length ? null : 'empty'].join(' ')} onClick={props.onActive}>
            {
                props.list.length
                ?
                <TransitionGroup>
                    {
                        props.list.map((item) => {
                            return (
                                <CSSTransition                                                
                                    timeout = {500}
                                    classNames = 'fade'
                                    unmountOnExit
                                    onEnter = {(el) => {
                                        // el.style.color = '#FF0000'
                                    }}
                                    appear = {true}
                                    key = {item}>
                                    <li data-value={item}>
                                        <span dangerouslySetInnerHTML={{__html: item}}></span>
                                        <button onClick={props.onDelete}>Delete</button>
                                    </li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                :
                <Empty></Empty>
            }
        </ul>
    )
}

TodoListItem.propTypes = {
    list: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onActive: PropTypes.func
}

TodoListItem.defaultProps = {
    list: []
}

export default TodoListItem
