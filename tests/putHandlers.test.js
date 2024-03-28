// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}
let actualStatusCode

test('Status code should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders/1/complete`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			actualStatusCode = response.status
		});
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200)
});


// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}
let actualResponseBody;

test('Response body should contain True', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/orders`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.ok).toBe("True");
});