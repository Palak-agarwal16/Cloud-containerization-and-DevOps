# Git Basics: Initialization, Commits, Branching, and Merging

## Objective
Learn the fundamental operations of Git version control, focusing on repository initialization, staging, committing, branching, and merging.

---

## Task 1: Initialize a Git Repository and Initial Commits

**Commands Executed:**
```bash
git init
git status
```
![Screenshot 1 - Git Init](image1.png)

*We began by creating a set of files and adding them to the Git repository.*
```bash
echo "..." > test
git add test
git commit -m "test"
```
![Screenshot 2 - Initial Commit](image2.png)
---

## Task 2: Adding and Committing Multiple Files

**Commands Executed:**
```bash
git add test2.txt
git commit -m "test2"
git add test3.txt
git commit -m "test3"
```

**Observation:**
We added consecutive commits to track the project's history incrementally.

![Screenshot 3 - git log](image3.png)
![Screenshot 4 - git add/commit](image4.png)
![Screenshot 5 - git log](iamge5.png)

---

## Task 3: Modifying Files and Checking Diffs

**Commands Executed:**
```bash
git diff
git status
git commit -am "test3 modified"
```
![Screenshot 6 - test3](image6.png)

![Screenshot 7 - git log ](image7.png)
![Screenshot 8 - git modified ](image8.png)
![Screenshot 9 - git status ](image9.png)
![Screenshot 10 - git diff ](image10.png)

**Observation:**
Changes made to previously tracked files were reviewed using `git diff` and then committed directly.



---

## Task 4: Working With Branches

Branching allows for isolated development without affecting the `main` branch.

**Commands Executed:**
```bash
git branch feature
git switch feature

# Or: git checkout -b feature
```
![Screenshot 11 - git branch feature ](image11.png)

**Observation:**
A new branch `feature` was created and checked out. A new characteristic `feature.txt` was added to this branch.

![Screenshot 12 - git branch](image12.png)

![Screenshot 13 - commit on feature branch](image13.png)

---

## Task 5: Merging Branches

After completing the experimental changes, the branch is merged back to main.

**Commands Executed:**
```bash
git switch main
git merge feature
git log --oneline --graph --all
```

**Observation:**
The commits from the `feature` branch were integrated into `main`. The `git log` now displays a merged history.

![Screenshot 14 - Checkout main](image14.png)

![Screenshot 15 - Merge feature](image15.png)
![Screenshot 16 - Final Git log](image16.png)

---

## Key Insights Gained

- **Tracking**: `git init` and `git status` help you inspect your working directory's state.
- **Committing**: `git add` and `git commit` store states incrementally so you can track all changes over time.
- **Diffing**: `git diff` clearly outlines what was modified within tracked files before staging.
- **Branching**: `git branch` and `git switch` provide isolated environments to experiment without breaking the production (`main`) code.
- **Merging**: `git merge` safely combine separate histories, effectively updating the main project with new functionality.