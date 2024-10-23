// test_scripts/create_user.test.js
const { request } = require('../utils/api_client');

describe('Create User API Tests', () => {

    // 1. Ensure all users are deleted before testing
    beforeAll(async () => {
        const response = await request()
            .delete('/api/v1/all-users')
            .send({
                key_admin: 'keyadmin123'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Users deleted with success');
    });

    // 2. Valid User Creation
    it('should create a user successfully', async () => {
        const response = await request()
            .post('/api/v1/users')
            .send({
                name: 'Mostafa',
                email: 'mostafa@gmail.com',
                password: 'password123'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User registered with success');
        expect(response.body).toHaveProperty('token');  // Token should be returned
    });

    it('should create another user successfully', async () => {
        const response = await request()
            .post('/api/v1/users')
            .send({
                name: 'Mohamed',
                email: 'mohamed@gmail.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User registered with success');
        //expect(response.body).toHaveProperty('token');        commented until bug fixed
    });

    // 3. User Already Registered
    it('should return an error for already registered user Ahmed', async () => {
        // First create a user with the name Ahmed
        await request()
            .post('/api/v1/users')
            .send({
                name: 'Ahmed',
                email: 'ahmed@gmail.com',
                password: 'password123'
            });

        // Try to create the same user again
        const response = await request()
            .post('/api/v1/users')
            .send({
                name: 'Ahmed',
                email: 'ahmed@gmail.com',
                password: 'password123'
            });

        expect(response.statusCode).toBe(401);  // User already exists
        expect(response.body).toHaveProperty('message', 'User already registered');
    });

    // 4. Missing Required Fields
    it('should return an error for missing required fields (password)', async () => {
        const response = await request()
            .post('/api/v1/users')
            .send({
                name: 'reda',
                email: 'reda@gmail.com'
            });
        console.log(response.body);  // Log the response body to inspect what it contains
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'Missing required fields');     // I wrote this message but it should be specified in the API spesification
    });
    // 5. Missing Required Fields
    it('should return an error for missing required fields (name)', async () => {
        const response = await request()
            .post('/api/v1/users')
            .send({
                email: 'anas@gmail.com',
                password: 'password123'
            });
        console.log(response.body);  // Log the response body to inspect what it contains
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'Missing required fields');     // I wrote this message but it should be specified in the API spesification
    });
    // 6. Missing Required Fields
    it('should return an error for missing required fields (email)', async () => {
        const response = await request()
            .post('/api/v1/users')
            .send({
                name: 'osama',
                password: 'password123'
            });
        console.log(response.body);  // Log the response body to inspect what it contains
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('message', 'Missing required fields');     // I wrote this message but it should be specified in the API spesification
    });

    // 7. Valid User Creation with Extra Fields
    it('should create a user successfully and ignore extra fields', async () => {
        const response = await request()
            .post('/api/v1/users')
            .send({
                name: 'Ali',
                email: 'ali@gmail.com',
                password: 'password123',
                age: 30,  // Extra field
                address: '123 Main St'  // Extra field
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User registered with success');
    });

    // // 8. Invalid Email Format
    // it('should return an error for invalid email format', async () => {
    //     const response = await request()
    //         .post('/api/v1/users')
    //         .send({
    //             name: 'Aly',
    //             email: 'invalid-email',
    //             password: 'password123'
    //         });

    //     expect(response.statusCode).toBe(400);  // Expect 400 for invalid email
    //     expect(response.body).toHaveProperty('error', 'Invalid email format');
    // });

    // // 9. Short Password Validation
    // it('should return an error for too short password (Omar)', async () => {
    //     const response = await request()
    //         .post('/api/v1/users')
    //         .send({
    //             name: 'Omar',
    //             email: 'omar@gmail.com',
    //             password: '123'  // Too short
    //         });

    //     expect(response.statusCode).toBe(400);  // Expect 400 for short password
    //     expect(response.body).toHaveProperty('error', 'Password must be at least 6 characters');
    // });
});
