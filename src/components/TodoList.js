import React from 'react'
import TodoListItem from './TodoListItem'
import TodoListTip from './TodoListTip'
import TodoListView from './TodoListView'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            input: '',
            isRepeat: false
        }
        this.inputDom = React.createRef()
    }
    handleInputChange = (e) => {
        const $input = e.target.value
        this.setState(() => ({ input: $input }))
    }
    handleAddListItem = (e) => {
        const $newVal = e.target.previousElementSibling.value
        if (!$newVal.length) {
            alert('can not empty')
            return
        }
        if (this.state.list.includes($newVal)) {
            this.setState(() => ({ isRepeat: true }))
            return
        }
        this.setState((prevState) => ({
            list: [...prevState.list, $newVal],
            input: '',
            isRepeat: false
        }))
        e.target.previousElementSibling.focus()
    }
    handleDeleteListItem = (e) => {
        const $target = e.target.parentElement.dataset.value
        this.setState((prevState) => {
            const $index = prevState.list.indexOf($target)
            const $newList = [...prevState.list]
            $newList.splice($index, 1)
            return {
                list: $newList
            }
        })
    }
    toHideTip = (e) => {
        this.setState(() => ({
            isRepeat: false
        }))
    }
    componentDidMount() {
        this.inputDom.current.focus()
    }
    render() {
        const $input = this.state.input
        const $list = this.state.list
        const $isRepeat = this.state.isRepeat
        return (
            <div className="tdl-wrap">
                <div className="tdl-add">
                    <label htmlFor="inputArea">Input:</label>
                    <input
                        ref={this.inputDom}
                        id="inputArea"
                        placeholder="input every here..."
                        type="text"
                        value={$input}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleAddListItem}>add</button>
                    <p>{
                        $input.length ? 'if ok, click button' : 'you can add item here by click add button'
                    }</p>
                </div>
                <div className="tdl-main">
                    <ul className="tdl-list">
                        {
                            $list.length
                                ?
                                $list.map((item) =>
                                    <TodoListItem key={item} value={item} onDelete={this.handleDeleteListItem}></TodoListItem>
                                )
                                :
                                <div className="tdl-list-empty">empty</div>
                        }
                    </ul>
                    <div className="tdl-view"></div>
                </div>
                <div className="tdl-tip">
                    <TodoListTip>
                        {
                            $isRepeat &&
                            <div><big style={{ color: '#ff0000' }} onClick={this.toHideTip}>&#10006;</big> : this new value is repeat</div>
                        }
                    </TodoListTip>
                </div>
            </div>
        )
    }
}

export default TodoList