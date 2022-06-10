import React,{useEffect} from 'react';
import classes from './TodoList.module.css'
import Todo from "./Todo/Todo";
import {useDispatch, useSelector} from "react-redux";
import {addDataAction} from "../../../redux/action";

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector( state => state)

    useEffect(()=>{
        const localTodos = localStorage.getItem('TODO-LIST')

        localTodos && dispatch(addDataAction(JSON.parse(localTodos)))
    },[])

    useEffect(()=>{
        localStorage.setItem('TODO-LIST', JSON.stringify(todos))
    },[todos])

    console.log(todos)
    return (
        <div className={classes.todoList}>
            <h1 className={classes.todoListTitle}>Список задач</h1>
            <section className={classes.todos}>
                {todos && todos.map((element)=> <Todo id={element.id} todo_content={element.todo_content} allTodo={todos}/>)}
            </section>
        </div>
    );
};

export default TodoList;