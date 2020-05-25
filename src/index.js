import './styles.css';

import { Todo, Todolist } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new Todolist();

todoList.todos.forEach(crearTodoHtml);

const newTodo = new Todo('Aprender Javascript');
todoList.todos[0].imprimirClase();
// todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos)
