// test_scripts/authenticate_user.test.js
const { request } = require('../utils/api_client');

describe('User Authentication API Tests', () => {

    // 1. Valid Authentication
    it('should authenticate user and return a token', async () => {
        const response = await request()
            .post('/api/v1/auth')
            .send({
                email: 'mohamed@gmail.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');  // Token should be returned
    });

    // 2. Invalid Email
    it('should return an error for invalid email', async () => {
        const response = await request()
            .post('/api/v1/auth')
            .send({
                email: 'invalid@gmail.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'Incorrect email or password');
    });

    // 3. Invalid Password
    it('should return an error for invalid password', async () => {
        const response = await request()
            .post('/api/v1/auth')
            .send({
                email: 'mohamed@gmail.com',
                password: 'wrongpassword'
            });

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'Incorrect email or password');
    });

    //these tests are skipped until the discussion with the development team
    // // 4. Missing Fields (email)
    // it('should return an error for missing email', async () => {
    //     const response = await request()
    //         .post('/api/v1/auth')
    //         .send({
    //             password: 'password123'
    //         });

    //     expect(response.statusCode).toBe(400);
    //     expect(response.body).toHaveProperty('message', 'Missing required fields');
    // });

    // // 5. Missing Fields (password)
    // it('should return an error for missing password', async () => {
    //     const response = await request()
    //         .post('/api/v1/auth')
    //         .send({
    //             email: 'mohamed@gmail.com'
    //         });

    //     expect(response.statusCode).toBe(400);
    //     expect(response.body).toHaveProperty('message', 'Missing required fields');
    // });

    // 6. Extra Fields (should ignore extra fields)
    it('should authenticate user successfully and ignore extra fields', async () => {
        const response = await request()
            .post('/api/v1/auth')
            .send({
                email: 'mohamed@gmail.com',
                password: 'password123',
                age: 30,  // Extra field not required
                address: '123 Main St'  // Extra field not required
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');  // Token should be returned
    });
});
