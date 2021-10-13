FROM alpine:3.13.2

# Install python3
RUN apk add python3

# Create a non-root user to own the files and run our server
RUN adduser -D static
USER static
WORKDIR /usr/src/app

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
COPY . .

# Run thttpd
CMD ["/bin/sh", "/usr/src/app/start"]
