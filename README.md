# StealJS quick-start

This application accompanies the quick start guide found on http://stealjs.com/. A full description of StealJS and step-by-step instructions to create the app from scratch can be found on http://stealjs.com/.


## Quick Start
Prerequities: Install [Node.js](http://nodejs.org/) and ensure [grunt-cli](http://gruntjs.com/getting-started) is installed globally. You will also need a webserver or install this simple zero-configuration command-line [http-server](simple zero-configuration command-line http server)

Clone the repo to your local machine.

```
> git clone git@github.com:stealjs/quick-start.git
```

Install node packages

```
> npm install
```

Run the `grunt build` task to have StealJS collect, minify and concatenate all the required javascript files.

```
> grunt build
```

Run `http-server` 

```
http-server
```

Open file `http://localhost:8080/index.html` in browser.

Open the Network panel in Developer Tools and you should see on two javascript files. The `main.js` is minified and concatenated with other required files. 


