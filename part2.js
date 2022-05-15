/*
### Part Two - DOM Elements as Function Parameters

**These functions will take in DOM elements as parameters. They also don't need to `return` anything.**

1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.
2. Let's use it! Create an image element in Javascript and pass it into your function.
3. Write a function that takes in an image element and modifies its height to be 30 pixels.
4. Let's use it. Query an image element and then pass it into the function.
5. Write a function that takes in an element and gives it the class `invisible`.
6. Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.) 
*/

let imageElement = document.createElement('img')

function appendImage(imageElement){  

imageElement.src = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage_2x.png";
imageElement.style = "height: 30px";

let appendImage = document.querySelector('ul');
let listItem = document.createElement('li')
appendImage.append(listItem)
listItem.append(imageElement)
}

// appendImage(imageElement)


let DomElement = document.querySelector('form')

function invisibleClass(DomElement){
    DomElement.style = "visibility: hidden";
    console.log(DomElement)
}

// invisibleClass(DomElement)


