import React from 'react';

const List = (props) => {
    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchedResults(props.searchText)}

            {props.searchedTodos.map(props.render)}
        </section>
    )
}

export default List
