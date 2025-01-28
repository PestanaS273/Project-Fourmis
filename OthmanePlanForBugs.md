#### ID1
### test Description:
Create a user, modify the second address line, duplicate the same line
### Successful or not:
Not successful
### Comments: 
The second address line is duplicated in the user form.
### Titre : id1 Address ligne duplication in user creation
### Steps to Reproduce:
    Navigate to "Add new employee" page.
    Fill in the user details.
    Add the same value twice in the "Second Address Line" field.
    Save the user.
### Status: 
New

#### ID4
### test Description:
Create a user, update the contract, and modify the date	
### Successful or not:
Not successful
### Comments: 
It is impossible to update the contract date after creating the user.
### Title:
Unable to update the contract date for a user
### Steps to Reproduce:
    Navigate to "Add new employee" and create a user with valid information.
    Access the created user's contract section.
    Attempt to modify the contract date field.
### Status: 
New

#### ID6
### test Description:
Create a team, add a user, and attempt to delete the team	
### Successful or not:
Not successful
### Comments: 
Deleting the team results in a 500 error page.
### Title: 
Error 500 when deleting a team with a user
### Steps to Reproduce:
    Navigate to "Create new team" and create a team with valid details.
    Add a user to the newly created team.
    Attempt to delete the team.
    Observe the error displayed.
### Status: 
New

#### ID8
### test Description:
Create a user and enter only numbers in the "City" field
### Successful or not:
Not successful
### Comments: 
No error message is displayed, and the user is created with an invalid city name.
### Title: 
No validation error when entering only numbers in the "City" field
### Steps to Reproduce:
    Navigate to "Add new employee" and open the user creation form.
    Fill out all required fields.
    Enter only numbers (e.g., "12345") in the "City" field.
    Submit the form to create the user.
### Status: 
New
#### ID10
### test Description:
Create a user with special characters in the "Name" field (e.g., @, !, $)
### Successful or not:
Not successful
### Comments: 
No error message is displayed, and the user is created with an invalid name.
### Title: 
Navigate to "Add new employee" and open the user creation form.
Fill out all required fields.
### Steps to Reproduce:
Navigate to "Add new employee" and open the user creation form.
Fill out all required fields.
Enter special characters (e.g., "@John!", "$UserName") in the "Name" field.
Submit the form to create the user.
### Status: 
New
#### ID9
### test Description:
Create two users with the same email address### Successful or not:
Not successful
### Comments: 
The same email address is allowed for multiple users, which should not be permitted.
### Title: 
Duplicate email addresses allowed during user creation
### Steps to Reproduce:
Navigate to "Add new employee" and open the user creation form.
Fill out all required fields, including an email address (e.g., "user@example.com").
Submit the form to create the first user.
Repeat the process using the same email address.
Observe that the email address appears for two different users.
### Status: 
New
#### ID11
### test Description:
Create a team and assign multiple managers to it
### Successful or not:
Not successful
### Comments: 
Multiple managers can be assigned to a single team, which should not be allowed.
### Title: 
Multiple managers can be assigned to the same team
### Steps to Reproduce:
Navigate to "Create new team" and open the team creation form.
Fill out the required fields to create a team.
Add one manager to the team.
Attempt to add additional managers to the same team.
Observe that the team accepts multiple managers without any validation error.
### Status: 
New