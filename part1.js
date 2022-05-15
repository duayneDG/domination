/*
### Part One - Querying DOM Elements

**These functions don't need to `return` anything.**

1. Write a function that puts a line through the text of the first `<li>` in the unordered "Arguments" list (`<ul`). Since this function always does the same thing, it requires no parameters!
*/


function lineThrough(){
    let firstListItem = document.querySelector('#thing-1')
    firstListItem.style="text-decoration: line-through";
    console.log(firstListItem)
    
}

/*
2. Now call it! The first list item (`<li>`) should get what's known as a "strikethrough" style.
*/
// lineThrough()

/*
3. Write a function that takes in a string representing an DOM element's `id` and a string representing a url. The function should set the image with that `id` to have that url as its image source.
*/
/*
   4. Now use that function to set the three images in the Image Area section to show three images of your choice. You'll need three separate calls to your function!
*/

function domStr(){
    let element1 = document.querySelector('#image-1')
    let element2 = document.querySelector('#image-2')
    let element3 = document.querySelector('#image-3')
    element1.src = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage_2x.png"
    element2.src = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage_2x.png"
    element3.src = "https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage_2x.png"
}
// domStr()
// /*

// 5. This next function also doesn't require any parameters: write a function that always removes the first `<li>` from the Arguments `<ul>`
// 6. Now use it to remove the first two items from that list. You'll need to call it twice!
// */

function removeFirstListItem(){
    parentNode = document.getElementById('arguments');
    firstChild = parentNode.firstElementChild;
    firstChild.remove() 
} 

// removeFirstListItem()
// removeFirstListItem()

/*
7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
/*
8. Try using it to change the size of any text on the page.
 */

function fontSize (userId, fontSize){
    let userID = document.querySelector('#'+`${userId}`)
    userID.style = `font-size: ${fontSize}px`

}
// fontSize("thing-c", 22) 
// fontSize("thing-1", 22) 





