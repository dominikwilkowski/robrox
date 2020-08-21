export const getTodoItemsFromLocalStorage = (key) => {
	const value = localStorage.getItem(key);
	let todoItems = null;

	try {
		const parsedJSON = JSON.parse(value);

		if (Array.isArray(parsedJSON)) {
			todoItems = parsedJSON;
		}
	} catch (error) {
		todoItems = [];
	}

	return todoItems;
};

export const saveTodoItemsToLocalStorage = (key, data) =>
	localStorage.setItem(key, JSON.stringify(data));

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
