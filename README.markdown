# gRPC with Python server and Web client

This is a demo project for using gRPC with a Python server and Web client (written using Vue.js).

For accessing the server from a web client an Envoy proxy is used.

## Requirements
### Running
- Docker

### Development on macOS

     brew install protobuf

## Running
### Docker

     docker-compose build
     docker-compose up

### Web client

Open the web client at http://localhost:8081.

## References
- [Python Microservices With gRPC – Real Python](https://realpython.com/python-microservices-grpc/)
- [grpc/grpc-web: gRPC for Web Clients](https://github.com/grpc/grpc-web)
- [thearavind/grpc-todo: A TODO app using grpc-web and Vue.js](https://github.com/thearavind/grpc-todo)