# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/DarkMode%201440px.png)
![](./assets/images/LightMode%201440px.png)
![](./assets/images/Dark%20Mpode%20375px%201.png)
![](./assets/images/Dark%20Mode%20375px%202.png)
![](./assets/images/LightMode%20375px.png)
![](./assets/images/LightMode%20375px%202.png)
![](./assets/images/Dark%20Mpode%20375px%201.png)
### Links

- Solution URL: [](https://github.com/moinuddin2003/BrowserExtensionUIManager)
- Live Site URL: [](https://moinuddin2003.github.io/BrowserExtensionUIManager/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript
- Mobile-first workflow

### What I learned


```html
<!-- Used HTML very little — most of the work is done using the DOM -->
 ```
```css
body.light-mode .sun
{
    background: hsl(0, 0%, 93%)
}
```
```js
// This was my first time using innerHTML to dynamically generate and insert a full HTML structure into a card element using JavaScript:
card.innerHTML = `
      <div class="card-header">
        <img src="${extension.logo}" alt="${extension.name}" />
        <div>
          <h3>${extension.name}</h3>
          <p>${extension.description}</p>
        </div>
      </div>
      <div class="card-footer">
        <button class="remove-btn">Remove</button>
        <label class="switch">
          <input type="checkbox" ${extension.isActive ? "checked" : ""} />
          <span class="slider"></span>
        </label>
      </div>
    `;
```

### Continued development

When I started this project, I initially forgot that I already had a data.json file prepared. Instead of using that data dynamically, I first created all the cards manually using HTML and CSS. (You can still see the commented-out HTML code in index.html.)

Later, I realized the importance of using DOM manipulation and switched to generating the cards dynamically through JavaScript. This transition took a considerable amount of time, but it helped me better understand how to work with dynamic data and the DOM more effectively.

## Author

- **GitHub** – [moinuddin2003](https://github.com/moinuddin2003)
- **Frontend Mentor** – [@moinuddin2003](https://www.frontendmentor.io/profile/moinuddin2003)
- **LinkedIn** – [Muhammad Moinuddin](https://www.linkedin.com/in/muhammad-moinuddin-a84698204/)
