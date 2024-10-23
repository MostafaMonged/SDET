// test_scripts/delete_user.test.js
const { request } = require('../utils/api_client');
const { getValidToken, getInvalidToken } = require('../utils/helpers');

describe('Delete User API Tests', () => {

    it('should delete user with a valid token for Mostafa Monged', async () => {
        // Generate token for User 1 during the test case
        const tokenUser1 = await getValidToken(request(), 'mosmon@gmail.com', 'passMosMon');

        const response = await request()
            .delete('/api/v1/users')
            .set('Authorization', tokenUser1);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User deleted with success');
    });

    it('should delete user with a valid token for User 2', async () => {
        // Generate token for User 2 during the test case
        const tokenUser2 = await getValidToken(request(), 'user2@gmail.com', 'password2');

        const response = await request()
            .delete('/api/v1/users')
            .set('Authorization', tokenUser2);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User deleted with success');
    });

    it('should fail to delete user with an invalid token', async () => {
        const response = await request()
            .delete('/api/v1/users')
            .set('Authorization', getInvalidToken());

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error', 'Unauthorized');
    });
});
