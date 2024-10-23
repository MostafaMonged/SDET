// test_scripts/update_user.test.js
const { request } = require('../utils/api_client');
const { getValidToken, getInvalidToken } = require('../utils/helpers');

describe('Update User API Tests', () => {

    it('should update user details Mostafa Monged', async () => {
        // Generate token for User 1 during the test case
        const tokenUser1 = await getValidToken(request(), 'mosmon@gmail.com', 'passMosMon');

        const response = await request()
            .patch('/api/v1/users')
            .set('Authorization', tokenUser1)
            .send({ name: 'Mostafa Monged Mostafa', email: 'mosmon@gmail.com' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User updated with success');
    });

    it('should update user details for User 2', async () => {
        // Generate token for User 2 during the test case
        const tokenUser2 = await getValidToken(request(), 'user2@gmail.com', 'password2');

        const response = await request()
            .patch('/api/v1/users')
            .set('Authorization', tokenUser2)
            .send({ name: 'Updated User2', email: 'user2updated@gmail.com' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User updated with success');
    });

    it('should fail to update user details with an invalid token', async () => {
        const response = await request()
            .patch('/api/v1/users')
            .set('Authorization', getInvalidToken())
            .send({ name: 'Updated User3', email: 'user3updated@gmail.com' });

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error', 'Unauthorized');
    });
});
