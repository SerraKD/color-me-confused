# Color Me Confused!

![Responsive design](docs-readme/amiresponsive.png)

## Table Of Contents

1. [User Experience (UX)](#user-experience-ux)
2. [Wireframes](#wireframes)
3. [Color Scheme](#color-scheme)
4. [Features](#features)
   1. [Existing Features](#existing-features)
      - [Landing Page](#landing-page)
      - [Game Page](#game-page)
      - [Time Up Page](#time-up-page)
      - [Game Over Page](#game-over-page)
   2. [Features Left to Implement](#features-left-to-implement)
5. [Testing](#testing)
   1. [Manual Testing](#manual-testing)
   2. [Validator Testing](#validator-testing)
   3. [Accesibility Testing](#accesibility-testing)
   4. [Fixed Bugs](#fixed-bugs)
6. [Deployment](#deployment)
7. [Local Deployment](#local-deployment)
8. [Credits](#credits)
   1. [Content](#content)
   2. [Media](#media)
9. [Acknowledgements](#acknowledgements)

---

## User Experience (UX)

### Site Goals

- User-friendly website structure.
- A simple but intriguing design to attract user interest.
- A game without complex logic while still challenging and testing users' cognitive skills.

### Target Audiences

- All individuals who can read and see.
- Individuals who have interest in brain training games.
- Individuals who are interested in testing basic cognitive skills.
- Individuals who are looking for a simple but intriguing fun game.

### User Stories 

As a user, i want to;

- Have a positive and unique experience when visiting the website.
- Have easy access to starting the game and getting instructions.
- Play a game to have fun while testing my cognitive skills.
- Have a smooth experience.

## Wireframes

In the planning stage, I used Balsamiq wireframes to create the basic layout of the website. The final design evolved more than planned.


| Page  | Wireframe |
| ---- | :----: |
| Landing | ![Landing Page wireframe image](docs-readme/balsamiq-landingpage.png) |
| Game | ![Game Page wireframe image](docs-readme/balsamig-gamearea.png) |


## Color Scheme

- I decided to have a dark black background to balance the color game and have an intriguing minimalistic design.
- While keeping the color scheme minimalistic, I wanted the start and instruction button colors to match the logo.
- For the answer buttons, I used CSS gradients to ensure the color texts on the buttons are easily readable.

![Answer Buttons Gradient efffect](docs-readme/answerbutton-gradient.png)

The __Contrast Grid__ is used to ensure the website is accessible.

![Contrast Grid colors](docs-readme/contrastgrid.png)

## Features

The website consists of a Logo, heading, landing page, game page, time up page, and a game over page.

- It has a minimalistic, responsive and dark design to create curiosity for the user.

- The main goal of the website is to give users a chance to play a fun, simple but memorable brain training game.

## Existing Features

### __Color Me Confused Logo and Heading__

- At the top center of the page logo and heading are the first things the user sees. The logo was made specifically to get the attention of the user, create curiosity, and suit the title of the game.

- The logo has a hover effect and when clicked on brings the user to the landing page.

- The logo is consistent throughout all of the game pages.

 ![Logo & heading image](docs-readme/logo-heading.png) |

### __Landing Page__

- The landing page includes the Color Me Confused logo, heading, start, and instruction buttons.

| Screen Size | Image |
| :---- | :----: |
| Small Screen | ![Landing Page image small screens](docs-readme/landingpage-small.png) |
| Medium Screen | ![Landing Page image medium screens](docs-readme/landingpage-medium.png) |
| Large Screen | ![Landing Page image large screens](docs-readme/landingpage-large.png) |

- __Start Button__

- When clicked, the start button takes the user to the game page and it has a hover effect.

![Start Button image](docs-readme/startbutton-img.png)

- __Instruction Button__

-  To be consistent with the name of the game, the instruction button is a question mark, increasing the user's curiosity even further.

- When clicked, the button opens up a modal that includes instructions for the game and a close modal button.

![Instruction Button image](docs-readme/instructionbutton-img.png)

- __Modal__

- The modal has clear but short instructions about how to play the game, information about countdown timer and gives a tip without being too obvious.

- It can be closed by clicking on the close button at the bottom of the modal.

| Screen Size | Image |
| :---- | :----: |
| Small Screen | ![Modal image small screens](docs-readme/modal-small.png) |
| Medium Screen | ![Modal image medium screens](docs-readme/modal-medium.png) |
| Large Screen | ![Modal image large screens](docs-readme/modal-large.png) |

### __Game Page__

- The game page consists of the game logo, question section, four answer buttons, and a score section.

- The user can play the game by matching the color questions with its text content buttons.

- User can only pick one answer per question, after the answer is selected game moves on to the next question until all questions are completed.

- Correct and incorrect scores are being calculated while the user is playing and can be found at the bottom center of the game area.

-  There is a countdown timer of 15 seconds built in the game page, so the user has to complete all the questions in the given timeline. Otherwise, it takes the user to the Time is Up page and the game is over.

| Screen Size | Image |
| :---- | :----: |
| Small Screen | ![Game Page image small screens](docs-readme/gamearea-small.png) |
| Medium Screen | ![Game Page image medium screens](docs-readme/gamearea-medium.png) |
| Large Screen | ![Game Page image large screens](docs-readme/gamearea-large.png) |

### __Time Up Page__

- The Time Up page consists of the game logo, a paragraph that informs users that they didn't finish the game in the given timeline and that the game is over.

- User can easily return back to the landing page by clicking on the logo.

| Screen Size | Image |
| :---- | :----: |
| Small Screen | ![Time Up Page image small screens](docs-readme/timeup-small.png) |
| Medium Screen | ![Time Up Page image medium screens](docs-readme/timeup-medium.png) |
| Large Screen | ![Time Up Page image large screens](docs-readme/timeup-large.png) |

### __Game Over Page__

- The Game Over page consists of the game logo, a paragraph that informs users that the game is over and shows their final score.

- User can easily return back to the landing page by clicking on the logo.

| Screen Size | Image |
| :---- | :----: |
| Small Screen | ![Game Over Page image small screens](docs-readme/gameover-small.png) |
| Medium Screen | ![Game Over Page image medium screens](docs-readme/gameover-medium.png) |
| Large Screen | ![Game Over Page image large screens](docs-readme/gameover-large.png) |

### Features Left to Implement

- In the future, I would like to add a game difficulty option to let users challenge themselves further.
- Adding a multiplayer option for two users playing the game and testing their cognitive skills at the same time would create more challenge and competition. The user who finishes first with the highest score will win the game.

## Testing

### __Manual Testing__

### __Validator Testing__

### __Accesibility Testing__

### Fixed Bugs

## Deployment

I used [Gitpod](https://gitpod.io/) to develop this website.

I deployed the website in early stages of develepment on [GitHub](https://github.com/) with following steps;

1. Log in to Github and go to projects' repository.
2. Find the Settings on the top of the repository and click.
3. On the left side of the screen, find Pages and select.
4. Under the Branch section, click on the dropdown that says none, and pick "Main" and click on save button.
4. The page is now deployed.

Visit the deployed website [here](https://serrakd.github.io/color-me-confused/).

## Local Deployment

__Fork__:

1. Log in to Github and go to projects' repository.
2. On the top right side of the page, click on _fork_ button.

__Clone__:

1. Log in to Github and go to projects' repository.
2. On the top of the file lists, click on _Code_ button.
3. Whether you want to use HTTPS, SSH key or Github CLI select it, and then click on copy.
4. Open the terminal, type **git clone** and paste the URL copied.
5. Press enter and local clone is now created.

## Credits

### Content

### Media

## Acknowledgements