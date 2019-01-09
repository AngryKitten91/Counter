function setItem(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
	return JSON.parse(localStorage.getItem(key));
}

function capitalLeter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default {getItem, setItem, capitalLeter}