# Mod 4 Practice Code Challenge: Sushi Saga

### Reflections from Mock CC / questions / issues 
- How to determine what state (and where?)
- Functional v Class component
      If it doesnt need state (or lifecycle), keep it functional
- constructor v. es6 syntax
      Know consturctor for work; use es6 on new projects
- strategy for empty plates on table 
      Array for all the eaten sushi 
- best practices for pagination 
    - use API request to paginate if there's 10K+ instances in your DB 
    - 1K or less, paginate on frontend with startInd in state 


Welcome to Sushi Saga, where your journey to sushi is only just beginning!

We've had a bit of trouble with our patented Sushi Saga conveyor belt system, so before you can eat, you're going to have to help us get it working.

**Here's what it should look like:**

![Sushi Saga](https://raw.githubusercontent.com/learn-co-curriculum/React-Practice-Code-Challenge/master/sushi-saga-demo.gif)

**Doesn't that look delicious?!**

## Setup

### Server

To get you going, we've got a backend just chock full of sushi just waiting to be eaten! To get get these guys, you're going to have to do the follow:

1. Navigate to `sushi-saga-client` and run `json-server --watch db.json`
2. Navigate to `http://localhost:3000/sushis` to confirm delivery of sushi!


### Client

Just as all good sushi needs a firm base of delicious rice, we've given you quite a bit of code to start off your frontend!

This will be located within the `sushi-saga-client` directory of this repo. Inside are all the components you'll need, as well as instructions as to where and how to render those components properly.

The component hierarchy should be as follows:

- `App` is parent to both `SushiContainer` and `Table`
- `SushiContainer` is parent to both `Sushi` and `MoreButton`

                App
            /           \
    SushiContainer      Table
/|\           \
Sushis      MoreBtn

eaten:true/false

Be sure to read all of the notes in the all of the components before getting started! They will give you clues as to how and where to manage `state` and `props`

## Deliverables

Inspectors will be coming by to check that our patented Sushi Saga conveyor belt is working properly! Oh no! They will be checking the following:

0. Map our the hierarchy 
1. Sushi list is properly received from the server
2a. Render all ze sushi
2b. Only 4 sushi are rendered at a time
3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.



4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
...how? strategies!
- boolean state in `Sushi` component ===> would require refactor 
- set img_url to `""` to sushi when eaten 


- eatenSushi array in state in  App component  FIRST
- add an property `{eaten: true/false}` to each sushi object TIMEPERMITTING



5. We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the `Table` component
6. No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance

### Bonus

If and only if you have time, you may work on the following:

1. SushiWallet! Add a form for customers to add more money to their balance
2. Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!
3. Anything else!

**Note:** If at the end of the challenge you have achieved all the functionality required but the style looks off, this is okay!

