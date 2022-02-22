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
    E -->|User| Z[Show User Options]	  
    Z-->|Add Log| X[New Log]
    Z -->Y[Log Out]
    J(User Login Page)    
```
## UML Diagram

## Database Structure

```
CREATE TABLE `user` (
	`id` BIGINT(19) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`password` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`role` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`);

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
	PRIMARY KEY (`id`);

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
	PRIMARY KEY (`id`);

```

![DBStructure](https://github.com/baraneetharan/worksheet/blob/52210a600e6df8ea716025d0ca81f08c3235b312/wsDB.JPG?raw=true)
## Web Interface

![Users](https://github.com/baraneetharan/worksheet/blob/main/manageuser.JPG?raw=true)

![Task](https://github.com/baraneetharan/worksheet/blob/main/ManageTask.JPG?raw=true)

![Log](https://github.com/baraneetharan/worksheet/blob/main/managelog.JPG?raw=true)

## Test Plan

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