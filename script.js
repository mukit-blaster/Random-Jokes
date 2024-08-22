const url = 'https://icanhazdadjoke.com/';
const options = {
	method: 'GET',
	headers: {
		'Accept': 'application/json'
	}
};

async function fetchJoke() {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result = await response.json();
		return result.joke;
	} catch (error) {
		console.error('Error fetching the joke:', error);
		return 'Failed to fetch a joke. Please try again!';
	}
}

const jokeContainer = document.querySelector('.joke');
const jokeButton = document.querySelector('#jokeBtn');

jokeButton.addEventListener('click', async () => {
	const joke = await fetchJoke();
	jokeContainer.innerHTML = joke;
});
