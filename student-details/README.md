# Welcome to Docker

This is a repo for new users getting started with Docker.

You can try it out using the following command.
```
docker run -d -p 8088:80 --name student-details docker/student-details
```
And open `http://localhost:8088` in your browser.

# Building

Maintainers should see [MAINTAINERS.md](MAINTAINERS.md).

Build and run:
```
docker build -t student-details . 
docker run -d -p 8088:3000 --name student-details student-details
```
Open `http://localhost:3000` in your browser.
