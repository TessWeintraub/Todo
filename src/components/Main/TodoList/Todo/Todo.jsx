import React from 'react';
import classes from "./Todo.module.css";
import {useDispatch} from "react-redux";
import {deleteDataAction} from "../../../../redux/action";
import icon_delete from  "../../../../assets/icon_delete.svg"

const Todo = ({id, todo_content, item, allTodo}) => {
    const dispatch = useDispatch()

    const deleteTodo = (item,allTodo) => {
        const newAllTodo = allTodo.filter(todo => (todo.id === id) || todo)
        dispatch(deleteDataAction(newAllTodo))
    }
    console.log(todo_content)
    return (
        <div className={classes.todo} >
            <p className={classes.todoContent}>
                {todo_content}
            </p>
            <img
                src={icon_delete}
                onClick={()=>{deleteTodo(item,allTodo)}}
                className={classes.todoButtonDelete}
            />

        </div>
    );
};

export default Todo;