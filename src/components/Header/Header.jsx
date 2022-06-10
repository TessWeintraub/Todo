import React from 'react';
import classes from "./Header.module.css";
import CreateTodo from "./CreateTodo/CreateTodo";

const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>TODO</h1>
            <CreateTodo/>
        </header>
    );
};

export default Header;