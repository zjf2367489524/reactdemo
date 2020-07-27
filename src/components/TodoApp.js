import React from 'react'
import TodoList from './TodoList'
import TodoListView from './TodoListView'
import { Input, Button, Alert } from 'antd'
import store from '../store'
import { getChangeInpuValAction, getInputToRepeatAction, getAddListItemAction, getDeleteListItemAction, getChangeActiveListItemAction, getHideRepeatTipAction,  getInitListThunkAction } from '../store/actionCreators'
//import Axios from 'axios'

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.inputDom = React.createRef()
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = () => {
        this.setState((prevState) => {
            return store.getState()
        }, () => {})
    }
    handleInputChange = (e) => {
        const $action = getChangeInpuValAction(e.target.value)
        store.dispatch($action)
    }
    handleAddListItem = (e) => {
        const $prevState = this.state
        const $newVal = $prevState.inputVal
        let $action
        if (!$newVal.length) {
            alert('can not empty')
            return
        }
        if (this.state.list.includes($newVal)) {
            $action = getInputToRepeatAction()
            store.dispatch($action)
            return
        }
        $action = getAddListItemAction()
        store.dispatch($action)
        this.inputDom.current.focus()
    }
    handleDeleteListItem = (e) => {
        e.stopPropagation()
        const $target = e.target.parentElement.dataset.value
        const $action = getDeleteListItemAction($target)
        store.dispatch($action)
    }
    handleChangeActiveItem = (e) => {
        if (e.target.tagName === 'LI') {
            const $active = this.state.list.indexOf(e.target.dataset.value)
            const $newActive = $active === this.state.active ? this.state.activeListItem : $active
            const $action = getChangeActiveListItemAction($newActive)
            store.dispatch($action)
        }
    }
    handleHideTip = () => {
        console.log('1')
        const $action = getHideRepeatTipAction()
        store.dispatch($action)
    }
    componentDidMount() {
        this.inputDom.current.focus()
        // Axios.get('/list.json').then((res) => {}).catch((err) => {console.log(new Error(err))}).finally(() => {
        //     setTimeout(() => {
        //         const $action = getInitListAction(["lty"])
        //         store.dispatch($action)
        //     }, 10)
        // })
        // thunk
        const $action = getInitListThunkAction()
        store.dispatch($action)
        // saga
        // const $action = getInitListSagaAction()
        // store.dispatch($action)
    }
    render() {
        const $inputVal = this.state.inputVal
        const $list = this.state.list
        const $isInputRepeat = this.state.isInputRepeat
        return (
            <div className="tdl-wrap">
                <div className="tdl-add">
                    <Input 
                        placeholder="input any here..." 
                        style={{width: 256}}
                        ref={this.inputDom}
                        value={$inputVal}
                        onChange={this.handleInputChange}>    
                    </Input>
                    <Button type="primary" onClick={this.handleAddListItem}>add</Button>
                </div>
                <div className="tdl-main">
                    <TodoList list={$list} onDelete={this.handleDeleteListItem} onActive={this.handleChangeActiveItem}></TodoList>
                    <TodoListView></TodoListView>
                </div>
                <div className="tdl-tip">
                    {
                        $isInputRepeat &&
                        <Alert message="new item is repeat" type="warning" showIcon closable onClose={this.handleHideTip} />
                    }
                </div>
            </div>
        )
    }
}

export default TodoApp