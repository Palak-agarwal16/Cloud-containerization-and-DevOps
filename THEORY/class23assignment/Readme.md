<h2 align='center'> Kubernetes Apache Web App </h2>


<hr>

<h4 align='center'> HandsOn  </h4>

<hr>

**Step-1: Run Pod**

```bash
kubectl run apache-pod --image=httpd
```


*Explanation:-*

* `kubectl` → Kubernetes CLI
* `run` → Create pod
* `--image=httpd` → Apache image

---

**Step-2: Verify Pod**

```bash
kubectl get pods
```


---

**Step-3: Inspect Pod**

```bash
kubectl describe pod apache-pod
```

![create, run and Inspect Pod](image1.png)

---

**Step-4: Access Application**

```bash
kubectl port-forward pod/apache-pod 8081:80
```

Open:

```
http://localhost:8081
```

![Browser Output](image2.png)

---

**Step-5: Delete Pod**

```bash
kubectl delete pod apache-pod
```

![Delete Pod](image3.png)

*Explanation:-*

* Pod deleted permanently
* No self-healing

---

**Step-6: Create Deployment**

```bash
kubectl create deployment apache --image=httpd
```



---

**Step-7: Verify Deployment**

```bash
kubectl get deployments
kubectl get pods
```

![ Create and Verify Deployment](image4.png)

---

**Step-8: Expose Deployment**

```bash
kubectl expose deployment apache --port=80 --type=NodePort
```



---

**Step-9: Access Service**

```bash
kubectl port-forward service/apache 8082:80
```

Open:

```
http://localhost:8082
```

![Expose Service and Service Output](image5.png)

---

**Step-10: Scale Deployment**

```bash
kubectl scale deployment apache --replicas=2
```

![Scale Deployment](image6.png)

*Explanation:-*

* `scale` → Change replica count
* `--replicas=2` → Run 2 pods

---

**Step-11: Debugging Scenario**

```bash
kubectl set image deployment/apache httpd=wrongimage
```

![Error](image7.png)

*Explanation:-*

* Causes ImagePullBackOff error

---

**Step-12: Fix Application**

```bash
kubectl set image deployment/apache httpd=httpd
```

![Fix](image8.png)

---

**Step-13: Exec into Pod**

```bash
kubectl exec -it <pod-name> -- /bin/bash
```

```bash
ls /usr/local/apache2/htdocs
```

![Exec](image9.png)

---

**Step-14: Self-Healing**

```bash
kubectl delete pod <pod-name>
```

```bash
kubectl get pods
```

![Self Healing](image10.png)

---

<hr>

<h4 align='center'> Key Takeaways  </h4>

<hr>

#### Summary of Core Commands

| Action            | Command                              |
| ----------------- | ------------------------------------ |
| Run pod           | kubectl run apache-pod --image=httpd |
| Get pods          | kubectl get pods                     |
| Describe pod      | kubectl describe pod apache-pod      |
| Delete pod        | kubectl delete pod apache-pod        |
| Create deployment | kubectl create deployment apache     |
| Expose service    | kubectl expose deployment apache     |
| Scale deployment  | kubectl scale deployment apache      |
| Update image      | kubectl set image deployment/apache  |
| Exec into pod     | kubectl exec -it <pod> -- /bin/bash  |

---

#### Real Industry Use Case Example

E-commerce Website:

| Layer        | Kubernetes Usage |
| ------------ | ---------------- |
| Frontend     | 3 replicas       |
| Backend API  | 4 replicas       |
| Database     | Stateful set     |
| Load balance | Service          |
| Auto-healing | Deployment       |

---

#### Pod vs Deployment

| Feature          | Pod        | Deployment        |
| ---------------- | ---------- | ----------------- |
| Scope            | Single pod | Managed workload  |
| Scaling          | No         | Yes               |
| Self-healing     | No         | Yes               |
| Load balancing   | No         | Yes (via service) |
| Production-ready | No         | Yes               |

---

#### Kubernetes Architecture

User → API Server → Scheduler → Nodes → Pods

Cluster-based system.

---

#### Final Summary

| Capability           | Pod | Deployment |
| -------------------- | --- | ---------- |
| Runs container       | Yes | Yes        |
| Multi-node           | No  | Yes        |
| Scaling              | No  | Yes        |
| Auto-healing         | No  | Yes        |
| Load balancing       | No  | Yes        |
| Production readiness | No  | Yes        |

---
