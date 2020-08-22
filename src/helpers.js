/**
 * Retrieve our data
 *
 * @return {array} - An array of todo objects
 */
export function getTodoItems() {
	const value = localStorage.getItem('todo');
	let todoItems = [];

	try {
		todoItems = JSON.parse(value);
	} catch (error) {
		console.error(error);
	}

	return todoItems;
}

/**
 * Save our data
 *
 * @param  {array} data - An array of todo objects
 */
export function saveTodoItems(data) {
	localStorage.setItem('todo', JSON.stringify(data));
}

/**
 * Slugify a string
 *
 * @param  {string} string - A string to be stripped of all unknown characters
 *
 * @return {string}        - The slug
 */
export function slugify(string) {
	const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
	const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
	const p = new RegExp(a.split('').join('|'), 'g');

	return string
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w-]+/g, '') // Remove all non-word characters
		.replace(/--+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}

/**
 * A debounce function to call a function only once after a waiting period
 *
 * @param  {function} options.func      - The function to be called
 * @param  {number}   options.wait      - The waiting period
 * @param  {boolean}  options.immediate - To call the function on the start of the wait
 * @param  {object}   options.args      - Any args to be passed to the function
 *
 * @return {[type]}                     - Returning the timeout ID
 */
export function debounce({ func, wait, immediate, args }) {
	return function () {
		if (typeof window === 'undefined') {
			const context = this;

			const later = () => {
				global.timeout = null;

				if (!immediate) {
					func.apply(context, args);
				}
			};

			const callNow = immediate && !global.timeout;
			clearTimeout(global.timeout);
			global.timeout = setTimeout(later, wait);

			if (callNow) {
				func.apply(context, args);
			}
			return global.timeout;
		} else {
			const context = this;

			const later = () => {
				window.timeout = null;

				if (!immediate) {
					func.apply(context, args);
				}
			};

			const callNow = immediate && !window.timeout;
			clearTimeout(window.timeout);
			window.timeout = setTimeout(later, wait);

			if (callNow) {
				func.apply(context, args);
			}
			return window.timeout;
		}
	};
}

/**
 * Merging multiple refs
 *
 * @param  {array} refs - An array of all refs to be merged
 *
 * @return {ref}        - The resulting ref
 */
export function mergeRefs(refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === 'function') {
				ref(value);
			} else if (ref != null) {
				ref.current = value;
			}
		});
	};
}
