const request = require('supertest');
const baseUrl = 'https://plug-insure-auth.vercel.app/api/v1';

describe('GET /v1/provider/getProvider', () => {
  it('returns the list of providers', async () => {
    const response = await request(baseUrl).get('/provider/getProviders');
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});

describe('POST v1/user/signup', () => {
  it('should sign a user up when given the right input', async () => {
    const requestBody = {
      "clientId": "men",
      "email": "men@email.com",
      "firstName": "man",
      "lastName": "down",
      "phoneNumber": "08130045674",
      "password": "Frankk22$",
      "confirmPassword": "Frankk22$", // Make sure passwords match
      "partnerId": "myid"
    };
    const response = await request(baseUrl).post('/user/signup').send(requestBody);
    console.log(response.body);
    expect(response.status).toBe(201); // status code for creation of data
    expect(response.body.success).toBe(true);
  });

  it('should fail when given wrong input', async () => {
    const requestBody = {
      "clientId": "men",
      "email": "men@email.com",
      "lastName": "down"
    };
    const response = await request(baseUrl).post('/user/signup').send(requestBody);
    expect(response.status).toBe(400);
  });
});

describe('POST v1/user/login', () => {
  it('Should sign in a user given the right credentials', async () => {
    const requestBody = {
      "clientId": "men",
      "grantType": "password",
      "password": "Frankk22$" // Assuming these are correct credentials
    };
    const response = await request(baseUrl).post('/user/login').send(requestBody);
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('Should not sign in a user when given the wrong credentials', async () => {
    const requestBody = {
      "clientId": "men",
      "grantType": "password",
      "password": "incorrect-password"
    };
    const response = await request(baseUrl).post('/user/login').send(requestBody);
    console.log(response.status);
    expect(response.status).toBe(400);
  });
});
