# Uploding Image on Docker Hub

## Login/SignUp on docker hub website

Login and get your username

![login](image1.png)

Inside WSL:

---

```bash
docker login
```

![dokerLogin](image2.png)

---

## Push image to docker hub

Check for images available:

```bash
docker images
```
![docker images](image4.png)


Add label:

```bash
docker tag java-app rajrishu14
01/java-app
```

Push the image

```bash
docker tag java-app rajrishu14
01/java-app
```

![push](image4.png)

## Result

image add to our repository:

![repo](image5.png)

