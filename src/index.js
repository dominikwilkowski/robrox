/** @jsx jsx */

import { jsx, Global } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';

import { Todo } from './Todo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Global
			styles={{
				body: {
					background: 'rgba(219,219,219,1)',
					fontFamily:
						'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					lineHeight: 1.2,
					margin: 0,
					padding: 0,
				},

				'*, *:after, *:before': {
					boxSizing: 'border-box',
				},
			}}
		/>
		<img
			src="/logo.png"
			alt="Rob logo"
			css={{
				display: 'block',
				margin: '2rem auto',
				borderRadius: '100%',
				height: '4.875rem',
				weight: '4.875rem',
				boxShadow: '0 0 2rem -0.5rem rgba(0,0,0,.6)',
				border: '2px solid #fff',
			}}
		/>
		<Todo />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
