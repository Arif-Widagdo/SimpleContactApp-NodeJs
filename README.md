# SimpleContactApp-NodeJs

This repository is a simple contacts application in console form built using nodeJs

[![node_modules](./assets/images/svg/node.svg)](https://nodejs.org/en/blog/release/v16.17.0/)


## Installation

```sh
https://github.com/Arif-Widagdo/SimpleContactApp-NodeJs.git
```


## Run & Test
to run this application you enter the terminal, then point your terminal into this folder.
after you are in this folder, then type like the following command

```sh
npm update
```

```sh
node app 
```
To run this application there are several commands including:

> |   node app add    
> |   node app list   
> |   node app detail   
> |   node app delete 

### node app add
function of Add new Contact

#### options:
| Command           | alias       | Type          | required       
| :---------------  | :---------  | :------------ | :--------- |
| --name            | -n          | string-type   |  Yes       |
| --email           | -e          | string-type   |  No        |                                                                                 
| --noHP            | o           | string-type   |  Yes       | 

eg: 
```sh
node app add --n="name" --e="example@mail.com" --o="0896000000"
```

Notes:
- 
this application has mobile number validation, so if you try this application there is a validation error, you can make changes to the contact.js file
```sh
// Check validation Number Phone from Region Indonesian
if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.bgRed.bold("   The mobile number you entered is invalid!   "));
    return false;
}
```


### node app detail
Display contact details by name

#### options:
| Command           | alias       | Type          | required       
| :---------------  | :---------  | :------------ | :--------- |
| --name            | -n          | string-type   |  Yes       |      

eg: 
```sh
node app detail --n="name" 
```

### node app delete
Delete contacts by name

#### options:
| Command           | alias       | Type          | required       
| :---------------  | :---------  | :------------ | :--------- |
| --name            | -n          | string-type   |  Yes       |  

eg: 
```sh
node app detail --n="name" 
```

## Happy Running & Test
Enjoy in this application