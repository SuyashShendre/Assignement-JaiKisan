# Assignement-JaiKisan

Apis for JaiKisan 

Create two API’s which can perform the specified CRUD operations.The project structure should
have models, middlewares, controllers and services. Write MongoDB queries to fetch, update,
add or delete data from the specified collections. You can assume that the collections already
exist in the database and just define the project structure.
Customer API
1. Get all customers List with status ACTIVE [GET]
2. Delete customer. [DELETE]
3. Create new customer [POST]
Card API
1. Get all Card List[GET]
2. Create new card [POST]

---
## Requirements

For development, you will only need Node.js and a node global package, Npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.17.1

    $ npm --version
    8.15.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/SuyashShendre/Assignement-JaiKisan.git
    $ cd Assignement-JaiKisa
    $ npm install

## Environment Variables

To run this project, you will need to add the variables to your index file

`MONGODB_URL`

## Running the project

    $ npm start

## BaseURL = `https://localhost:3000/api` (/customer, /card)


## Live Demo = [https://dark-erin-snail-cap.cyclic.app/api/](https://dark-erin-snail-cap.cyclic.app/api/)
