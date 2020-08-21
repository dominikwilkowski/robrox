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
					background: 'linear-gradient(45deg, rgba(219,219,219,1) 0%, rgba(226,226,226,1) 100%);',
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
		<Todo />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
