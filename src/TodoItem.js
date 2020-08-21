/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useCallback, useRef } from 'react';

import { Checkbox } from './Checkbox';
import { Textarea } from './Textarea';

export function TodoItem({ todo, id, onRemoveTodo, onToggleTodoDone, onEditTodo, isDone }) {
	const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo]);
	const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone]);

	const editTodoHandler = useCallback(
		(event) => {
			if (event.keyCode === 13) {
				event.preventDefault();
				const { value } = event.target;

				onEditTodo(id, value);
				event.target.blur();
			}
		},
		[id, onEditTodo]
	);

	const checkboxRef = useRef(null);

	return (
		<li
			css={{
				display: 'grid',
				gridTemplateColumns: '5rem auto 3rem',
				alignItems: 'center',
			}}
		>
			<Checkbox
				ref={checkboxRef}
				checked={!!isDone}
				onChange={toggleTodoDoneHandler}
				onClick={() => checkboxRef.current.click()}
			/>
			<Textarea defaultValue={todo} onKeyDown={editTodoHandler} isDone={isDone} />
			<button
				onClick={removeTodoHandler}
				css={{
					appearance: 'none',
					border: 'none',
					padding: '0.5rem',
					fontSize: '1.5rem',
					background: 'transparent',
					cursor: 'pointer',
				}}
			>
				<span role="img" aria-labelledby="trash" />❌
			</button>
		</li>
	);
}
