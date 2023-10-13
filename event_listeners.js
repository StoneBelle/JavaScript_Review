// EVENT LISTENERS
// methods that attach "event handlers" (e.g. "click"), to a specified HTML element or DOM object (e.g window object)
// you can add more than one event handler to an element without overwriting existing event handlers
// makes it easier to control how the event reacts to bubbling

//SYNTAX
// addEventListener(typeofevent, function)
// removeEventListener() removes an event listener


// 7 MAIN TYPES OF EVENT LISTENERS 
// 1) User Interface Event listeners
// these events occur with browser window as opposed to HTML page
// i.e. the event listners are attached to window object not document object

// load, unload, error, resize, scroll


// 2) Focus & blur Event Listeners
// occur with HTML elements that gain/lose focus when interacted with
// typically used in forms 

// focus, blur, focusin, focusout


// 3) Mouse Event Listners
// occur when the user uses the mouse to interact
// uses the bubbling approach

//  click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove


// 4) Keybaord Event Listeners
// occur when the user uses the keyboard to interact

// input, keydown, keypress, keyup

// 5) Form Event Listeners
// common while using forms on a webpage

// submit, change, input

// 6) Mutation Events & Observers 
// As the structure of the DOM tree changes, it triggers a "mutation event" 
// i.e. am addition or removal of a DOM node through your script
// these have an alternative that will replace them, which are "mutation observers"

// DOMNodeInserted, DOMNodeRemoved, DOMSubtreeModified, DOMNodeInsertedIntoDocument, DOMNodeRemovedFromDocument


// 8) CSS Event Listeners
// trigger when the script encounter a CSS element 
// allows JS to work more easily with CSS

// animationstart, animationiteration, animationend


// For example on event listeners, see DRUM KIT repo.
