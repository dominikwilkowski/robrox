/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useCallback, useRef, useState } from 'react';

import { Checkbox } from './Checkbox';
import { Textarea } from './Textarea';
import { debounce } from './helpers';

export function TodoItem({ todo, id, onRemoveTodo, onToggleTodoDone, onEditTodo, isDone }) {
	const [todoVal, setTodoVal] = useState(todo);
	const [saved, setSaved] = useState(false);
	const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo]);
	const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone]);

	/**
	 * The handler for when the input changes and we may want to save the changes
	 */
	const editTodoHandler = useCallback(
		(event) => {
			const target = event.target;
			setTodoVal(target.value);
			setSaved(false);

			debounce({
				func: function () {
					onEditTodo(id, target.value);
					setSaved(true);
				},
				wait: 1000,
			})();
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
				opacity: isDone ? 0.3 : 1,
			}}
		>
			<Checkbox
				ref={checkboxRef}
				checked={!!isDone}
				onChange={toggleTodoDoneHandler}
				onClick={() => checkboxRef.current.click()}
			/>
			<Textarea value={todoVal} onChange={editTodoHandler} isDone={isDone} saved={saved} />
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
				<span role="img" aria-labelledby="trash">
					❌
				</span>
			</button>
		</li>
	);
}
