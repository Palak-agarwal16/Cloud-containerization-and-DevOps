# Making python app image

## Create docker file

1. create separate folder
2. create a python program:

![python](image1.png)

3. create docker file with commands:

```bash
FROM python:3.8-slim

WORKDIR /home/app

COPY app.py .

RUN pip install numpy

CMD [ "python","app.py" ]

```

![dockerFile](image2.png)

---

## Build and run image

1. Build the image from the docker file

```bash
docker build -t sapid-checker:500119484 .
```

![build](image3.png)


2. Check Image:

```bash
docker images
```

![dockerImg](image4.png)

3. Run the image:

```bash
sudo docker run -it sapid-checker:500119484
```

## Result

Python program running

![run](image5.png)