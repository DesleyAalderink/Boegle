# Desley in Boegle | What did I do?

## Week 1

This will be a readme about the Meesterproef and what I did. 
I must say that we did A LOT as a team, but ofcourse not everything.
I will mark down my own vision and there will also be a second readme of the team.

ENJOY!

### Concepting
In the first week, after the pitch, me and Emiel decided to work together for the Meesterproef. 
We sat down and created three concepts. We came up with the concepts thanks to the mindmap we made.
We pitched all of our idea's to our mentor Danny. It seemed like our concepts were pretty much the same,
so after a talk we decided to work together.

We did a lot of reasearch (which can be found in my process book) where we came up with a definite idea.
We wanted to make a application where the user can fill in his/her information about the book he/she
is trying to search.

### Learning curves
I also made a list of things I want to learn in the 5 weeks we have. 
My lists is as follows:

* I want to understand and implement ES6 into the project
  - I have heard good stuff about ES6 and I want to learn how to use it.
    I want to write code in ES6 for a more efficient way to programm.
 
* I want to dive into build tools and implement this knowledge into the project.
  - Build tools are made to make programming a little easier. There are a lot of buildtools and modules to choose from.
    I want to do a little research in what the best build tool is for the project and I want to be the one to make
    the code setup.
 
* I want to expand my JavaScript knowledge in the Front End and write more JavScript
  - In project its normally me who keeps the focus on CSS and CSS animations. Its what I'm good at and I find it a lot of fun to do.
    JavaScript is pretty much my weak point and because of this I want to be working with using more Front end JavaScript.

* I want to learn how to use GitHub in a team structure
   - Github is something I'm not very used to. I really don't know how to use it. In this project I want to learn the git flow
     and how to do pull and push requests. I also want to give out code reviews to my fellow teammates on GitHub.

## Week 2

## User story and User Scenario
The second week started with making the user story and user scenario. We thought about how the user must experience the application and what the struggle would be from the user. After a little brainstorm we came up with a final user scenario and a final user story (this can be seen in my process book). 

### Designs
We all made a design to how we think the application must look like (designs
can be found in my process book) and after we came together we looked at each others designs and decided on a final design. 
We combined the strong visual interface from Victor with the smooth result page from Chana. Some elements from me and Emiel were taken
into the final design as well.


### Sorting the data
Victor and me started looking into the data. We searched through the data and marked everything down (this can be seen in my process book). We saw that the OBA API data was pretty huge and we were happy to see that. We could ask good information from the users!

### Code rules
After collecting the data the whole team came together and we made some code rules. This was a little hard to do, because we didn't agree with each other. In the end we came up with the following list:

* No ;
* Each feature gets his own branch
* Use ES6
* A tab = 4 spaces
* one ' 

### Planning
After the code rules me and Victor decided to focus on the setup for the planning (can be seen in my process book). 
We thought about the ideal goals for each week to achieve. After we were done, we decided to call the team together and we finetuned
the planning and hung it up on the wall as a reminder of good faith!

### Moscow
We used the M.O.S.C.O.W method to decide the most important (and not so important) part of the application. 
With this in mind we can easily see on what our focus me be. 

### Division of tasks
We gave each other and ourselves the tasks to do for the commming week.
My tasks were:

* Researching and implementing JS Modules
* Researching and maybe implement Webpack
* Researching and use build tools

### Build tools
I focussed on the different uses of Build Tools and made a little research document of it [here](https://github.com/DesleyAalderink/weekly-nerd/blob/master/developer-tools.md)

I decided on useing NPM Script for the basic build and use the following dependencies:

* RollUPJS - for combining the different JS and CSS modules
* DotENV - for the secret keys
* eslint - for a strict use of JS check (everyone must follow the code rules)

The basic code setup was written by me.

## Week 3

### Pitch Mark Vos
Our coach and project giver Mark Vos has made his first appearance. 
Me and the team came together to think about how we want to pitch and Emiel made the powerpoint.
The pitch went great and Mark was excited to see how we would develop further.

### Questions for the book
The user must enter information in the book, but how?
We decided on using 4 stages for the book: the front side, the back side, the inside and the side view.
We took the data information from Victor and me and we puzzled the data together. This went rather smoothly.

### Discussions
There were some discussions in the team. When this happened we came together and talked it out (in a friendly way).
Sometimes we needed to vote and sometimes we invited Suus and Max from the ADAM Link project to vote as well.
Most of the discussion were between Victor and Emiel, but it was all friendly!

### Detailpage
When the user has found its book the user must be redirected to a detail page. I took this job. I started by making multiple designs.
The design I eventually choose was the design with the book on the left and the data on the right. This was more like the OBA's style.
The team liked the idea, but I needed to add a recommendation feature. I put this on the bottom, because I didn't think this was all
to important.


* (everything in the CSS between the "DETAIL PAGE" lines are written by me)[https://github.com/Boegle/Boegle/blob/develop/src/styles/style.css]


## Week 4
In week 4 we did the tests. The test were done with children from the Cartesius school. We tested on 3 boys and 2 girls. The tests were
absolutely something we needed. We got a lot of new insights (more information in the teamreadme) and we had some stuff we needed to fix.

## Scroll button
One of the feedback points was that the kids didn't knew they could scroll down the detail page. Victor came up with the design for a scroll down button. I made this real in code. The scroll button is sticky'd to the floor, so it will always be displayed at the bottom in a bouncy animation when you first land on the page.

## Zero State
The "see location" model was something I made aswell as the zero state on the homepage. The model is a simple overlay where the users
can find if the book is available in a OBA. The zero state consists of a first time greeting and explenation of what the application is. Victor also made it happen that it won't be there if you go a step back and you already filled in data. No need to see that if you already entered some data.

* [bookZeroState.ejs](https://github.com/DesleyAalderink/Boegle/blob/develop/views/components/bookZeroState.ejs)

## Just coding
The buggfixes and the detail page self were done by me

* [location.js](https://github.com/Boegle/Boegle/blob/develop/src/js/modules/location.js)

* [detail.ejs](https://github.com/DesleyAalderink/Boegle/blob/develop/views/detail.ejs)

* [bookLocation.ejs](https://github.com/DesleyAalderink/Boegle/blob/develop/views/components/bookLocation.ejs) - EJS help from Victor

* [bookInformation.ejs](https://github.com/DesleyAalderink/Boegle/blob/develop/views/components/bookInformation.ejs) - Calling the data help from Victor

* [bookRecommendation.ejs](https://github.com/DesleyAalderink/Boegle/blob/develop/views/components/bookRecommendation.ejs) - Calling the data help from Victor

* [ZeroState.js](https://github.com/Boegle/Boegle/blob/develop/src/js/modules/zeroState.js) - with some help from Victor

## Week 5
The fifth week consisted of minor bugg fixes and making a video. 
Emiel came up with the storyboard and he made sure to get us a studio.

My job at the studio?
Push Victor on a trolly so the camera will be smooth and the transisition will be more steady.

## Did I achieve my learning curves?

* I want to understand and implement ES6 into the project
  - I did!
    I didn't really did much JavaScript, but what I did, I did with ES6! I was tricky at the start, but the more
    I used it, the more natural it felt. The team was also very supportive!
 
* I want to dive into build tools and implement this knowledge into the project.
  - I did!
    I did research to the building tools and even implemented the tools into our setup! I was scared at first, but in the end it
    all worked out. I will keep using building tools for personal projects.
 
* I want to expand my JavaScript knowledge in the Front End and write more JavScript
  - I kinda did?
    I didn't really use a lot of JavaScript for the things I did. That can be seen a learning curve itself. The things I learned from       teammates is something I implemented into my code.

* I want to learn how to use GitHub in a team structure
   - I did!
     Before I really didn't know how to use Git/GitHub, but thanks to Danny and the team I managed how to use it! I can now dream of all      the git commands. Github is a gift of god.
     
## Conclusion
It was a really fun and learnful ride. The team was amazing and I had a lot of fun. I learned some new tricks from the team as well as on my own. I'm really happy with the result we have produced in just a few weeks.
     
## Special thanks
To all the teachers who gave me feedback and good tips and tricks. I know I didn't go in full detail about it, but I appreciate it alot.

Also special thanks to our mentor Danny. He gave us GREAT tips and helped us out whenever we needed to. We had a lot of fun with him.

Mark Vos and OBA must not be forgotten, ofcourse. Its thanks to them that I'm even writing this readme. They were very friendly and really supportive to us.

And last but not least: The whole team of Boogle. I had a great and fun time and I will miss them and the project. I will remember this project as my favourite school project. 



# Working in a team - Boegle
Amsterdam OBA | To search a book
![A demo of the OBA searchbook](readme_assets/application-introduction-v1.gif)

## Table of contents

- [Description](#description)
- [Getting started](#getting_started)
- [Progression](#progression)
    - [Week 1](#week-1)
        - [User story](#user-story)
        - [User scenario](#user-scenario)
        - [Concept](#concept)
    - [Week 2](#week-2)
        - [Automate workflow](#automate-workflow)
        - [Coding](#coding)
        - [Presentation](#presentation)
    - [Week 3](#week-3)
        - [Product](#product)
        - [Testing](#testing)
    - [Week 4](#week-4)
        - [Testing](#testing-1)
    - [Week 5](#week-5)
        - [Mobile](#mobile)
        - [Poster](#poster)
        - [Product video](#product-video)


## Description
The OBA Search a Book is an application where an user can search for a book that they vaguely remembered. 

This application is created by Chanakarn Niyornram, Victor Zumpolle, Emiel Muis and Desley Aalderink commissioned by Openbare Bibliotheek Amsterdam. 

## Getting started

Install all dependencies
```
npm install
```

Create .env file in directory and add your preferences
```
HOST = 3000
PUBLIC_KEY = public key name
SECTRET_KEY = secret key name
```

Start application
```
npm start
```

Standard port is 3000
```
localhost:3000
```

## Progression

*The progression section gives a weekly insight to what the team is working on, what for problems we've encountered and how we've dealth with the problems during our project.*

### Week 1

The focus of the first week lays on understanding and debriefing the client problem. From there we're creating an user story and an user scenario that gives us an idea what the visitors of the OBA wants and how the perfect scenario would be. And last but not least creating a concept for solving this solution.

#### User story

The high school student comes in the OBA and is looking for a book. With a description without title and writer, the librarian can do nothing. The student can use the installation next to the desk to find his / her book. The books are filtered by - among other things -  the subject, thickness of the book and the color of the cover. The student finds the right book, can see where it is, whether it is available and then borrow the book.

#### User scenario

The high school student is looking for a book, of which he or she no longer knows the title and the writer. Through a web application, the student can find the book in the OBA.

#### Concept

To comes up with a concept, we first generate ideas that are enable to solve this problem. 

<details>
<summary>Click: to see mindmap of the ideas</summary>
<img src='readme_assets/mindmap.PNG' alt="Mind map of generated ideas">
</details>

After generating ideas, every member created their own concept of a web application that will solve the problem. The concept is than shown to the team and at the end of the day the team will pick an aspect of a concept that is suited for solving the problem really wel.

<details>
<summary>Click: to see concepts</summary>
<p>Wall of generated concept</p>
<img src='readme_assets/wall-of-generated-concept.jpg' alt="Wall of generated concept of every member">

<p>Zoomed in on a concept</p>
<img src='readme_assets/concept-one.jpg' alt="A zoomed in photo of one of the concept">
</details>

### Week 2

The focus of the second week is setting up a development workflow and understand the API that is given from OBA.

#### Automate workflow

To streamline our development enviroment we're creating a taskrunner that will automate some of our work. Those work are:

- compilling sass
- combine javascript module
- watch files
- start server
- linter

There are a lot of taskrunner that we can use. To choose a correct taskrunner Desley has done research to some of the most used ones. You can find the document [here](). The list is created with a pro and con from each taskrunner and from that we choose one with the most pro. 

The taskrunner that we've settled with is Gulp. Gulp is written in Javascript which mean it's easy for us to start developing the automated task. It's also very easy to add a new automated task to the system.

When presented this to our mentor, he was not very pleased to the conclussion we've come up with. He advised us to use NPM Script, because it use less command and it takes less time to set-up and start developing.

After the presentation we have had a discussion about the feedback that is given by our mentor. We discussed if we're going to rewrite our Gulp taks in NPM Script - that mean a whole day work is gone - or are we're going to keep the Gulp taks.

After a long discussion we're going to rewrite the Gulp task in NPM Script because:

- We're already starting the server with __npm start__ so when we're adding some other automated tasks, than it's very logical to do this within the same command line.

- We have never work with NPM Script before, so NPM Script will be a new learning oppertunity for us. 

- When NPM install, all dependencies of the automated script will be installed, so when someone else clone our repository, than they will also have and understand the task that will be runned.

#### Git flow 

To be able to develop in a team, we're using git as our Version Control System and using Github as our platform for uploading our code. To avoid conflict we're are going to create branche whenever any feature is added. 

When presented this to Danny (our advisor), he found it a good idea, but it's not good enough to create consisteny and avoiding conflicts. With the help of Danny he presented idea's that we can use to create a better git flow. Those idea are:

- A convention for commit messages
- Pull request need to be checked before any merge
- Create a develop branch and merge this to the master whenever a new version is ready.
- Create a Github project that keep tracks of tasks and progress
- ~~Create a template for Issues~~~

With the help of Danny, we've implemented every ideas except the Template part, because we think it's unnecessary because the project is private for now.

#### Coding

To understand and create a better concept for the problem, we need to know which data the API is giving us. Two members worked on this.
The problem was that they a different module for this. One member worked with  Request module and the other with the Node-fetch module. This create conflict. 

After a discussion we choose to use Node-fetch. We choose this because, it use the same fetch syntax as the front-end. This means that other member of the team are able to understand the code better. Also it creates concistency in the code, between the front- and backend.

#### Presentation

We pitch our idea and concept to Mark (product owner) to get feedback and to know what he's opions is about the concept.

<details>
<summary>Click to see: photo of the presentation</summary>
<p>Presentation</p>
<img src='readme_assets/presentation.jpg' alt="A zoomed in photo of one of the concept">
</details>

### Week 3

The focus of week 3 is to create a proof of concept and test this out with real users.

#### Product

When we first starting to create this applicatoin, we intentionally didn't focus  on the appearence, because we want this application firstly to work. 

This is an image of the early version of our application.

![early version of the Zoek 'n Boek application](readme_assets/earlyVersion.PNG)


#### Testing
To make this application really great and to see if our product really work, we need to test this with real users. Mark created an appoinment with one of the Highschool in the area for us to test. However because of miscomunication we aren't able to test the application further. 

But we still need to know if our app works, so we test our app with our colleague and our mentor.

<details>
<summary>Click to see: photo of the test</summary>
<p>Test with colleague</p>
<img src='readme_assets/testing-colleague.jpg' alt="Photo of the test with a colleage">

<p>Test with mentor</p>
<img src='readme_assets/testing-mentor.jpg' alt="Photo of the test with our mentor">
</details>

__Feedback (in dutch)__
- Doelgroep = Jeugd of none (wegens fout API)
- Slider
     - Krijgt mousedown (voor constante feedback)
     - Min = 50 of minder
     - Max = 500 of meer
     - Begint met animatie
     - Moet meer opvallen
- Titel, auteur en taal overruled een hoop
- Form vragen moeten "vragender"
- Placeholder moet òf meer placeholder-achtig òf verdwijnen na :focus
- Knoppen onderin moeten een animatie krijgen
- Kleur van de tekst moet veranderen als de kleur van de kaft verandert
- Resultatenknop
     - Font-weight moet hoger
     - background-color moet worden verandert
     - moet meer opvallen
     - animeren na het kunnen tonen van resultaten
- Cutsom Select moet scrollen na het openen om de mogelijk tot scrollen te verduidelijken
- State 4 naar 2 na gebruik slider gaat kapot door het verkeerd verwijderen van class "none"
- Er moet een terugknop komen op de resultaten- en detailpagina

### Week 4
The focus of week 4 is to work further and improve the application with the feedback that is given. And also to test it with real users.

#### Testing
After improving our applicaton we went to a highschool in our area. We test our application with five users and every test is done individually. 

[Link to our testplan (in dutch)](readme_assets/testplan.pdf)

<details>
<summary>Click to see: feedback of the test (in dutch)</summary>
<p>Feedback</p>
<img src='readme_assets/feedback1.jpeg' alt="Photo of feedback">
<img src='readme_assets/feedback2.jpeg' alt="Photo of feedback">
<img src='readme_assets/feedback3.jpeg' alt="Photo of feedback">
<img src='readme_assets/feedback4.jpeg' alt="Photo of feedback">
</details>

### Week 5
The focus of week 5 is to improve our application and to make the application useable for mobile so that even a user at home is able to use the application.
We also created a poster and a product video for our end presentation.

#### Mobile
We made the application useable for mobile and this is how it looks.
![Mobile version](readme_assets/boegle-mobile.gif)

#### Poster
We've also made poster to put at our stand for the end presentation.

<details>
<summary>Click to see: some posters</summary>
<p>poster</p>
<img src='readme_assets/poster1.jpeg' alt="Poster">
<img src='readme_assets/poster2.jpeg' alt="Poster">
<img src='readme_assets/poster3.jpeg' alt="Poster">
<img src='readme_assets/poster4.jpeg' alt="Poster">
<img src='readme_assets/poster5.jpeg' alt="Poster">
<img src='readme_assets/poster6.jpeg' alt="Poster">
</details>
