# StealJS Quick Start

Go to [StealJS.com](http://stealjs.com/) for step-by-step instructions to create this app from scratch.


## Instructions
Prerequities: Ensure [Node.js](http://nodejs.org/) along with NPM are properly installed. You will also need a webserver. If you don't have one, you can install this simple command-line [http-server](https://www.npmjs.com/package/http-server).

##### Clone
Clone the repo.

```
> git clone git@github.com:stealjs/quick-start.git
```

##### Install
Install Node modules

```
> cd quick-start
> npm install
```

#### Build
Run `npm run build` which will create a new folder in the project **dist/**. The dist folder contains everything needed to run your app in production.

```
> npm run build
```

##### Serve
Spin up your webserver or run `http-server`:

```
> http-server
```

Open file `http://localhost:8080/index.html` in browser.

Open the Network panel in Developer Tools and you should see only two javascript files. The steal-tools grunt task builds a graph of the required files, minifies and concatenates all the scripts into main.js.


