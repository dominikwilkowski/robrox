/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useState } from 'react';

export function AddNewTodoForm({ onAddTodo }) {
	const [value, setValue] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		onAddTodo(value);
		setValue('');
	};

	return (
		<div
			css={{
				maxWidth: '35rem',
				margin: '0 auto 2rem auto',
			}}
		>
			<form
				onSubmit={handleSubmit}
				css={{
					display: 'grid',
					gridTemplateColumns: 'auto 4rem',
				}}
			>
				<input
					name="todo"
					type="text"
					autoComplete="off"
					placeholder="What needs to be done?"
					value={value}
					onChange={(event) => setValue(event.target.value)}
					css={{
						appearance: 'none',
						border: 'none',
						padding: '0.5rem',
						fontSize: '2rem',
						background: 'transparent',
					}}
				/>
				<button
					type="submit"
					css={{
						appearance: 'none',
						border: 'none',
						padding: '0.5rem',
						fontSize: '2rem',
						background: 'transparent',
						color: '#000',
						cursor: 'pointer',
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}
