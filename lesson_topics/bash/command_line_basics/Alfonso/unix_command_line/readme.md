#Prologue


Bell labs UNIX intro

The UNIX Os was originally created at Bell Labs by Ken Thompson and Dennis Ritchie back in 1969. It was released to the public in 1975. Apple Computer transitioned its origianal home grown operating system over to a BSD variant of UNIX in 2000 know as OSX. In 2007 OSX became a certified UNIX.

Blaw Blaw Blaw...so what are UNIX machines and why does it matter?

Workstation machines and Super computers run Linux (or some flavor of Unix). It's built to be more robust, reliable and powerful. It's not built for the masses its built for systems that need to NOT FAIL. [BSOD](http://en.wikipedia.org/wiki/Blue_Screen_of_Death) are NOT welcome.

[Take a peek at the top 500 super computers in the world. Click the "SYSTEM" name for the top five](http://www.top500.org/lists/2014/06/)

You won't find Windows.

Most of the internets servers run a variant of UNIX called Linux
Many of the commands you will learn here are available on these other systems.

#Command Line Basics
we are going to go over a subset of unix commands that you will be using most of your time here in class. I will also show you some other usefull commands, some tools and some neat tricks. 

###At the end of today you will be able to:

- change into a directory
- use cd .. to navigate up a tree
- make a directory
- remove a directory
- list directory contents (horizontal / vertical)
- use tab complition
- use command flags
- how to get help (manpages)
- create a file with "touch"

###the most important commands we will cover
- cd and cd ..
- mkdir --- make directory
- rmdir --- remove a directory
- rm --- remove a file (and why rm -rf * is hot so don't touch it)
- mv --- move a file from A to B
- ls --- (ls -a, ls -l, ls -f, ls -F)
- touch --- create a file
- pwd --- (where the heck are we?)
- history --- (and the up arrow)
- more (history | more) **(note the pipe command)**
- sudo

###tools
- tree - use tree to describe "where" you are.

	```
	brew install tree
	```
- iterm2

	[This is an enhanced terminal tool download it here](http://www.iterm2.com/#/section/home)

###even more commands
- man --- learn about a command---man [name_of_command]
- top --- display running proccess and information (it's just cool)
- ps --- see all running processes with ids
- kill --- kill [id number]
- find --- Search for files 
	
	```
	find /Users -name "test.txt" 	 
	```
- mdfind --- cooler than regular find --- mdfind [fileName]
- curl --- transfer data from or to a server
- cal --- displays a calendar
- date --- the date-nuf said
####good for how the internet wor
- ping --- can I reach the network
- traceroute --- where are my packets going
- telnet --- login to a different computer
- ftp --- transfer files over the internet		



###tricks
- clear the screen (ctrl+l)
- remap caps lock to ctrl
- open [file]
- open .
- subl . (open all the files in sublime - we will do this A LOT)

	Check this link out for instructions:
[sublim text command line tool](https://www.sublimetext.com/docs/2/osx_command_line.html)

- command+f to find a thing
- alias
- Diff
- fn + arrows goes to beginning or end of line




#Exercise 1


make a new directory called "clifun"

```
mkdir clifun
```
cd into it

```
cd clifun
```

touch a new file

```
touch myapp.rb
```

write a basic ruby app:

```
open everything in sublime text...
subl .
command+t
enter the name of the file we want --- myapp.rb
enter some ruby code here
```

let us require pry on line 0

(Note: make sure to [gem install pry](http://pryrepl.org/) first)

```
'require pry'
```

now let's place binding.pry some where in the code

```
binding.pry
```
run the ruby program and see pry work

```
ruby myapp.rb

```
**Now we're gonna destroy all our hard work ^-^**

cd .. (cd up one level)

```
cd ..
```

ls to make sure we are where we want to be

```
ls
```
**we should see the name of the directory 'clifun'**

delete the directory recursively

```
rm -rf clifun
```


Note: If you purchased your Apple after 2007 then [your mac is a certified Unix system](http://www.unix.org/what_is_unix/history_timeline.html)

[Here is an AtoZ list of commands available on your mac](osx_unix_commands.md)

----

Compiled and Edited by Alfonso Rush
