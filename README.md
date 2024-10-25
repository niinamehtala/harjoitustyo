# Table of Contents

* [Table of Contents](#table-of-contents)
* [Break Room](#break-room)
  * [Sections](#sections)
    * [1. Break Challenge](#break-challenge)
    * [2. Rock paper scissors]
    * [3. Historical events on this day](#historical-events-on-this-day)
  * [How to use](#how-to-use)
  * [Technologies used](#technologies-used)
  * [Installation and setup](#installation-and-setup)
  * [Future improvements](#future-improvements)

# Break Room

Break Room is a simple web application designed to offer users short, engaging activities during work breaks. It consists of three main sections: Historical Events on This Day, Rock paper scissors -game, and the Break Challenge. The purpose of the app is to provide a refreshing pause during the workday, combining fun games, interesting facts, and random challenges.

## Sections

### 1. Break Challenge

This section is designed to encourage users to step away from the screen and complete a fun or healthy challenge. When the user clicks a button, a random challenge is selected from a predefined list. The challenges are simple tasks like:
•	"Drink a glass of water"
•	"Take a 5-minute walk"
•	"Stretch for 3 minutes"
The challenges can be customized.

### 2. Rock paper scissors

Rock paper scissors is a game that users can play against the computer. The user selects either rock, paper, or scissors, and the computer randomly chooses an option as well.
Rules:
•	Rock beats Scissors
•	Scissors beats Paper
•	Paper beats Rock

### 3. Historical events on this day

This section fetches historical events from Wikipedia based on the current date. When visiting the page, users can learn about historical events that happened on the same day in history. The information is fetched from Wikipedia's open API.

## How to use

1.	Home Page: From the homepage, users can select one of the three activities
2.	Historical Events: Historical Events section shows events from Wikipedia
3.	Rock paper scissors: Choose your option by clicking the image, and see if you can beat the computer
4.	Break Challenge: Click the button to get a random break challenge to complete during your break

## Technologies used

•	HTML: Used for the structure of the web pages
•	CSS: For styling the different elements
•	JavaScript: Handles the functionality of fetching data from the Wikipedia API, the game logic for Rock paper scissors, and randomizing the Break Challenge tasks
•	Wikipedia API: Fetches the "on this day" historical events

## Installation and setup

Installation and Setup
1.	Clone the repository:
bash
git clone https://github.com/your-username/break-room.git
2.	Navigate to the project folder:
bash
cd break-room
3.	Open the index.html file in your browser to start using the Break Room.

## Future improvements

•	Adding more games and activities to expand the range of break options.
•	Including user preferences to tailor the Break Challenge tasks to specific interests.
•	Implementing a scoring or tracking system for the Rock-Paper-Scissors game.
•	Improving the mobile responsiveness of the site.

