# Making C program image

## Create docker file

1. create separate folder
2. create a C program:

![c](image1.png)

3. create docker file with commands:

```bash

FROM ubuntu:22.04 AS build
RUN apt-get update \&\& apt-get install -y gcc
COPY hello.c .
RUN gcc -static -o hello hello.c
CMD ["./hello"]

```

![dockerFile](image2.png)

---

## Build and run image

1. Build the image from the docker file

```bash
docker build -t cprogram .
```

![build](image3.png)


2. Check Image:

```bash

```

![dockerImg](image4.png)

3. Run the image:

```bash
docker run -it cprogram
```

## Result

C program running

![run](image5.png)

