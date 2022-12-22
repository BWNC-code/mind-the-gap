# MIND THE GAP

![amiresponsive](/assets/images/site-screenshots/am-i-responsive.png "Site responsiveness test")

## Table of contents

- [Introduction](#introduction)
- [UI Decisions](#ui-decisions)
- [Features](#features)
- [Features left to implement](#features-left-to-implement)
- [Technology Used](#technology-used)
  - [HTML](#html)
  - [CSS](#css)
  - [Javascript](#javascript)
- [Testing](#testing)
- [Browser Compatibility Checks](#browser-compatibility-checks)
  - [Google Chrome](#google-chrome)
  - [Firefox Dev Edition](#firefox-developer-edition)
  - [Opera](#opera)
- [Manual Feature Testing](#manual-feature-testing)
- [Bugs](#bugs)
- [Deployment](#deployment)
  - [Cloning and Forking](#cloning-and-forking)
  - [Local Deployment](#local-deployment)
  - [Remote Deployment](#remote-deployment)
- [Credits and Acknowledgements](#credits-and-acknowledgements)

[Table of contents generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)

## Introduction

Mind the Gap aims to alert people to the unbalanced approach the medical and pharmaceutical industries have towards womens vs mens healthcare. The site is intended to educate people on what assumptions are made which are harmful, and highlight conditions and treatment they might otherwise be ignorant of. This inital draft of the site will contain the broad message as well as another page on a specific condition as an example to build on in future.  
There is also an area to sign up to a newsletter for further information and updates.

![Home page](/assets/images/site-screenshots/home-page.png "Site home page")

## UI Decisions

A clean colour scheme with a light background and single accent colour was used so that the focus would be on the information provided on the site.  
Only vector images were used in order to both ensure they would load quickly while remaining high quality and to keep the theme of simplicity for the site

## Features

This section explains each part of the project and the value it brings to acheiving the project goal.

- __Navigation Bar__
  - Featured on all three pages, the nav bar includes links to the Home page, Education, and Sign Up pages and is identical in each page to allow for easy navigation.
  - It includes a media query in it's styling which hides all but the home page link and a menu button to view the other links when on a smaller screen. This allows the navigation bar to remain clean and to adapt to future additions of new pages.

![Nav Bar](/assets/images/site-screenshots/nav-bar.png "Navigation bar")  
![Nav Bar on small screen](/assets/images/site-screenshots/nav-bar-small.png "Navigation bar on small screens")

- __Statistics Section__
  - Appears when first loading the website, it has simple facts with accompanying images so visitors are not immediately greeted by a wall of information.

![Statistics section](/assets/images/site-screenshots/stat-section.png "Statistics section")

- __The Footer__

  - The footer section includes links to relevant external sources of information on womens health. The links will open to a new tab to allow easy navigation for the user.
  - The footer provides further avenues of learning after the site has acheived it initial goal of making the user aware of the issues.

![Footer](/assets/images/site-screenshots/footer.png "Page footer")

- __PMDD Page__

  - This page is the first example of the intended majority of future pages on the site, it outlines a condition which is less known but affects women. The focus of the page is to educate users on the essential aspects of the condition.
  - This page is found in the pmdd.html file

![PMDD](/assets/images/site-screenshots/pmdd-page.png "PMDD condition page")

- __Sign-up Page__

  - This page contains a form by which users can submit contact information to recieve a newsletter of updates or new information on womens health issues.
  - As there is not currently a database linked to the site, on submission the form redirects to a thank you page which explains the site is still missing this feature and directs them to the footer links for more information before redirecting to the home page after 10 seconds.
  - This page is found in the sign-up.html file

![Sign-up](/assets/images/site-screenshots/sign-up.png "Sign-up page")

## Features left to implement

- Further development of the site would be focused on adding more pages for other lesser known conditions, and implementing the sign-up form back-end

## Technology Used

### HTML

### CSS

### Javascript

## Testing

- HTML  
  No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)
  - [Home Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbwnc-code.github.io%2Fmind-the-gap%2Findex.html)
  - [PMDD Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbwnc-code.github.io%2Fmind-the-gap%2Fpmdd.html)
  - [Sign-up form page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbwnc-code.github.io%2Fmind-the-gap%2Fsign-up.html)
  - [Thank you page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbwnc-code.github.io%2Fmind-the-gap%2Fthank-you.html)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbwnc-code.github.io%2Fmind-the-gap%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

- Accessibility
  - I used dev tools lighthouse to confirm performance, readability and best practices for the site
  ![Lighthouse](/assets/images/site-screenshots/lighthouse.png)

### Responsiveness / Device Testing

The site was tested on the following devices;

- HP Elitebook 840
- AOC Q27V4EA - 27 Inch QHD Monitor
- Apple iPhone 13 Pro max
- Google Chrome Developer Tools - simulator for all different device options as well as using the adjustable sizing options

The website functioned as expected in all of these devices.

## Browser Compatibility Checks

### Microsoft Edge

The latest deployment of the site was loaded onto Microsoft Edge (a Chromium browser) with no visible issues

![Edge](/assets/images/site-screenshots/edge.png "Microsoft Edge")

### Firefox Developer Edition

The latest deployment of the site was loaded onto Firefox developer edition with no visible issues

![Firefox Developer Edition](/assets/images/site-screenshots/firefox-dev.png)

### Opera

The latest deployment of the site was loaded onto Opera with no visible issues

![Opera](/assets/images/site-screenshots/opera.png)

## Manual Feature Testing

I have manually tested any interactive or reponsive features on the site, evidence below;

- Small screen viewing

  ![Phone-screen](/assets/images/site-screenshots/home-phone.png "Home page on small screen")

- Drop down nav bar

  ![Dropdown-nav](/assets/images/site-screenshots/small-nav-test.png "Nav drop down")

- Submitting the sign-up form without inputting details

  ![Submit-form-no-name](/assets/images/site-screenshots/form-name-submit.png "Submit form with no name")

## Bugs

No unsolved bugs

## Deployment

This section describes the process of obtaining a copy of this websites files in a new repository, running an environment to work on the site, and deploying to a live platform

### Cloning and Forking

-At the top of the repository page, select fork and choose a name for the new repository to create a copy

-Alternatively select code above the file viewer and either use the link to pull a copy of the code or download the code as a zip file

### Local Deployment

- Navigate to [Gitpod](https://gitpod.io/)
- Login using a Github account
- Download and install the Gitpod browser extension
- Return to the repository
- Select the green Gitpod button above the file viewer

### Remote Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - Select the pages link in the sidebar
  - Under "Build and deployment", under "Branch", use the None or Branch drop-down menu and select a publishing source.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://bwnc-code.github.io/mind-the-gap/index.html)

## Credits and Acknowledgements

Animated navigation menu - Tutorial found on [W3 Schools website](https://www.w3schools.com/howto/howto_js_sidenav.asp)

The images used on the home page are from Vecteezy.com and Freevector.com
Images used have been given source links where they appear

The icons in the navigation bar and footer were taken from [Font Awesome](https://fontawesome.com/)
