# StealJS Quick Start

This repo is the result of following the step-by-step instructions in the [StealJS Quick Start Guide](https://stealjs.com/docs/StealJS.quick-start.html). You can follow that guide to create this example app from scratch.

## Instructions

Prerequisites:
- [Install Node.js and npm](https://docs.npmjs.com/getting-started/installing-node).
- Set up a web server. If you don’t have one, you can install this simple command-line [http-server](https://www.npmjs.com/package/http-server).

### Clone

Clone the repo.

```
git clone git@github.com:stealjs/quick-start.git
```

### Install

Install Node modules

```
cd quick-start
npm install
```

### Build

Run the following command to create a new folder in the project called `dist`.

```
npm run build
```

The `dist` folder contains everything needed to run your app in production.

### Serve

Spin up your web server or run `http-server`:

```
http-server
```

Open file `http://localhost:8080/index.html` in browser.

Open the Network panel in Developer Tools and you should see only two JavaScript files. The steal-tools grunt task builds a graph of the required files, minifies and concatenates all the scripts into `main.js`.

![Screenshot of the finished example app](screenshot.png?raw=true)
