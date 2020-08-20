/** @jsx jsx */

import { jsx } from '@emotion/core';
import { forwardRef } from 'react';

export const Checkbox = forwardRef(({ checked, onChange, onClick }, ref) => {
	return (
		<label
			css={{
				display: 'inline-block',
				position: 'relative',
				overflow: 'hidden',
				padding: '0.5rem 1.5rem',
				verticalAlign: 'middle',
			}}
		>
			<input
				type="checkbox"
				ref={ref}
				checked={checked}
				onChange={onChange}
				css={{
					position: 'absolute',
					left: '-3rem',
					top: '-3rem',

					':checked + span:after': {
						opacity: 1,
					},
				}}
			/>
			<span
				css={{
					position: 'relative',
					display: 'inline-block',
					width: '2rem',
					height: '2rem',
					background: '#fff',

					':after': {
						content: '""',
						position: 'absolute',
						left: '0.6rem',
						top: '0.1rem',
						width: '0.6rem',
						height: '1rem',
						border: '#1e3c72 solid',
						borderWidth: '0 4px 5px 0',
						transform: 'rotate(45deg)',
						opacity: 0,
						transition: 'opacity 0.3s ease',
					},
				}}
			/>
		</label>
	);
});
