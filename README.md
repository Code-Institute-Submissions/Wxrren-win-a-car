# Win a car

Win a car is a simple 3 select card game with the goal of matching 3 cards to win a shiny new car!

To get started you just need to hit the start button and start selecting cards. Once you select 3 cards if you don't get a match hit try again. You only get 5 attempts per go!

Once 5 attempts as been made, a game over screen will pop up and you can hit restart to try again. One you match 3 cards a pop up will appear containing a form asking for your name and email address, once this is filled in and submitted you will receive an email confirming your prize.

Win a car also has a dark mode toggle for the keen dark mode enthusiasts out there!

 
![An images showing the website being responsive across multiple devices](assets/images/am-i-responsive.png "Resonsive site")


[You can visit the Win a car website here](https://wxrren.github.io/win-a-car/)
------

## Table of Contents

### [User Experience (UX)](#user-experience-ux)
* #### [User Stories](#user-stories)
* #### [WireFrames](#wire-frames) (View the repository [here](https://github.com/Wxrren/win-a-car/tree/main/assets/images/wireframes))
* #### [Design](#design-1)

### [Features](#features-1)
* #### [Existing Features](#existing-features-1)
* #### [Features Left to Implement](#features-left-to-implement-1)

### [Bugs](#bugs-1)

### [Testing](#testing-1)
* #### [Validation Results](#validation-results-1)
* #### [Manual Testing](#manual-testing-1)
* #### [Lighthouse Report](#lighthouse-report-1)

### [Technologies Used](#technologies-used-1)

### [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used-1)

### [Deployment and local development](#deployment-and-local-development-1)
* #### [GitHub Pages](#github-pages-1)
* #### [Forking the GitHub Repository](#forking-the-github-repository-1)
* #### [Local Clone](#local-clone-1)

### [Credits](#credits-1)

### [Acknowledgements](#acknowledgements-1)
------

## User Experience (UX)

There is a clear navigation in the nav bar which directs you on where to join the league or sign up to competitions. It directs you to a tournaments gallery Where pictures of tournaments others have competed in can be viewed.

The website is a simple single page that makes use of modals instead of diverting to other pages. When selecting the modals users can either check the rules, submit a query/complaint and enter their email details should they win the game.

Users can also switch between light and dark mode by selecting the moon logo on the top right corner. 

To make the user experience easy - I wanted the site to have:

* A simple call to action in the form of the "Play!" button which also turns to a "Next Turn" button after the 1st attempts are made.
* A simple UI. I wanted minimal buttons appearing on the screen to make it less cluttered focussing only on what they need to play the game or ask any questions.
* Fast game that's responsive to user actions.

## User Stories
To determine which approach to take with site features I detirmined the goals of different users from first time through to frequent users.

### User

* First time User Goals
    * As a user I want to understand the main purpose of the site and get straight into the game.
    * As a user I want to understand the rules of how I can play the game.
    * As a user I want to be able to easily navigate the site.
    
* Returning User Goals
    * As a user I want to be get straight into the action with playing
    * As a user I want to be able to easily contact and provide feedback if something goes wrong.
    
* Frequent User Goals
    * As a user I want to be able to get started quickly
    * As a user I want to see a simple and easy website with no added bloat since the last attempt.

## Wire Frames

When designing this website I intended to have a very minimal design that didn't distract from the card game. The design was intended to look the same across all devices.

I chose to keep one simple page and make usage of modals for anything else needed

### Home Page - Wireframe for Desktop, Tablet and Mobile.
![An images showing the website wireframes across different devices](assets/images/wireframes/wireframes-all-devices.pngwireframes-all-devices.png "Home Page Wireframe")

* Mobile

For the "Rules" and "Contact" button I chose to put these at the top of the page due to limited space on the sides. I want the card game to be the main focus. Modals will pop up in front of the fact game in the middle of the screen.

## Design

### Colour

The colour scheme I wanted for the website was simple and clean. I chose colours to try and follow the 10 commandments of colour and complement the colors see on the site.

For the background of lightmode I chose a simple blue as it felt calm and inviting and for darkmode it was a simple black. The card colours change depending on if it's lightmode or darkmode. For lightmode I chose a lightblue and orange to go together. In darkmode I chose green and pink. Both of these show across from eachother on the colourwheel.

### Website lightmode and darkmode


* Light mode
    ![An image a website with a blue background, light blue buttons and blue and orange cards](assets/images/website-lightmode.png "lightmode Colours")
    

* Dark mode

![An image showing a black colourwith hex and RGB codes](assets/images/website-darkmode.png "darkmode colours") 


* Main colours used on the website:
    * Background colour: rgba(6, 115, 255, 1) - This was chosen as a nice cool and inviting background that didn't take too much away from the main card game. 
    * Modals and button colours: #add8e6, #008000,  - This was to keep with the theme of simple and easy to read colours which matches the light mode and dark mode colours of the cards to keep a simple theme.
    * Dark mode modal button color: #0d6efd - The above colour in darkmode was not very readable with plain white text. I wanted the text to be as regimented as possible so changed the colours.
    * Light mode card colours: rgba(85, 213, 255, 0.8) + rgba(255, 94, 6, 0.8) - These were chosen in an effort to follow the ten commandments of colour. They are across from eachother on the colour wheel and both compliment eachother making the cards look more enticing.
    * Dark mode card colours: rgba(92, 255, 85, 0.8) + rgba(246, 3, 221, 0.8). Similar to lightmode these compliment eachother on the colour wheel and are aimed to make the cards look more attractive to players.
    * Game winning Modal: rgba(1, 1, 44, 1) + rgba(9, 9, 121, 1) + rgba(255, 0, 0, 1) - I wanted the winning modal to stand out as a celebratory message. For this modal only I chose to break the colour rule and reused the colours from my first project. This was done as a small little reference for my past work.

### Typography

* Lexend
    * I chose Lexend from Google Fonts as I felt it kept well enough with the theme of being clear and readable. I wanted all buttons and modals to be as easy to read as possible.

* Bebas Neue
    * For the dark/light mode toggles I wanted text next to the moon labels to make it as clear as possible what they would do. I chose this font from Google Fonts as it was an easy regimented bold font that stoof out from the rest of the text used elsewhere.

### WireFrames

I created my wireframes using balsamiq wireframes. I found this simple and effective for assessing the sites appearance as it had a variety of ready available tools representing different parts of a website so I was able to design it how I envisioned it.

## Features
* This website is a simple to use card game.
* Users can select the 3 cards to match and after 5 attempts can restart the game to try again.
* Responsive on all device sizes.

### Existing Features

#### Dark Mode Toggle

![Dark mode toggle shown by a moon and text](assets/images/dark-mode-toggle-feature.png "Dark mode toggle")


* The toggle is fixed to the top right of the page at all times.
* Once clicked the background will turn black and cards will change to a pink and green colour, text will turn white and buttons will turn green. 
* On light mode the logo is a moon. In dark mode the logo is a sun.
* Text changes from "Dark mode" to "Light mode" when toggled between.
* Easily accessible for the user, can be toggled at anytime.

#### Main Feature - Card game

![An image showing the main feature of the website.](assets/images/website-lightmode.png "Main website")

* Main game, when pressing play a modal will pop up wishing the player luck and letting them know to hit next turn after selecting 3 cards.
* Each card has an array of 9 images which will be called at random when the card is selected.
* The play button will change to "Next turn!" after the first attempt is made.
* Matches counter will count as each card selected matches the previous card. This is done by running 2 loops and checking if the card from the inner loop matches the card from the outer loop.
* Each time 3 cards are selected the game will automatically refresh the page. Progress is saved in local storage so when the page refreshed it increments how many attempts have been taken so far.
* If more than 5 attempts are taken a modal wil a game over screen will pop up promting you to restart as seen below.

![An image showing the game over screen](assets/images/restart-modal-feature.png "game over")

#### Email API
![An image showing an email response](assets/images/email-query-feature.png "query")
![An image showing an email response](assets/images/email-win-feature.png "comgratulations")
* An automatic response email that would confirm to users they will have their query responded to. It also provides a contact number to escalate. This email will be received when the form within the "Contact us" modal form seen below is completed. The data taken from user input is passed into the email API. This is done by creating a global variable for contact form data and defining it within each mail function.
![An image showing a form requesting an email and query](assets/images/contact-us-modal-feature.png "query form")
* The email win feature is set up the same way as above. When a user selected 3 cards and matches 3 in a row a game winning modal will pop up requesting their name and email address. From here an email will be sent confirming the prize and how to claim.
![An image showing a form requesting an email and query](assets/images/game-winner-modal-feature.png "winner form")

#### Rules modal
![An image showing a pop up displaying the rules](assets/images/rules-modal-feature.png "rules")
* A simple modal that pops up when the button is clicked.
* Displays the rules to the player before they close it to get started on playing the game.

## Features Left to Implement

* Payment
   
    * To go more with the gambling sort of nature of the game I would like to make the first 5 attempts free to play and make it so that upon game loss users would have to pay to enter again and get another 5 attempts.

* Different Themes

    * I would like to create a few pages with similar games but different themes, maybe a western theme with desert like colours and cowboy images. Different themes to make it more intersting and appealing to users.

* Different games
    * I would like the option to add different game modes of things like guess the box. You would see the prize enter the box and the boxes would then quickly moves around the screen, you would have 3 attempts to select the correct box. 

    ## Bugs

| Problem         | Action           | Status  |
| ------------------------------------------------|:--------------------------------------:| -----:|
| Modals within if statements for win/loss conditions not poppup up.| Global variables getting the id's of the modal created allowing them to be accessed withing any function. From here I selected a classlist with a class made on CSS but not in the HTML tags allowing it to only be open on meeting the condition and selecting the correct class.| Fixed |
|  Conditional modals not closing using the buttons and onclick function in the HTML tags. | Within the if statement that selects the modal create another if statement checking that variable's class list contains the same one that's used to open the modal. If it does it will select the close modal class made in CSS and make an onclick event listener so that when the close button is selected it will apply the "close" class removing modal from the screen     |   Fixed |
| Email API not sending user input details.| When strings with set emails, names and texts manually written with strings the emails would send, however, in order for users to receive emails directly to them I needed to connect the form contact values but this would not work or send emails to users. In order to fix this I had to create a global variable. I then passed an argument called "contactForm" into the send email function and within the function created an object containing the name and email address from the contact form where the users data was collected from the form inputs. This would allow email JS to send an email to the user directly with my created template. |    Fixed |
| Cards still flipping even when 3 cards are selected.| With a simple if statement if the selected cards length are >=3 I put "return;" to make the function exit early and stop other cards being selected.     |    Fixed |
Cards still counting as attempts when more than 3 cards are selected.| Similar to previous fix. If the selected cards length are >=3 I put "return;" to make the function exit early and stop other cards being selected and stop it from tracking as more than one attempt.    |    Fixed |
Page refreshing instantly on 3rd card selection before users can see thier cards.| Used javascript "setTime()" function to create a timer delay before the page is refreshed.    |    Fixed |

## Testing

Testing consisted of using the W3C Markup and CSS Validator to go through each page of the project and validate that the code has no errors. They can be located below: 

* [W3C Markup Validator:](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* [JSHint](http://jshint.com/)

### Validation Results

<details>
<summary>index Page</summary>

![HTML checker showing no errors on the index page.](assets/images/html-validator.png "index")

</details>

<details>
<summary>CSS</summary>

![HTML checker showing no errors on the CSS Stylesheet.](assets/images/css-validator.png "CSS")

</details>

<details>
<summary>Javascript</summary>

![HTML checker showing no errors on the javascript Stylesheet.](assets/images/javascript-validation.png "Javascript")
* NOTE: jshint shows undefinined variables and unused variables. These variables are actually functions that are being called elsewhere. It is also an email.js API file that jshint is not recognising. Other than this, no other errors are present.

</details>

<details>
<summary>Javascript hover file</summary>

![HTML checker showing no errors on the javascript Stylesheet.](assets/images/javascript-hover-validation.png "Javascript")
* NOTE: jshint shows undefinined variables and unused variables. These variables are actually functions that are being called elsewhere. It is also an email.js API file that jshint is not recognising. Other than this, no other errors are present.

</details>

<details>
<summary>Javascript contact modal file</summary>

![HTML checker showing no errors on the javascript Stylesheet.](assets/images/javascript-contact-modal-validation.png "Javascript")
* NOTE: jshint shows undefinined variables and unused variables. These variables are actually functions that are being called elsewhere. It is also an email.js API file that jshint is not recognising. Other than this, no other errors are present.

</details>

<details>
<summary>Javascript rules modal file</summary>

![HTML checker showing no errors on the javascript Stylesheet.](assets/images/javascript-rules-modal-validation.png"Javascript")
* NOTE: jshint shows undefinined variables and unused variables. These variables are actually functions that are being called elsewhere. It is also an email.js API file that jshint is not recognising. Other than this, no other errors are present.

</details>

<details>
<summary>Javascript dark mode file</summary>

![HTML checker showing no errors on the javascript Stylesheet.](assets/images/javascript-toggle-validation.png "Javascript")

</details>



### Manual Testing

* The website was tested on Google Chrome, Opera GX and Safari browsers.
* The website was tested on a Desktop, Laptop, Tablet and x2 phones - one android and one apple.
* Google Dev tools was used to test the responsiveness of the site on different screens.

### Tests performed

| Test        | Status           | 
| ------------- |:-------------:| 
| Emails to user send following input details.      | Pass | 
| Mobile and tablet versions of the game are responsive and work exactly as the desktop version works.    | Pass      |
| Modals pop up on screen when buttons are pressed or conditions such as starting the game, losing game and winning the game are met | Pass      |
| Site works correctly on Android mobile device. | Pass      |
| Site works correctly on Apple mobile device. | Pass      |
| Site works correctly on Apple tablet device. | Pass      |
| Dark mode toggles to a black background with different colour cards and then back to light mode when toggled again | Pass      |
| Page refreshes and correctly counts each attempt made| Pass      |
| Matches are correctly counted and winning by getting 3 is possible  | Pass      |
| Cards can only be selected a maximum of 3 times and it doesn't increase as further attempts if you try to select more | Pass      |
Page refreshed 0.5 miliseconds after 3 cards are selected | Pass      |
Hover functions work as intended for buttons and toggles| Pass      |

--- 

### Lighthouse Report

* Mobile Results

<details>
<summary>Home Page</summary>

![Lighthouse scores for index page on mobile.](assets/images/lighthouse-validation-mobile.png "Index mobile")

</details>

* Desktop Results

<details>
<summary>Home Page</summary>

![Lighthouse scores for index page on mobile.](assets/images/lighthouse-validation-desktop.png "Index desktop")

</details>

## Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [Javascript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks, Libraries & Programs Used

* [Visual Studio Code](https://code.visualstudio.com) 
    * Used to write the code/README.

* [Git](https://git-scm.com)
    *  Tracking changes in my course code and pushing them to github.

* [Github](https://github.com)
    * To store my code/files and deploy my website.

* [Google Fonts](https://fonts.google.com)
    * Used for importing my main font for the website

* [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    * Used for making web development faster. My usage was for card columns + forms.

* [Icons8](https://icons8.com/icons)
    * Hamburger icon for mobile Nav bar toggler.

* [Am I Responsive](https://ui.dev/amiresponsive)
    * Mock picture for README file.

## Deployment and local Development.

*  ### GitHub Pages

I used GitHub to deploy the live version of the website. To do this I had to: 

1.  Log in to GitHub and locate the GitHub win a car [Repository](https://github.com/Wxrren/win-a-car)
2.  Locate the "Settings" button at the top of the repository as shown here:

![An image showing the repository page with settings highlighted.](assets/images/repository-settings-location.png "Settings")

3. look down the "Code and automation" area until you find ["Pages"](https://github.com/Wxrren/win-a-car/settings/pages) as shown below:

![An image showing the repository page with pages highlighted.](assets/images/site-link-github-pages.png "Pages")

4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".

5. The page will automatically refresh.

6. Scroll back to locate the now-published [site link](https://wxrren.github.io/win-a-car/) in the "GitHub Pages" section as seen below:

![An image showing the repository page with pages highlighted.](assets/images/site-link-github-pages.png "Site Link")

* ### Forking the GitHub Repository

Forking the repository allows you to make a copy of the original repository on my GitHub account to view and change without affecting the original repository. To achieve this, follow these steps:

1. Log in to GitHub and locate the GitHub GamerLeague [Repository](https://wxrren.github.io/win-a-car/)
2. At the top of the Repository(above the about section) locate "Fork" button.

![An image showing the repository page with Fork highlighted.](assets/images/fork-location.png "Fork Location")

3. Once complete you should have a copy of the original repository in your GitHub account.

* ### Local Clone

1. Log in to GitHub and locate the GitHub GamerLeague [Repository](https://wxrren.github.io/win-a-car/)
2. Above the list of files, click  Code.

![An image showing the repository page with Fork highlighted.](assets/images/code.png "clone")

3. Click on the code button, select clone with any of the options provided (These options are HTTPS, SSH or GitHub CLI) and copy the link shown.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be created.
6. Type **GIT CLONE**, and then paste the URL you copied earlier.
7. Press Enter to create your local clone.
