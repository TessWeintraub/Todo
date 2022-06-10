import React, {useState} from 'react';
import classes from "./CreateTodo.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addDataAction} from "../../../redux/action";

const CreateTodo = () => {
    const [input, setInput] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const todos = useSelector( state => state)
    const dispatch = useDispatch()



    const sendData = data => {
        if(!data){
            setErrorMessage(true)
            return
        }
        const send = {
            todo_id: Date.now(),
            todo_content: data
        }
        setErrorMessage(false)
        data && dispatch(addDataAction([...todos,send]))
        data && setInput('')
    }


    return (
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                <input
                    value={input}
                    className={classes.inputTodo}
                    onChange={e=> setInput(e.target.value)}
                />
                {errorMessage && <p className={classes.errorMessage}>Поле не заполнено</p>}
            </div>
            <button
                className={classes.buttonSend}
                onClick={()=>sendData(input)}
            >Отправить</button>
        </div>
    );
};

export default CreateTodo;