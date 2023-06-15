import {TodoListST, TodoListAT} from "./todo-types";

const initialState: TodoListST = {
  todoList: [
    {
      id: '100',
      filter: 'all',
      heading: 'What to eat?'
    },
    {
      id: '300',
      filter: 'all',
      heading: 'What to buy?'
    },
    {
      id: '200',
      filter: 'all',
      heading: 'What to do?'
    },
  ]
}

export const todosReducer = (state = initialState, action: TodoListAT): TodoListST => {
  return state
}
