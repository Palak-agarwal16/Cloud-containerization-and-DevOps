This is Experiment-1 Readme

Download Virtual Box from [here](https://www.virtualbox.org/wiki/Downloads)


Download Vagrant from [here](https://developer.hashicorp.com/vagrant/install)
![Download Vagrant](./Images/Image1.png)


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