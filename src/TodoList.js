/** @jsx jsx */

import { jsx } from '@emotion/core';

import { TodoItem } from './TodoItem';
import { slugify } from './helpers';

export function TodoList({
	todoItems,
	onRemoveTodo,
	onToggleTodoDone,
	onEditTodo,
	setCustomError,
}) {
	return (
		<ul
			css={{
				listStyle: 'none',
				padding: 0,
				margin: '0 auto',
				marginTop: '1rem',

				'& li:nth-child(odd)': {
					background: 'rgba(230,230,230,0.1)',
				},
			}}
		>
			{todoItems &&
				Array.isArray(todoItems) &&
				todoItems.length > 0 &&
				todoItems.map(({ id, todo, isDone }, i) => (
					<TodoItem
						key={slugify(`${id}-${todo}`)}
						id={id}
						todo={todo}
						onRemoveTodo={onRemoveTodo}
						onToggleTodoDone={onToggleTodoDone}
						onEditTodo={onEditTodo}
						isDone={isDone}
						setCustomError={setCustomError}
					/>
				))}
		</ul>
	);
}
