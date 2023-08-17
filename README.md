# API-Testing
code submission for the technical assessment


ISSUES ENCOUNTERED AND RESOLUTION METHODS
1. Error in Supertest Assertions:
   - Error: `Expected: 201, Received: 400`
   - This error occurred when using `expect` assertions from Jest with Supertest.
   - Solution: Use the appropriate testing framework's assertion library (Jest or Chai) with Supertest. Update your test script to use `expect(response.status).toBe(201)` with Jest or `expect(response.status).to.equal(201)` with Chai.

2. Error in Login API:
   - Error: `Expected: 200, Received: 400`
   - This error occurred while testing the login API using Supertest.
   - Solution: Check the request body and ensure that the provided credentials (clientId, grantType, and password) are valid for the login API. 
3. Signup API Validation Error:
   - Error: `Error: PartnerId is required`
   - This error occurred when testing the signup API using Supertest.
   - Solution: Include the required `partnerId` field in the signup request body.

4. Login API Client Not Found Error:
   - Error: `Error: Client not found`
   - This error occurred when testing the login API using Supertest.
   - Solution: Verify that the provided `clientId` is correct and valid for the login API. I actually think this error is from the API builders 


