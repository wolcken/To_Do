import React, { useState } from 'react'
import '../Styles/Form.css';

const Form = ({ addTodo, setOpenModal }) => {

    const [newTodoValue, setNewTodoValue] = useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };

    return (
        <form onSubmit={onAdd}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Write your To Do</h5>
                    </div>
                    <div className="modal-body">
                        <textarea
                            className="form-control"
                            aria-label="With textarea"
                            value={newTodoValue}
                            onChange={onChange}
                            placeholder="Write here..."
                        />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={onCancel}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-outline-success"
                        >
                            Añadir
                        </button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default Form
