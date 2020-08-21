/** @jsx jsx */

import { jsx, keyframes } from '@emotion/core';
import { useEffect, useRef, forwardRef } from 'react';

import { mergeRefs } from './helpers';

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

export const Textarea = forwardRef(({ isDone, saved, ...props }, ref) => {
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

	const fading = keyframes({
		from: {
			opacity: 1,
		},
		'50%': {
			opacity: 1,
		},
		to: {
			opacity: 0,
		},
	});

	return (
		<span
			css={{
				position: 'relative',
				':after': {
					content: saved ? '"saved"' : '""',
					display: 'grid',
					fontSize: '0.8rem',
					position: 'absolute',
					right: 0,
					top: 0,
					bottom: 0,
					alignContent: 'center',
					...(saved ? { animation: `${fading} 1s forwards linear` } : {}),
				},
			}}
		>
			<textarea
				ref={mergeRefs([textareaRef, ref])}
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
		</span>
	);
});
