.PHONY: protos server_docker server_run

protos:
	cd server && poetry run python -m grpc_tools.protoc -I ../protobufs --python_out=. --grpc_python_out=. ../protobufs/books.proto

server_docker:
	docker build . -f server/Dockerfile -t server

server_run:
	docker run -p 127.0.0.1:50051:50051/tcp server
