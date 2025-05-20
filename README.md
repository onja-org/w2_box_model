# 📦 Lab : Box Model Basics

**Objective**:  
Understand how the CSS box model works and how each layer (content, padding, border, margin) affects element layout on the page.

## 🛠️ Project Setup  

- git clone [https://github.com/your-username/css-labs.git](https://github.com/onja-org/w2_box_model.git)
- `cd css-labs/box-model`
- Link the `CSS` in your `index.html` head section

    ```html
    <link rel="stylesheet" href="styles.css">
    ```

## Part 1: Concept Overview

The Box Model describes how every HTML element is structured in terms of spacing.
👉 Every part of a website is a box and those boxes are inside other boxes. This is how web pages are built.

For example:

- The whole page is **a big box** 📦.
- Inside that **box**, you have **smaller boxes** like the *header*, *main content*, and *footer*.
- Inside the *main content*, there are more boxes for `text, images, and buttons.`

Visualize the structure like this:

![alt text](public/box-model.png)

## Why This Is Important?

Once you understand that everything is a box, it becomes much easier to:

- Organize your content
- Add space between things
- Control how things look on the page

You’ll use **CSS** to style each box:

- **Content**: The actual content of the box (text, images, etc.)
- **Padding** adds space inside a box (around the content)
- **Margin** adds space outside a box (between boxes)
- **Border** is the line around a box
- **box-sizing** helps control how big the box is

## Example

Here’s how a simple page might look in HTML:

**HTML**  

```html
<body>
  <header>My Website</header>
  <main>
    <section>
      <h1>Welcome!</h1>
      <p>This is my website.</p>
    </section>
  </main>
  <footer>© 2025</footer>
</body>
```

👉 Note that each tag (`<header>`, `<main>`, `<section>`, `<footer>`) is a box.

CSS  

```css 
header, main, footer {
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
}
```

## Part 2: Try It Yourself

Now it's your turn! Let's create a styled box step-by-step so you can see and understand how the box model works in practice.

1. In your index.html file, add this div inside the `<body>`  

    ```html
    <div class="custom-box">
        My Custom Box
    </div>
    ```

This creates a simple box element with some text inside it.

2. In your styles.css, add the following CSS to style the box and highlight each layer:

    ```css
    .custom-box {
        width: 200px;
        height: 150px;
        padding: 20px;
        border: 5px solid #4A90E2;
        margin: 30px;
        background-color: #DFF0FF;
        box-sizing: content-box; /* Try switching this to border-box */
    }
    ```

**WHAT EACH LINE DOES**  

- `width & height`: Size of the content area.
- `padding`: Adds space inside the box between the content and border.
- `border`: Adds a visible edge around the content and padding.
- `margin`: Adds space outside the box, pushing it away from other elements.
- `background-color`: Fills the content + padding area with a color.
- `box-sizing`: Controls how the total size is calculated (content-box or border-box).

## Part 3:  Experimenting  

Try changing the following:

- **Padding**: Increase it to see how it pushes the content inward.
- **Border**: Make it thicker or change the color.
- **Margin**: Add multiple boxes and space them out.
- **Box-sizing**: Switch to border-box and see how the total size behaves differently.


## 🕵️‍♀️ Part 4: Explore With Dev Tools

Use your browser’s Developer Tools (Dev Tools) to see the box model in action.

1.**Open Dev Tools**

- Right-click on the box and choose Inspect
- Or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I (Mac)`  

2.**Locate the Box Model Panel**

- Go to the "**Elements**" tab
- In the "**Styles**" or "**Computed**" panel on the right, scroll down to the Box Model diagram.

3.**Hover and Observe**

- Hover your mouse over each part (***margin***, ***border***, ***padding***, **content**) in the box model diagram.
- Each section will highlight the corresponding space in the browser window.

4.**Live Edit and Test**

- Click on any number (e.g., padding, margin) and change it.
- See how the element visually expands, shrinks, or moves.

5.**Test box-sizing behavior**

In the Styles panel, switch:

```css
box-sizing: content-box;
```

to:

```css
box-sizing: border-box;
```

- Watch how the total width/height changes but the outer size stays the same with **border-box**.

6.**Experiment With Nested Boxes**

- Wrap your .**box-model-demo** in another `<div>` with its own styles.
- Inspect both to see how nesting affects layout and spacing.

## Part 4: Summary

- **Padding** pushes the content inward.
- **Border** wraps the padding and content.
- **Margin** pushes other elements away.
- **Dev Tools** is your best friend to visualize these layers in real time.
- **box-sizing** affects how width and height are calculated:
  - content-box: adds padding/border outside the size
  - border-box: includes padding/border inside the size
