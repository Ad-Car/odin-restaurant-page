export const clearContent = () => {
	const parentElement = document.querySelector('#content');
	while (parentElement.firstChild) {
		parentElement.removeChild(parentElement.firstChild);
	}
};
