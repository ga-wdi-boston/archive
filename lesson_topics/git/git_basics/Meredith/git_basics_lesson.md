#Git Basics Lesson

***
Hello and welcome to the world of Git and Github! Here's a helpful outline of what we'll be doing in class today, and your class learning objectives.
***



###Learning Objectives
* Explain *what* **git** is, *why* you would use **git**, and *how* to use **git**.
* Be able to *create* and *initialize* a **GitHub** repository.




### What we're doing in class today...
1. Introduce and talk Git, GitHub, and VCS
2. Discuss file structure best practices
2. Setup your GitHub accounts
3. Create a repository (or repo) on GitHub
4. Integrate git and initialize a repo into a web app 
5. Mini Lab - Follow each other on GitHub
6. Lab Time!
<br>


###Your Lab for Today...
*  Make a new directory on your own machine and create a new HTML file inside of this folder.

```
$ mkdir git-lab-folder
$ touch index.html

```
* Go onto GitHub and create a repository.



* Hop back into your Terminal and initialize your ```git-lab-folder``` app (make sure you have cd-ed *into* the folder). **Remember, GitHub provides a helpful command-by-command walk-thourgh on how to do this!*

```
$ git init
$ git add -A
$ git commit -m "first commit"
$ git remote add origin <your_clone_URL_here>
$ git push -u origin master

```
*  Now, ```subl .``` into your ```git-lab-folder```, open up your ```index.html``` and make some changes.

* Once you have made changes inside of your ```index.html```, go back to your Terminal and run the command ```git status```. What do you see? You should see that changes have been made to your ```index.html``` file. Now we want to go through the steps to save those changes in git locally on your machine, and then push those changes up to GitHub on your repository.

```
$ git add -A
$ git commit -m "Make changes to index.html"
$ git push origin master

```
######Rinse and repeat this lab THREE TIMES to get these commands really stuck in your brain!


<br>

**Git and Github Resources:** 
<br> [Git Documentation](http://git-scm.com/doc)
<br>[Generating SSH Keys for GitHub](https://help.github.com/articles/generating-ssh-keys)
<br>[Git Pro - online free version of this book!](http://git-scm.com/book)
<br>[Git Cheatsheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)






