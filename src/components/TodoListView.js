import React from 'react'
import { connect } from 'react-redux'
import { getFileResAction, getAddFileResAction } from '../store/actionCreators'
import TodoRouter from './TodoRouter'

const TodoListView = (props) => {
    return (
        <React.Fragment>
            <div className="tdl-view">
                <p style={{textAlign: "center"}}>{props.file.res}</p>
                <button onClick={props.getFetchFileAction}>fetch</button>
                <button onClick={props.getAddFileResAction}>add</button>
                <TodoRouter></TodoRouter>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        file: state.file
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFetchFileAction: function () {
            dispatch(getFileResAction())
        },
        getAddFileResAction: function() {
            dispatch(getAddFileResAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView)