import React from 'react'
import TodoList from './TodoList'
import TodoListView from './TodoListView'
import { Input, Button, Alert } from 'antd'
import { 
    getChangeInpuValAction, 
    getAddListItemAction, 
    getDeleteListItemAction, 
    getChangeActiveListItemAction,  
    getInitListSagaAction,
    getHeaderInputChangeValAction,
    getHeaderInputRepeatAction,
    getHeaderInputFoucsAction
} from '../store/actionCreators'
import { connect } from 'react-redux'
import { TDLHeaderWrapper, TDLMain, TDLRepeatTip } from './style'

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.inputDom = React.createRef()
    }
    handleInputChangeVal = (e) => {
        this.props.headerInputChangeVal(e.target.value)
    }
    handleAddListItem = (e) => {
        const $newVal = this.props.header.inputVal
        if (!$newVal.length) return
        if (this.props.global.list.includes($newVal)) {
            this.props.headerInputRepeat(true)
            return
        }
        this.props.addListItemAction($newVal)
        this.props.headerInputChangeVal('')
        this.props.headerInputRepeat(false)
        this.inputDom.current.focus()
    }
    handleDeleteListItem = (e) => {
        e.stopPropagation()
        this.props.deleteListItemAction(e.target.parentElement.dataset.value)
    }
    handleChangeActiveItem = (e) => {
        if (e.target.tagName === 'LI') {
            const $state = this.props.global
            const $active = $state.list.indexOf(e.target.dataset.value)
            const $newActive = $active === $state.active ? $state.activeListItem : $active
            this.props.changeActiveItemAction($newActive)
        }
    }
    componentDidMount() {
        this.inputDom.current.focus()
        this.props.initListAction()
    }
    render() {
        return (
            <div>
                <TDLHeaderWrapper>
                    <Input 
                        placeholder="input any here..."
                        className={["tdl-input", this.props.header.inputFoucs ? 'active' : null].join(' ')}
                        onFocus={this.props.headerInputFoucs}
                        onBlur={this.props.headerInputFoucs}
                        ref={this.inputDom}
                        value={this.props.header.inputVal}
                        onChange={this.handleInputChangeVal}>    
                    </Input>
                    <Button type="primary" onClick={this.handleAddListItem}>add</Button>
                </TDLHeaderWrapper>
                <TDLMain>
                    <TodoList list={this.props.global.list} onDelete={this.handleDeleteListItem} onActive={this.handleChangeActiveItem}></TodoList>
                    <TodoListView></TodoListView>
                </TDLMain>
                <TDLRepeatTip>
                    { this.props.header.inputRepeat && <Alert message="new item is repeat" type="warning" showIcon /> }
                </TDLRepeatTip>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { global: state.global, header: state.header }
}

function mapDispatchToProps(dispatch) {
    return {
        initListAction: function () {
            // thunk
            // dispatch(getInitListThunkAction())
            // saga
            dispatch(getInitListSagaAction())
        },
        inputChangeValAction: function (val) {
            dispatch(getChangeInpuValAction(val))
        },
        addListItemAction: function (val) {
            dispatch(getAddListItemAction(val))
        },
        deleteListItemAction: function (val) {
            dispatch(getDeleteListItemAction(val))
        },
        changeActiveItemAction: function (val) {
            dispatch(getChangeActiveListItemAction(val))
        },
        headerInputChangeVal: function (val) {
            dispatch(getHeaderInputChangeValAction(val))
        },
        headerInputRepeat: function (val) {
            dispatch(getHeaderInputRepeatAction(val))
        },
        headerInputFoucs: function () {
            dispatch(getHeaderInputFoucsAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)