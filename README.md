# archery-heroes

This simple App display a list of famous archer and their individual palmares

**archery-heroes-v1** : The list of athlete is hard coded into the app

**archery-heroes-v2** : The list of athlete is hard coded in a node server and retrieve in the app

**archery-heroes-v3** : The list of athlete is stored in a mongo database and retrieve by the node server

**archery-heroes-v3.1** : The list of athlete can be updated using a form


# How To Build

## Pre-requisites
* Node / NPM (latest stable version)

## Version 1.0

* clone / fork the project (tag : *archery-heroes-v1*)
* build the project
```
$> cd /path/to/the/repo/front
$> yarn install
```
* Start the project
```
$> yarn start
```

Navigate through **http://localhost:3333/** to land on the app.

*nb: You can configure the port in the **package.json** under **scripts.start***

## Version 2.0

* Follow the step-by-step from **Version 1.0** using tag *archery-heroes-v2*
* Build the project server
```
$> cd /path/to/the/repo/server
$> npm install
```
* Start the server
```
$> node server.js
```
* Navigate through **http://localhost:8088/api/ping** to see the welcome message

*nb: You can configure the port in the **server.js** configuration*

## Version 3.0
###### Additional Prerequisites -> mongoDB environment (local DB)

* Rebuild the server
```
$> cd /path/to/the/repo/server
$> npm install
```
* populate your local database
```
$> node_modules/babel-cli/bin/babel-node.js scripts/populate.js
```
* Start the server
```
$> npm start
```

*The behavior of the app should not change. But under the hood, you can see that now, the date are fetched from your local database and are no longer hard coded into your app*

## Version 3.1

*coming soon...*

# Credits

*This app is designed with ReactJs, HTML/CSS and built with npm and yarn*
