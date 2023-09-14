import React, { useState } from 'react';
import SingleTodo from './SingleTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    todo: ''
  });

  // Destructure formFields
  const { name, email, todo } = formFields;

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      todo,
      id: Date.now()
    };

    setTodos([...todos, userData]);

    // Clear form fields after submission
    setFormFields({
      name: '',
      email: '',
      todo: ''
    });
  };

  // Handle todo item deletion
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className="container shadow p-3 col-md-7 col-lg-5 m-auto">
        <h1 className="display-1 text-center">TodoList</h1>
        <form>
          <label>Enter Your Todo</label>
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Your ..."
            className="my-3 form-control"
          />
          <input
            value={email}
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Enter Your Email..."
            className="my-3 form-control"
          />
          <input
            value={todo}
            onChange={handleChange}
            name="todo"
            type="text"
            placeholder="Enter Your Todo..."
            className="my-3 form-control"
          />
          <button onClick={handleSubmit} className="btn btn-info w-100 my-3">
            Add Todo
          </button>
        </form>
      </div>
      <div className="row m-auto text-align-center justify-content-center">
        {todos.map((todo) => (
          <div className="col-sm-3 gap-3 m-2 p-3 shadow border rounded text-center" key={todo.id}>
            <SingleTodo {...todo} todos={todos} deleteTodo={handleDelete} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
