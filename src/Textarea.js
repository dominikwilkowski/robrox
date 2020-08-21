/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useEffect, useRef } from 'react';

function getPxFrom(element) {
	const computed = window.getComputedStyle(element);
	return (prop) => parseInt(computed.getPropertyValue(prop), 10);
}

function autoSize(field) {
	field.style.height = 'auto';
	const getPx = getPxFrom(field);
	const height = getPx('border-bottom-width') + getPx('border-top-width') + field.scrollHeight;

	field.style.height = height + 'px';
}

export function Textarea({ isDone, ...props }) {
	const textareaRef = useRef(null);

	useEffect(() => {
		const field = textareaRef.current;
		if (field != null) {
			autoSize(field);
			const listener = () => autoSize(field);
			field.addEventListener('input', listener);
			return () => {
				field.removeEventListener('input', listener);
			};
		}
	}, []);

	return (
		<textarea
			ref={textareaRef}
			rows={1}
			css={{
				appearance: 'none',
				border: 'none',
				fontSize: '1.5rem',
				background: 'transparent',
				width: '100%',
				color: '#fff',
				textDecoration: isDone ? 'line-through' : 'none',
				borderBottom: '2px solid transparent',
				borderRadius: 0,
				resize: 'none',
				padding: '0.2rem 0',
				height: 'auto',
				lineHeight: 1.4,

				':focus': {
					outline: 'none',
					borderColor: '#fff',
				},
			}}
			{...props}
		/>
	);
}
