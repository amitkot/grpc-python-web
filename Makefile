.PHONY: server_protos
server_protos:
	cd server && poetry run python -m grpc_tools.protoc -I ../protobufs --python_out=. --grpc_python_out=. ../protobufs/books.proto

.PHONY: server_docker
server_docker:
	docker build . -f server/Dockerfile -t server

.PHONY: server_run
server_run:
	docker run -p 127.0.0.1:50051:50051/tcp server

.PHONY: client_protos
client_protos:
	protoc -I=protobufs protobufs/books.proto --js_out=import_style=commonjs:client/src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:client/src

.PHONY: dc_build
dc_build:
	docker-compose build

.PHONY: dc_up
dc_up: dc_build
	docker-compose up
