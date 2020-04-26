import React, { Component } from "react";
import TodoList from "./TodoList";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
    this.handleInputkeyPress = this.handleInputkeyPress.bind(this);
    }

    componentDidMount() {
        this.setState({
            todoList: JSON.parse(localStorage.getItem("todoList")) || []
        })
    }
    
    handleInputkeyPress = event => {
        const { target: {value} } = event;

        if (event.key === "Enter") {
            this.setState({
                todoList: [...this.state.todoList, value]
            },
            // 함수 형태가 아니면 가장 마지막 넣은 todo가 로컬스토리지에 저장이 안된다..왜?
            () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
        }

        event.target.value = "";
        event.preventDefault();
    }

    handleClickRemove = index => {
        if (window.confirm("Do you really want to delete?")) {
            this.setState({
                todoList: [
                    ...this.state.todoList.slice(0, index),
                    ...this.state.todoList.slice(index+1)
                ]},
                () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
        }
    }

    render() {
        return(
            <div className="Todo-body">
                <input 
                    placeholder="Write things to do" 
                    onKeyPress={this.handleInputkeyPress}
                    className="Todo-input"
                ></input>
                <TodoList items={this.state.todoList} remove={this.handleClickRemove} />
            </div>
        );
    }
}

export default Todo;