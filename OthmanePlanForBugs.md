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


