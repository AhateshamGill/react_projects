export const reducer = (state, action) => {
    if (action.type === 'EMPTY_INPUT') {
        return {
            ...state,
            modal: true,
            modalContent: 'Please Enter Todo',
        };
    } else if (action.type === 'REMOVE_MODAL') {
        return {
            ...state,
            modal: false,
            modalContent: '',
        };
    } else if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.payload],
            modal: true,
            modalContent: 'Todo Added Successfully',
        };
    }

    return state;
};