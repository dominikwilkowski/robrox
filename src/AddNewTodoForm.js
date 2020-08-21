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
					gridTemplateColumns: '1fr',
					margin: '0 1rem',

					'@media(min-width: 390px)': {
						gridTemplateColumns: 'auto 5rem',
						margin: 0,
					},
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
						fontSize: '1.5rem',
						background: 'transparent',
						width: '100%',
						borderBottom: '2px solid transparent',
						borderRadius: 0,
						color: '#fff',

						':focus': {
							outline: 'none',
							borderColor: '#fff',
						},

						'::placeholder': {
							color: 'rgba(255,255,255,0.7)',
						},
					}}
				/>
				<button
					type="submit"
					css={{
						display: 'none',
						appearance: 'none',
						border: 'none',
						padding: '0.5rem',
						fontSize: '2rem',
						background: 'transparent',
						color: '#fff',
						cursor: 'pointer',

						'@media(min-width: 390px)': {
							display: 'block',
						},
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}
