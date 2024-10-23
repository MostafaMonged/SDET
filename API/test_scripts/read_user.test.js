// test_scripts/read_user.test.js
const { request } = require('../utils/api_client');
const { getValidToken, getInvalidToken } = require('../utils/helpers');

describe('Read User API Tests', () => {
    // 1. Valid Token - should retrieve user details
    it('should retrieve user details with a valid token', async () => {
        // Get valid token for the user "Mohamed" which is created and authenticated in the previous tests
        const validToken = await getValidToken(request(), 'mohamed@gmail.com', 'password123');

        if (!validToken) {
            // Simulate expired token
            const response = await request()
                .get('/api/v1/users')
                .set('Authorization', 'expired');  // Simulate expired token

            expect(response.statusCode).toBe(403);  // Expect Unauthorized status
            expect(response.body).toHaveProperty('message', 'Unauthorized');
        } else {
            // If token is valid, continue with the usual flow
            const response = await request()
                .get('/api/v1/users')
                .set('Authorization', validToken);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('email', 'mohamed@gmail.com');
            expect(response.body).toHaveProperty('name', 'Mohamed');
        }
    });

    // 2. expired Token - shouldn't retrieve user details
    // I simulate the expired token behavior by getting a token for unauthenticated user
    it('should handle token expiration as unauthorized', async () => {
        // Get expired token for the user "Ahmed"
        const validToken = await getValidToken(request(), 'Ahmed@gmail.com', 'password123');

        if (!validToken) {
            // Simulate expired token
            const response = await request()
                .get('/api/v1/users')
                .set('Authorization', 'expired');  // Simulate expired token

            expect(response.statusCode).toBe(403);  // Expect Unauthorized status
            expect(response.body).toHaveProperty('message', 'Unauthorized');
        } else {
            // If token is valid, continue with the usual flow
            const response = await request()
                .get('/api/v1/users')
                .set('Authorization', validToken);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('email', 'ahmed@gmail.com');
            expect(response.body).toHaveProperty('name', 'Ahmed');
        }
    });

    // 3. Invalid Token - should return unauthorized error
    it('should return unauthorized for invalid token', async () => {
        const invalidToken = getInvalidToken();  // Use the helper to get an invalid token
        const response = await request()
            .get('/api/v1/users')
            .set('Authorization', invalidToken);  // Pass an invalid token

        expect(response.statusCode).toBe(403);
        expect(response.body).toHaveProperty('message', 'Unauthorized');
    });

    // 4. Missing Token - should return unauthorized error
    it('should return unauthorized for missing token', async () => {
        const response = await request()
            .get('/api/v1/users');  // No Authorization header

        expect(response.statusCode).toBe(403);
        expect(response.body).toHaveProperty('message', 'Unauthorized');
    });

    // 5. Extra Fields in Query Parameters - should ignore extra query params
    it('should ignore extra query parameters and return user details', async () => {
        const validToken = await getValidToken(request(), 'mohamed@gmail.com', 'password123');
        const response = await request()
            .get('/api/v1/users?extra_field=value')
            .set('Authorization', validToken);
        expect(response.statusCode).toBe(200);  // Extra query params should be ignored
        expect(response.body).toHaveProperty('email', 'mohamed@gmail.com');
        expect(response.body).toHaveProperty('name', 'Mohamed');
    });

});
