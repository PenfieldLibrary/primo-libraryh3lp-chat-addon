# primo-libraryh3lp-chat-addon

## Description

Add a  embedded chat widget
This is an add-on for the [libraryh3lp](https://libraryh3lp.com/) chat. It adds an embedded popup chat window to primo.

### Screenshot

![screenshot1](https://github.com/PenfieldLibrary/primo-libraryh3lp-chat-addon/raw/master/.docs/primo-chat-tab.jpg)

![screenshot2](https://github.com/PenfieldLibrary/primo-libraryh3lp-chat-addon/raw/master/.docs/primo-chat-window.jpg)

![gif](https://github.com/PenfieldLibrary/primo-libraryh3lp-chat-addon/raw/master/.docs/primo-chat-window.gif)


## Installation

1. Replace the custom.js file in your primo customization package.

2. If you are adding to an existing custom.js file copy only the follow from the src file:
    ```
    var popupDelaySeconds = 60;

    // START - Chat widget
    .
    .
    .
    // END - Chat widget
    ```
3. copy the css code into your custom1.css file in your primo customization package css file:
    ```
    /*-----------  chat tab  ---------------------*/
    .
    .
    .
    /*----Ask a Librarian Chat box-----*/
    .
    .
    .
    ```

## Adding your libraryh3lp credentials and customizing the js file

Update all URL instances.<br/>Replace the jid/xxxx with your institution's name for libraryh3lp.<br/>
Example - jid/penfield_reference:

```js
url: 'https://libraryh3lp.com/presence/jid/penfield_reference/chat.libraryh3lp.com/js?cd=show_presence'
```

Replace the libraryh3lp URL with your institution's libraryh3lp URL.
```js
 src="https://us.libraryh3lp.com/chat/penfield_reference@chat.libraryh3lp.com?skin=11342"
```

For the chat tab text, customize "Ask a Librarian" and "Chat with a Librarian" with your own labels.
```js
if(response.data.match("unavailable")){
   $scope.myAskChatLabel =  "Ask a Librarian";
 }else{
   $scope.myAskChatLabel = "Chat with a Librarian";
 }
```

### CSS Styles customization
Finally edit the CSS to stylize the colors, size and location:

#### `chat tab`
This hadles the tab 'button'
```css
div.trigger.right {
	  position:fixed;
      right:120px;
	  top: 550px !important;	 
      text-decoration: none;
      display: inline-block;  
	  background: #235937;
	  border: 1px solid #235937;
	  border-bottom: 0;
	  border-radius: 0.5em 0.5em 0 0;
	  -moz-border-radius: 0.5em 0.5em 0 0;
	  -webkit-border-radius: 0.5em 0.5em 0 0;
	  bottom: 0px;
	  color: #FFFFFF;
	  cursor: pointer;
	  line-height: 150%;
	  padding: 3px 10px 3px 10px;
	  position: fixed;
	  text-align: center;
	  z-index: 1000;
	  min-width:10em;
	  font-size:18px;
	  letter-spacing: 1px;
	  font-family: Helvetica;
}

```

#### `Ask a Librarian Chat box`
This customizes the iframe where the chat box lays on. It does not change the css for your  chat box
```css
.libraryh3lp {
	position:fixed;
     right:120px;
	 top: 250px !important;	 
     text-decoration: none;
     display: inline-block;  
	  background: #235937;
	  border: 1px solid #235937;
	  border-bottom: 0;
	  border-radius: 0.5em 0.5em 0 0;
	  -moz-border-radius: 0.5em 0.5em 0 0;
	  -webkit-border-radius: 0.5em 0.5em 0 0;
	  bottom: 0px;
	  color: #FFFFFF;
	  cursor: pointer;
	  line-height: 150%;
	  padding: 3px 10px 3px 10px;
	  position: fixed;
	  text-align: center;
	  z-index: 1000;
	  min-width:10em;
	  font-size:18px;
	  letter-spacing: 1px;
	  font-family:  Helvetica;
}
```
