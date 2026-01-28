This is Experiment-1 Readme

Download Virtual Box from [here](https://www.virtualbox.org/wiki/Downloads)


Download Vagrant from [here](https://developer.hashicorp.com/vagrant/install)
![Download Vagrant](./images/1.png)


To verify the installation we will check the version via following command
``` bash
vagrant --version
```
![Version Check](./images/2.png)


Initialize Vagrant with Ubuntu box:
```bash
vagrant init hashicorp/bionic64
```
![Initialize](./images/3.png)


Start the VM:
   ```bash
   vagrant up
   ```
![Vagrant up](./images/4.png)


Access the VM:
```bash
vagrant ssh
```
![ssh](./images/5.png)


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
![Verify Nginx](./images/6.png)


Utilization Matrix In Running State
![Running State Matrix](./images/7.png)


Stop VM
```bash
vagrant halt
```
![Halt Vagrant](./images/8.png)


Utilization Matrix In Stop State
![Stop State Matrix](./images/9.png)


Remove VM
```bash
vagrant destroy
```
![Vagrant Deleted](./images/10.png)
