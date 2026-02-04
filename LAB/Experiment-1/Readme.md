This is Experiment-1 Readme

Download Virtual Box from [here](https://www.virtualbox.org/wiki/Downloads)


Download Vagrant from [here](https://developer.hashicorp.com/vagrant/install)
![Download Vagrant](./Images/image1.png)


To verify the installation we will check the version via following command
``` bash
vagrant --version
```
![Version Check](./Images/images2.png)


Initialize Vagrant with Ubuntu box:
```bash
vagrant init hashicorp/bionic64
```
![Initialize](./Images/image3.png)


Start the VM:
   ```bash
   vagrant up
   ```
![Vagrant up](./Images/image4.png)


Access the VM:
```bash
vagrant sshS
```
![ssh](./Images/image5.png)


Step 4: Install Nginx inside VM
```bash
sudo apt update
sudo apt install -y nginx
sudo systemctl start nginx
```


Verify Nginx
```bash
curl localhost
``` 
![Verify Nginx](./Images/image6.png)


Utilization Matrix In Running State
![Running State Matrix](./Images/image7.png)


Stop VM
```bash
vagrant halt
```
![Halt Vagrant](./Images/image8.png)


Utilization Matrix In Stop State
![Stop State Matrix](./Images/image9.png)


Remove VM
```bash
vagrant destroy
```
![Vagrant Deleted](./Images/image10.png)

#### PART-B:- Containers using WSL (Windows)
<hr>

**Step 1: Install WSL**
```powershell
wsl --install
```
Reboot the system after installation.


**Step 2: Install Ubuntu on WSL**

```powershell
wsl --install -d Ubuntu
```
![Install Ubuntu](./Images/image11.png)


**Step 3: Install Docker Engine inside WSL**

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo usermod -aG docker $USER
```
Logout and login again to apply group changes.

**Step 4: Verify Docker Installation**

```bash
docker --version
```
![Verify Docker](./Images/image12.png)


**Step 5: Pull Ubuntu Image**
```bash
docker pull ubuntu
```
![Ubuntu Image](./Images/image13.png)


**Step 6: Run Ubuntu Container with Nginx**
```bash
docker run -d -p 8080:80 --name nginx-container nginx
```
![Run ubuntu with nginx](./Images/image14.png)


**Step 7: Verify Nginx in Container**
```bash
curl localhost:8080
```
![Verify nginx](./Images/image15.png)


**Step 8: Container Observation Commands**
```bash
docker stats
free -h
```
![Utilization Matrix](./Images/image16.png)


**Parameters to Compare**

| Parameter    | Virtual Machine | Container |
| ------------ | --------------- | --------- |
| Boot Time    | High            | Very Low  |
| RAM Usage    | High            | Low       |
| CPU Overhead | Higher          | Minimal   |
| Disk Usage   | Larger          | Smaller   |
| Isolation    | Strong          | Moderate  |
