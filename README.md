# API-Testing
code submission for the technical assessment

Cypress E2E Testing for Signup and Login Screens

The problems I encountered while testing were:

1: Button Click Error After Ensuring Visibility and Enabled State
**Error Description:**
Upon clicking the "Get a Code" button, a "Bad Request" error was triggered when sending a POST request to the signup endpoint.

**Solution:**
By closely examining the payload being sent in the POST request, I realized that some fields, such as `email`, `firstName`, `lastName`, `userType`, `password`, and `confirmPassword`, were not provided or had incorrect values. I rectified the payload, and the test was successfully executed.

2: Unexpected Error Response from Server

{

    "error": {
    
        "status": "09",
        
        "message": "The phone number can start with an optional \"+\" sign followed by either \"234\" (Nigeria's country code) or nothing.\n      Matches exactly ten (10) digits. These digits represent the remaining part of the phone number."
   
    }

}


**Error Description:**
After interacting with the signup form, the server returned an error response related to the phone number format.

**Solution:**
I realized that the phone number field was not present in the payload, contrary to what the error message indicated. I tested manually with postman and included the phone number in the format "080..." and it resolved the issue.

3: "Get a Code" Button Functionality Issue

**Error Description:**
When attempting to click the "Get a Code" button, the application triggered an alert "error".

**Solution:**
After identifying a potential issue in the application's behavior, I came to a conclusion that the error is resulting from the development team.

Tips I used while troubleshooting:
- **Manual Interaction Verification:** I found it beneficial to manually interact with the application using postman to validate its behavior and distinguish between application-specific issues and test setup errors.

- **Network Request Inspection:** By using browser developer tools or Cypress commands, I could examine network requests and responses to identify potential problems in API interactions.

- **Console Logs for Debugging:** Utilizing `console.log()` statements within Cypress tests helped me log relevant information for debugging purposes.

Suggestion:

an API Documentation Reference should be included for efficient testing 
