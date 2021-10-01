

A beginner friendly project to help you in open source contributions. An attempt to bring all together. 

## Overview

The goal of this project is to help the beginners with their contributions in Open Source and bring all the possible Frontend (UI) knowledge all together. We aim to achieve this collaboratively, so feel free to contribute in any way you want, just make sure to follow the contribution guidelines.


## What is Open - Source? [![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
The open source community provides a great opportunity for aspiring programmers to distinguish themselves; and by contributing to various projects, developers can improve their skills and get inspiration and support from like-minded people. When you contribute to something you already know and love, it can have so much more meaning, because you know how the tool is used and the good it does for you. Being part of an open source community opens you up to a broader range of people to interact with. 

Read more about it <a href="https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source"> here. </a>


## <u> Let's Get Started: </u>

### Step 1. Create a Copy of this Repository
In order to work on an open-source project, you will first need to make your own copy of the repository. To do this, you should fork the repository and then clone it so that you have a local working copy.

> **Fork :fork_and_knife: this repo. Click on the Fork button at the top right corner.**
With the repository forked, you’re ready to clone it so that you have a local working copy of the code base.


> **Clone the Repository**
To make your own local copy of the repository you would like to contribute to, let’s first open up a terminal window.

We’ll use the git clone command along with the URL that points to your fork of the repository.

* Open the Command Prompt
* Type this command:

```
git clone https://github.com/your_username/Go-Airbnb
```


### Step 2: Creating a New Branch
It is important to branch the repository so that you are able to manage the workflow, isolate your code, and control what features make it back to the main branch of the project repository.

When creating a branch, it is very important that you create your new branch off of the master branch. 
**To create a new branch, from your terminal window, follow:**


```
git branch new-branch
git checkout new-branch
```
Once you enter the git checkout command, you will receive the following output:

```
Switched to branch 'new-branch'
```


### Step 3: Contribute
Make relevant changes. Add new algorithms. Add Readme files. Contribute in any way you feel like :)

### Step 4: Commiting and Pushing:
Once you have modified an existing file or added a new file to the project, you can add it to your local repository, which we can do with the git add command.

``` git add filename``` or ``` git add .``` 
You can type the command ```git add -A``` or alternatively ```git add -all``` for all new files to be staged.
**With our file staged, we’ll want to record the changes that we made to the repository with the ```git commit``` command.**
<p> The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the change you have made, why you made it, and how significant it is.  </p>
 
 ```
 git commit -m "commit message"
 ```
 
 
 At this point you can use the ```git push``` command to push the changes to the current branch of your forked repository:
 ```
 git push --set-upstream origin new-branch
 ```
 
### Step 6: Create Pull Request
At this point, you are ready to make a pull request to the original repository.

