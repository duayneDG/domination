/*
### Part Three - Creating DOM Elements

**These functions will `return` new DOM elements.**

1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.
2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
*/

let text = "here we go again."

function returnListItem(text){
    let ListItem = document.createElement('li')
    ListItem.innerText = text 
    let list = document.querySelector('ol')
    list.appendChild(ListItem)
}

// returnListItem("hello family")

/*
3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.
4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).
*/

function headerChange(headerSize, text){
    let headerLocation = document.querySelector('div')
    let headerElement = document.createElement(`h${headerSize}`)
    console.dir(headerElement)

    headerLocation.appendChild(headerElement)
    headerElement.innerText = text;

}

headerChange(3, "hello again")