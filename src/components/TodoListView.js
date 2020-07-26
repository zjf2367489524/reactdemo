import React from 'react'

class TodoListView extends React.Component {
    componentWillMount() {}
    componentDidMount() {}
    componentWillReceiveProps() {}
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.activeIndex != nextProps.activeIndex) return true
        return false
    }
    componentWillUpdate() {}
    componentDidUpdate() {}
    componentWillUnmount() {}
    render() {
        console.log('render')
        return (
            <React.Fragment>
                <span>index: {this.props.activeIndex} / val: {this.props.activeVal}</span>
            </React.Fragment>
        )
    }
}

export default TodoListView