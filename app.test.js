const request = require('supertest');
const app = require('./app'); // Adjust this import based on your setup

describe('GET /', () => {
    it('responds with Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World!');
    });
});
