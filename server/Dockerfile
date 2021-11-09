FROM python

RUN mkdir /service
COPY protobufs/ /service/protobufs/
COPY server/ /service/server/
WORKDIR /service/server
RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt
RUN python -m grpc_tools.protoc -I ../protobufs --python_out=. \
           --grpc_python_out=. ../protobufs/books.proto

EXPOSE 50051
ENTRYPOINT [ "python", "server.py" ]
