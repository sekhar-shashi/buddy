# Docker local 
This repository can be used to create and run following services
* Client
* Server


# PreRequite
Docker engine must be installed to run the container.The community edition can be installed from : https://www.docker.com/products/container-runtime


## Set Up
Clone this repository and run below command to start application.

`docker-compose up`

To start the containers in detached mode, so that the command returns immediately while the containers are started up, use the following instead.

`docker-compose up -d`

If any changes have been made to the `Dockerfile` and the image needs to be rebuilt use the following commands to force rebuilding the image:

`docker-compose up --build`

## Stopping
If the containers were started using `docker-compose up` simply using `CTRL + C` will exit out and stop all the containers.
In addition use the following command in the same directory of this project to stop and remove all the containers:
`docker-compose down`


## Launching UI
Once docker is running use http://localhost:3000

## Testing backend
Once docker is up use http://localhhost:1880/heartbeat to check if service is up or not


### In case of issue on running applictaion use following commands

uninstall XCode Command Line tools by deleting
`/Library/Developer/CommandLineTools/`
reinstall XCode CLI
`sudo xcode-select --install`
intall gyp
`npm install -g node-gyp`
