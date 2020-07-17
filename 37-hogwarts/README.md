# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

### Questions / Concerns from Pairing
- State in Container, trying to pass to the Card as props and saving into state there
  --- if something already exists somewhere in state in your WHOLE APPLICATION, do not save it somewhere else in state 
- Filtering by greased & sorting combo
- Extra array on state for filter / sort? 
  --- Minimum state info; ie if we have an array of hogs on state, we don't need to have another
- How many event handlers should we have? Separate for sort and filter? 

## Project goals:

* on page load, fetch all of the hog tiles 
* create an index displaying all hog tiles
* render each hog name and picture in a tile
* show the hog's details upon a user's click
    state for showDetails
* filter the hogs that are greased
* sort the hogs based on name
* sort the hogs based on weight 




* Tech Debt: weird behavior with the wrong cards staying details open when we switch greased

* BONUS: allow users to hide hogs (not delete them, just hide them from view!)
* BONUS: bring in pig gifs from an API
* BONUS: implement [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog

## Project requirements:

* functional and container components (at least one of each, likely you'll have several of each)
* components using state and props
* re-renders based on client-side events

## What we have so far:

* a json file containing all our hog data. send your fetch request to `http://localhost:3001/hogs`
* a folder of hog images
* a functional nav component rendered in our App.js

## Trying to figure out where to start?

There are lots of ways to build this project, and while some ways are better than others, there is no 'right' way! Start by thinking about which components you'll be building and whether they'll be presentational or container components.

Once you've decided on your components, use the MVP (minimum viable product) approach. What's the simplest thing we can render to the page? Perhaps a paragraph tag displaying each hog's name? Which components would this involve?

When building your filter and sort functionalities, consider what you want to store in state and where that state should be stored. How can a child component pass information up to its parent component? Think about what needs to happen upon each index rerender. What if a user filters out ungreased pigs, and then wants the remaining pigs sorted by weight?

Be sure to use good programming practices, such as clear variable names and single responsibility functions. React apps can quickly become tangled and hard to debug if built without best practices!

## Trying to get the Hog image to render?

Below is an example of how you might create an image for Augustus Gloop. Notice a trend between the pig name and the image name. 
```
render(){
  return  <img src={`/hog-imgs/augustus_gloop.jpg`} />
}

```


## Styling

We've imported the Semantic library to keep your piggies looking pretty. To keep your hogs in columns, make sure their parent container has the class "ui grid container". The children in the columns should have class "ui eight wide column". (Semantic uses a grid with a default of 16 units wide, so 8-wide will make two columns and 4-wide will make 4 columns.) Semantic will take care of assigning the columns for you. You can also try implementing [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog.
