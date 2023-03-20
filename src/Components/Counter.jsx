import React from 'react';
import '../Styles/Counter.css';

const Counter = ({ totalTodos, completedTodos, loading }) => {
    return (
        <h1
            className={`Counter ${!!loading && "Counter--loading"}`}
        >
            You have completed {completedTodos} of {totalTodos} TODOs
        </h1>
    )
}

export default Counter
