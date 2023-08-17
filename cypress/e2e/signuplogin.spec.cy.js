describe("Signup and Login Tests", () => {
  it("Should be able to sign up, log in, and redirect correctly", () => {
    // Visit the signup or register page
    cy.visit("https://plug-frontend.vercel.app/register");

    // Fill out the signup form
    cy.get('input[placeholder="First name"]').type("Bella");
    cy.get('input[placeholder="Last name"]').type("James");
    cy.get('input[type="email"]').type("khristabeljames11@gmail.com");
    cy.get('input[type="password"]').eq(0).type("Test1234@");
    cy.get('input[type="password"]').eq(1).type("Test1234@");
    
    // Click the "Get a code" button
    cy.contains('button', 'Get a code').should('be.visible').should('be.enabled').click();
    cy.intercept('POST', 'https://microinsurance-dev.pluginsure.co/api/v1/user/signUp').as('signupRequest');

// Perform actions to trigger the signup request when clicking the "Get a code" button

// Wait for the request to be intercepted
cy.wait('@signupRequest').then(({ request }) => {
  // Log the request payload to the Cypress console
  console.log('Request Payload:', request.body);
});


    // Assert that OTP message is visible
    cy.contains('.otp-messsage', 'An OTP would be sent').should('be.visible');

    // Click the "Log back in" button
    cy.get('.alternative-account-link').click();

    // Assert that the URL includes "/login", indicating successful redirection
    cy.url().should("include", "/login");
  });
});
