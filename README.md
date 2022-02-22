# Employee Work Sheet Application

## Application Flow Diagram:

```mermaid
graph TD
    A[Start] --> B(User Login Page)
    B --> C{Authentication}
    C -->|Invalid User| D[Show User Login Page]
    D --> B(User Login Page)
    C -->|Valid User| E[Check Role]
    E -->|Admin| F[Show Admin Options]
    F -->|User Menu| G[Manage Users ]
    F -->|Task Menu| H[Manage Tasks ]
    F -->|Reports| I[Show Charts ]
    F -->|Log Out| J(User Login Page)
    J --> B(User Login Page)
<<<<<<< HEAD
    E -->|User| Z[Show User Options]	  
    Z-->|Add Log| X[New Log]
    Z -->Y[Log Out]
    J(User Login Page)    
=======
    E -->|User| Z[Show User Options]    
>>>>>>> a87d9222b771f28c8a481be919c5c608f05ff465
```
## UML Diagram

## Database Structure

```
CREATE TABLE `user` (
	`id` BIGINT(19) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`role` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
<<<<<<< HEAD
	PRIMARY KEY (`id`);
=======
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=3
;
>>>>>>> a87d9222b771f28c8a481be919c5c608f05ff465

```
```
CREATE TABLE `all_task` (
	`id` BIGINT(19) NOT NULL AUTO_INCREMENT,
	`assignedate` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`assigneto` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`description` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`duedate` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`status` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`taskname` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
<<<<<<< HEAD
	PRIMARY KEY (`id`);
=======
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;
>>>>>>> a87d9222b771f28c8a481be919c5c608f05ff465

```
```
CREATE TABLE `work_log` (
	`id` BIGINT(19) NOT NULL AUTO_INCREMENT,
	`date` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`empname` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`etime` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`status` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`stime` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`taskname` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
<<<<<<< HEAD
	PRIMARY KEY (`id`);
=======
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=2
;
>>>>>>> a87d9222b771f28c8a481be919c5c608f05ff465

```

![DBStructure](https://github.com/baraneetharan/worksheet/blob/52210a600e6df8ea716025d0ca81f08c3235b312/wsDB.JPG?raw=true)
## Web Interface

![Users](https://github.com/baraneetharan/worksheet/blob/main/manageuser.JPG?raw=true)

![Task](https://github.com/baraneetharan/worksheet/blob/main/ManageTask.JPG?raw=true)

![Log](https://github.com/baraneetharan/worksheet/blob/main/managelog.JPG?raw=true)

## Test Plan

<<<<<<< HEAD
### Test Cases – Login Page

Functional Test Cases:
| SL.No.      | Test Case Description   | Type          |
| ------      | ---------------------   | ------------- |
| 1.      | Verify if a user will be able to login with a valid username and valid password.       | Positive   |
| 2.      | Verify if a user cannot login with a valid username and an invalid password.           | Negative   |
| 3.      | Verify the login page for both, when the field is blank and Submit button is clicked   | Positive   |
| 4.      | Verify the ‘Forgot Password’ functionality.                                            | Positive   |
| 5.      | Verify the messages for invalid login.                                                 | Positive   |
| 6.      | Verify the ‘Remember Me’ functionality                                                 | Positive   |
| 7.      | Verify if the data in password field is either visible as asterisk or bullet signs.    | Positive   |
| 8.      | Verify if a user is able to login with a new password only after he/she has changed the password.   | Positive   |
| 9.      | Verify if the login page allows to log in simultaneously with different credentials in a different browser.| Positive   |
| 10.     | Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.      | Positive   |

## login screen
### Sr. No.	Test Scenarios
| SL.No.      | Test Case Description   |
| ------      | ---------------------   |
|1      	  | Verify the messages for each mandatory field.   |
|2      	  | Verify if the user cannot proceed without filling all the mandatory fields.   |
|3      	  | Verify the age of the user when the DOB is selected.   |
|4      	  | Verify if the numbers and special characters are not allowed in the First and Last name.   |
|5      	  | Verify if a user can sign-up successfully with all the mandatory details.   |
|6      	  | Verify if a user can log in with the valid details.   |
|7      	  | Verify if the Password and Confirm Password fields are accepting similar strings only.   |
|8      	  | Verify if the Password field will prompt you for the weak passwords.   |
|9      	  | Verify if duplicate email address will not get assigned.   |
|10      	  | Verify that hints are provided for each field on the form, for the ease of use.   |
=======
Test Cases – Login Page
Following is the possible list of functional and non-functional test cases for a login page:

Functional Test Cases:
Sr. No.	Functional Test Cases	Type- Negative/ Positive Test Case
1	Verify if a user will be able to login with a valid username and valid password.	Positive
2	Verify if a user cannot login with a valid username and an invalid password.	Negative
3	Verify the login page for both, when the field is blank and Submit button is clicked.	Negative
4	Verify the ‘Forgot Password’ functionality.	Positive
5	Verify the messages for invalid login.	Positive
6	Verify the ‘Remember Me’ functionality.	Positive
7	Verify if the data in password field is either visible as asterisk or bullet signs.	Positive
8	Verify if a user is able to login with a new password only after he/she has changed the password.	Positive
9	Verify if the login page allows to log in simultaneously with different credentials in a different browser.	Positive
10	Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.	Positive
Other Test Cases
11	Verify the time taken to log in with a valid username and password.	Performance & Positive Testing
12	Verify if the font, text color, and color coding of the Login page is as per the standard.	UI Testing & Positive Testing
13	Verify if there is a ‘Cancel’ button available to erase the entered text.	Usability Testing
14	Verify the login page and all its controls in different browsers	Browser Compatibility & Positive Testing.
Non-functional Security Test Cases:
Show 
10
 entriesSearch:
Sr. No.	Security test cases	Type- Negative/ Positive Test Case
1	Verify if a user cannot enter the characters more than the specified range in each field (Username and Password).	Negative
2	Verify if a user cannot enter the characters more than the specified range in each field (Username and Password).	Positive
3	Verify the login page by pressing ‘Back button’ of the browser. It should not allow you to enter into the system once you log out.	Negative
4	Verify the timeout functionality of the login session.	Positive
5	Verify if a user should not be allowed to log in with different credentials from the same browser at the same time.	Negative
6	Verify if a user should be able to login with the same credentials in different browsers at the same time.	Positive
7	Verify the Login page against SQL injection attack.	Negative
8	Verify the implementation of SSL certificate.	Positive
Showing 1 to 8 of 8 entriesPreviousNext
We can take an Example of Gmail Login page. Here is the image of it.

Gmail login screen
Test Cases for Gmail Login page
SignUp Gmail screen
Sr. No.	Test Scenarios
1	Enter the valid email address & click next. Verify if the user gets an option to enter the password.
2	Don’t enter an email address or phone number & just click the Next button. Verify if the user will get the correct message or if the blank field will get highlighted.
3	Enter the invalid email address & click the Next button. Verify if the user will get the correct message.
4	Enter an invalid phone number & click the Next button. Verify if the user will get the correct message.
5	Verify if a user can log in with a valid email address and password.
6	Verify if a user can log in with a valid phone number and password.
7	Verify if a user cannot log in with a valid phone number and an invalid password.
8	Verify if a user cannot log in with a valid email address and a wrong password.
9	Verify the ‘Forgot email’ functionality.
10	Verify the ‘Forgot password’ functionality.
Test Scenarios for the Sign-up page
#1) Verify the messages for each mandatory field.

#2) Verify if the user cannot proceed without filling all the mandatory fields.

#3) Verify the age of the user when the DOB is selected.

#4) Verify if the numbers and special characters are not allowed in the First and Last name.

#5) Verify if a user can sign-up successfully with all the mandatory details.

#6) Verify if a user can log in with the valid details.

#7) Verify if the Password and Confirm Password fields are accepting similar strings only.

#8) Verify if the Password field will prompt you for the weak passwords.

#9) Verify if duplicate email address will not get assigned.

#10) Verify that hints are provided for each field on the form, for the ease of use.

Test Scenarios for the Login page of Mobile Application
Mobile Login screen
[image source]

#1) Verify if a user can log in with a valid username and password.

#2) Verify if a user cannot log in with an invalid username or password. Check permutation and combinations of this.

#3) Verify the ‘Keep me Sign In’ option. If this check box is selected, then the user should not get logged out even after exiting the app.

#4) Verify if this check box is not selected by default.

#5) If the user has signed up with Facebook or social media, verify that the user can log in with those credentials or not.

#6) Verify the Forgot password functionality.

#7) Verify if the login page fits the mobile screen. The user should not have to scroll the screen.
>>>>>>> a87d9222b771f28c8a481be919c5c608f05ff465
