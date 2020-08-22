/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useState, useCallback } from 'react';

import { getTodoItems, saveTodoItems } from './helpers';
import { MainForm } from './MainForm';
import { TaskList } from './TaskList';

export function Todo() {
	const [todoItems, setTodoItems] = useState(getTodoItems() || []);

	/**
	 * The handler for adding items to the list
	 */
	const addTodoHandler = useCallback(
		(todo) => {
			const id = todoItems.length === 0 ? 1 : todoItems[todoItems.length - 1].id + 1;
			const newTodoItems = [...todoItems];
			newTodoItems.push({ id, todo });

			setTodoItems(newTodoItems);
			saveTodoItems(newTodoItems);
		},
		[todoItems]
	);

	/**
	 * The handler for removing items from the list
	 */
	const removeTodoHandler = useCallback(
		(id) => {
			const newTodoItems = todoItems.filter((todoItem) => todoItem.id !== id);

			setTodoItems(newTodoItems);
			saveTodoItems(newTodoItems);
		},
		[todoItems]
	);

	/**
	 * The handler for checking the done checkbox
	 */
	const toggleTodoDoneHandler = useCallback(
		(id) => {
			const todo = todoItems.find((todoItem) => todoItem.id === id);
			todo.isDone = !todo.isDone;

			setTodoItems([...todoItems]);
			saveTodoItems(todoItems);
		},
		[todoItems]
	);

	/**
	 * The handler for editing items on the list
	 */
	const editTodoHandler = useCallback(
		(id, todo) => {
			const editingTodo = todoItems.find((todoItem) => todoItem.id === id);
			editingTodo.todo = todo;

			saveTodoItems(todoItems);
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
				padding: '1rem 0',
				color: '#fff',

				'@media(min-width: 390px)': {
					padding: '1rem',
				},
			}}
		>
			<h1
				css={{
					fontSize: '2.5rem',
					fontWeight: 500,
					textAlign: 'center',
					margin: '1rem 1rem 1.5rem 1rem',

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
				Rox's List
			</h1>
			<MainForm onAddTodo={addTodoHandler} />

			<TaskList
				todoItems={todoItems}
				onRemoveTodo={removeTodoHandler}
				onToggleTodoDone={toggleTodoDoneHandler}
				onEditTodo={editTodoHandler}
			/>
		</div>
	);
}
