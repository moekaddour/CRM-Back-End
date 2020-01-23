# Simple REST-API 


## Installation

git clone the project then cd to the crm directory then run:

```bash
npm install
```

## Usage

open the directory in any code editor to check the code or you can run: ```npm start ``` in the directory terminal to start the server.

### END POINTS

```bash
POST:'/signup' to create an account
POST:'/signin' to login
-------------------------------------------------------------------
GET: '/contact' to get all contacts
POST: '/contact' to create a contact
GET: '/contact:id' to get specific contact
PUT:'/contact:id' to edit an exiting contact
DELETE:'/contact:id' to delete a specific contact from data base.

```
```bash
User Model: 
userName
email
password
```
```bash
Customer Model:
firstName
laseName
email
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
