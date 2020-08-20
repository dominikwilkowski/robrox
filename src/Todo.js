/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useState, useCallback } from 'react';

import { getTodoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './helpers';
import { AddNewTodoForm } from './AddNewTodoForm';
import { TodoList } from './TodoList';

export function Todo() {
	const [todoItems, setTodoItems] = useState(getTodoItemsFromLocalStorage('todo') || []);

	const addTodoHandler = useCallback(
		(todo) => {
			const id = todoItems.length === 0 ? 1 : todoItems[todoItems.length - 1].id + 1;
			const newTodoItems = [...todoItems];
			newTodoItems.push({ id, todo });

			setTodoItems(newTodoItems);
			saveTodoItemsToLocalStorage('todo', newTodoItems);
		},
		[todoItems]
	);

	const removeTodoHandler = useCallback(
		(id) => {
			const newTodoItems = todoItems.filter((todoItem) => todoItem.id !== id);

			setTodoItems(newTodoItems);
			saveTodoItemsToLocalStorage('todo', newTodoItems);
		},
		[todoItems]
	);

	const toggleTodoDoneHandler = useCallback(
		(id) => {
			const todo = todoItems.find((todoItem) => todoItem.id === id);
			todo.isDone = !todo.isDone;

			setTodoItems([...todoItems]);
			saveTodoItemsToLocalStorage('todo', todoItems);
		},
		[todoItems]
	);

	const editTodoHandler = useCallback(
		(id, todo) => {
			const editingTodo = todoItems.find((todoItem) => todoItem.id === id);
			editingTodo.todo = todo;

			setTodoItems([...todoItems]);
			saveTodoItemsToLocalStorage('todo', todoItems);
		},
		[todoItems]
	);

	return (
		<div
			css={{
				boxShadow: '0 25px 50px -12px rgba(0,0,0,.5)',
				maxWidth: '37.5rem',
				background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%);',
				margin: '3rem auto',
				padding: '1rem',
				color: '#fff',
			}}
		>
			<h1
				css={{
					fontSize: '2.5rem',
					fontWeight: 500,
					textAlign: 'center',
					marginBottom: '1.5rem',

					':after': {
						content: '""',
						display: 'block',
						width: '80%',
						height: '2px',
						background: '#fff',
						margin: '1rem auto',
					},
				}}
			>
				Rox's To-do List
			</h1>
			<AddNewTodoForm onAddTodo={addTodoHandler} />

			<TodoList
				todoItems={todoItems}
				onRemoveTodo={removeTodoHandler}
				onToggleTodoDone={toggleTodoDoneHandler}
				onEditTodo={editTodoHandler}
			/>
		</div>
	);
}
