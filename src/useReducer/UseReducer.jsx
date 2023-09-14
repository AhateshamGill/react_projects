import React, { useReducer, useState } from 'react';
import { reducer } from './reducer';
import Todos from './Todos';
const UseReducer = () => {


    // Initial state of the app
    const initialState = {
        todos: [],
        modal: false,
        modalContent: '',
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo) {
            dispatch({ type: 'EMPTY_INPUT' });
        } else {
            dispatch({ type: 'ADD_TODO', payload: todo });
        }

        setTimeout(() => {
            dispatch({ type: 'REMOVE_MODAL' });
        }, 3000);

        // Clear the input field after adding a todo
        setTodo('');
    };

    return (
        <>
            <div className="container col-sm-6 p-4 shadow">
                <h5 className={`text-center ${state.modalContent === 'Please Enter Todo' ? 'text-danger' : 'text-success'}`}>
                    {state.modal && state.modalContent}
                </h5>
                <form>
                    <h1 className="display-1 text-center">Your Todos</h1>
                    <label>Your Todo</label>
                    <input
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Please Enter Your Todo"
                    />
                    <button onClick={handleSubmit} className="btn btn-dark w-100 my-3">
                        Add Todo
                    </button>
                </form>
            </div>
            <div className="row my-3">
            {state.todos.map((todo,index)=>{
                return <div className="col-sm-4">
                    <Todos key={index} todo = {todo} />
                </div>
            })}
            </div>
        </>
    );
};

export default UseReducer;
