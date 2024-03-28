// eslint-disable-next-line no-undef
const config = require('../config');

test('Should return 200 status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {}
let actualResponseBody;

test('Response body should contain True', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}api/v1/kits/1`, {
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