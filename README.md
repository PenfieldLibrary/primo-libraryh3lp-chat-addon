# primo-libraryh3lp-chat-addon

## Description

Add a  embedded chat widget
This is an add-on for the [libraryh3lp](https://libraryh3lp.com/) chat. It adds an embedded popup chat window to primo.

### Screenshot

![screenshot1](https://github.com/PenfieldLibrary/primo-libraryh3lp-chat-addon/raw/master/.docs/primo-chat-tab.jpg)

![screenshot2](https://github.com/PenfieldLibrary/primo-libraryh3lp-chat-addon/raw/master/.docs/primo-chat-window.jpg)

![gif](https://github.com/PenfieldLibrary/primo-libraryh3lp-chat-addon/raw/master/.docs/primo-chat-window.gif)


## Installation

1. Assuming you've installed and are using [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

2. Navigate to your template/central package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a package.json file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-libraryh3lp-widget --save-dev
    ```

## Usage

Once installed, inject `libraryh3lpWidget` as a dependency:

```js
let app = angular.module('viewCustom', ['libraryh3lpWidget'])
```

**Note:** If you're using the --browserify build option, you will need to first import the module with:

```js
import 'primo-explore-libraryh3lp-widget';
```

You'll need to configure the module by passing it an object as an angular `constant`:

| name | type | usage |
|------|-------------|--------|
|`mode`| string | `'script'` or `'iframe`'`, identifying the type of libraryh3lp insertion method to use (see libraryh3lp documentation). |
| `url` | string | the iframe or javascript url for your instance of libraryh3lp |
| `prompt` | string | the text for the prompt when closed |
| `icon` | object | defines the icon for the link. must be chosen from <https://material.io/icons/>. you need to specify both the name of the action "set" (see link) and the icon itself, in the form "ic_person_outline_24px". note that all icons do not work so you may have to experiment some |

### Example

#### `mode: iframe`
```js
app.constant('libraryh3lpWidgetConfig', {
  mode: 'iframe',
  url: 'https://us.libraryh3lp.com/chat/ask@chat.libraryh3lp.com?skin=1',
  prompt: 'Chat with us',
  icon: {
    set: 'communication',
    icon: 'ic_chat_24px'
  }
});
```

#### `mode: script`
```js
app.constant('libraryh3lpWidgetConfig', {
  mode: 'script',
  // 'http' or 'https' will be handled based on the protocol of your Primo server.
  url: 'libraryh3lp.com/js/libraryh3lp.js?7516',
  prompt: 'Chat with us',
  icon: {
    set: 'communication',
    icon: 'ic_chat_24px'
  }
});

app.run(runBlock);

runBlock.$inject = [
  'libraryh3lpInjectionService',
];

function runBlock(libraryh3lpInjectionService) {
  libraryh3lpInjectionService.injectScript();
}
```

### Styles

Finally you'll need to add the following lines to your CSS to stylize the colors:

```css
#chat_widget_icon svg {
  fill: yourTextColor;
}

.chat-tab{
  color: yourTextColor;
  background: yourBackgroundColor;
}
```

In order to add focus styling for better visual accessibility, you can use the following CSS to stylize this:

```CSS
.chat-tab:focus {
  -webkit-box-shadow: inset 0 0 0 2px yourFocusColor;
  box-shadow: inset 0 0 0 2px yourFocusColor;
  overflow: -moz-hidden-unscrollable;
}

.chat-close:focus {
    -webkit-box-shadow: inset 0 0 0 2px yourFocusColor;
    box-shadow: inset 0 0 0 2px yourFocusColor;
    overflow: -moz-hidden-unscrollable;
  }
}
```
