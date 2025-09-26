# 🧪 Box Model Labs - Hands-On Practice

Welcome to the practical lab activities! Make sure you've read the [conceptual lesson](../README.md) first.

**Prerequisites**: Understanding of the box model theory from the main lesson.

---

## 📁 Project Structure

The project is organized as follows:
```
w2_box_model/
├── .gitignore           # Git ignore patterns
├── README.md            # Main project overview
├── lab/                 # Lab exercises (this directory)
│   ├── README.md        # Lab instructions (this file)  
│   ├── index.html       # Lab HTML file
│   └── styles.css       # Lab CSS file
└── lesson/              # Lesson materials
    └── README.md        # Lesson content
```

---

## 🛠️ Lab Setup

Before starting these hands-on activities, make sure you have:

1. **Project Files Ready**:
   - Lab files are in this `/lab` directory
   - You should have `index.html` and `styles.css` files in the lab folder
   - If not, create them in this directory

2. **Link Your CSS**:
   Add this to your `index.html` head section:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

3. **Basic HTML Structure**:
   Your `index.html` should have a basic structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Box Model Lab</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <!-- Lab content goes here -->
   </body>
   </html>
   ```

---

## Lab 1: Create Your First Styled Box

Now it's your turn! Let's create a styled box step-by-step so you can see and understand how the box model works in practice.

### Step 1: Add HTML
In your `index.html` file, add this div inside the `<body>`:

```html
<div class="custom-box">
    My Custom Box
</div>
```

This creates a simple box element with some text inside it.

### Step 2: Add CSS
In your `styles.css`, add the following CSS to style the box and highlight each layer:

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

### Step 3: Understand Each Property

**WHAT EACH LINE DOES**:

- `width & height`: Size of the content area
- `padding`: Adds space inside the box between the content and border
- `border`: Adds a visible edge around the content and padding
- `margin`: Adds space outside the box, pushing it away from other elements
- `background-color`: Fills the content + padding area with a color
- `box-sizing`: Controls how the total size is calculated (content-box or border-box)

---

## Lab 2: Experimenting With Properties

Try changing the following properties and observe the results:

### Experiment 1: Padding
- Change `padding: 20px;` to `padding: 40px;`
- Notice how it pushes the content inward and makes the box larger

### Experiment 2: Border
- Change `border: 5px solid #4A90E2;` to `border: 10px dashed red;`
- Make it thicker and change the style and color

### Experiment 3: Margin
- Add another box with the same class in your HTML
- Change `margin: 30px;` to `margin: 60px;`
- See how it affects spacing between boxes

### Experiment 4: Box-sizing
- Switch `box-sizing: content-box;` to `box-sizing: border-box;`
- Notice how the total size behaves differently

### Challenge: Multiple Boxes
Add this HTML to test multiple boxes:

```html
<div class="custom-box">Box 1</div>
<div class="custom-box">Box 2</div>
<div class="custom-box">Box 3</div>
```

Try different margin values to see spacing effects.

---

## Lab 3: Explore With Developer Tools

Use your browser's Developer Tools to see the box model in real-time.

### Step 1: Open Dev Tools
- Right-click on your box and choose "Inspect"
- Or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac)

### Step 2: Locate the Box Model Panel
- Go to the "**Elements**" tab
- In the "**Styles**" or "**Computed**" panel on the right, scroll down to find the Box Model diagram

### Step 3: Interactive Exploration
1. **Hover and Observe**:
   - Hover your mouse over each part (margin, border, padding, content) in the box model diagram
   - Watch how each section highlights in the browser window

2. **Live Edit and Test**:
   - Click on any number (e.g., padding, margin) in the Dev Tools
   - Change the values and see immediate visual feedback

3. **Test box-sizing behavior**:
   In the Styles panel, toggle between:
   ```css
   box-sizing: content-box;
   ```
   and:
   ```css
   box-sizing: border-box;
   ```
   - Watch how the total width/height changes with **border-box**

### Step 4: Advanced Inspection
**Experiment With Nested Boxes**:
- Wrap your `.custom-box` in another `<div>` with its own styles:
  ```html
  <div class="container">
      <div class="custom-box">Nested Box</div>
  </div>
  ```
- Add CSS for the container:
  ```css
  .container {
      background-color: #f0f0f0;
      padding: 20px;
      border: 2px solid #333;
  }
  ```
- Inspect both elements to see how nesting affects layout

---

## 🎯 Lab Challenges

### Challenge 1: Card Layout
Create a card-like component using the box model:

```html
<div class="card">
    <h3>Card Title</h3>
    <p>This is a card with proper spacing using the box model.</p>
</div>
```

Style it with appropriate padding, margins, and borders.

### Challenge 2: Different Box-Sizing
Create two identical-looking boxes but use different `box-sizing` values and adjust dimensions accordingly.

### Challenge 3: Responsive Spacing
Use percentage values for margins and padding to create responsive spacing.

---

## � Lab Summary

After completing these labs, you should understand:

- ✅ How to create and style boxes with CSS
- ✅ The visual impact of padding, border, and margin
- ✅ How `box-sizing` affects element dimensions
- ✅ How to use Developer Tools for box model inspection
- ✅ How box model properties interact with each other

### Key Insights from Practice:
- **Padding** increases the box size and pushes content inward
- **Border** wraps around padding and content
- **Margin** creates space between elements
- **Dev Tools** provide real-time visual feedback
- **box-sizing: border-box** is often more intuitive for layout

---

## 🚀 Next Steps

- Practice with more complex layouts
- Learn about CSS Grid and Flexbox (which build on box model concepts)
- Explore responsive design techniques
- Study CSS positioning and how it relates to the box model

**[← Back to Lesson](../README.md)**
    ```

## Part 1: Concept Overview

The Box Model describes how every HTML element is structured in terms of spacing.
👉 Every part of a website is a box and those boxes are inside other boxes. This is how web pages are built.

For example:

- The whole page is **a big box** 📦.
- Inside that **box**, you have **smaller boxes** like the *header*, *main content*, and *footer*.
- Inside the *main content*, there are more boxes for `text, images, and buttons.`

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

### Lab 2: Experimenting With Properties  

Try changing the following:

- **Padding**: Increase it to see how it pushes the content inward.
- **Border**: Make it thicker or change the color.
- **Margin**: Add multiple boxes and space them out.
- **Box-sizing**: Switch to border-box and see how the total size behaves differently.

### Lab 3: Explore With Developer Tools

Use your browser’s Developer Tools (Dev Tools) to see the box model in action.

1. **Open Dev Tools**

- Right-click on the box and choose Inspect
- Or press `Ctrl + Shift + I` (Windows/Linux) or `Cmd + Option + I` (Mac)  

2. **Locate the Box Model Panel**

- Go to the "**Elements**" tab
- In the "**Styles**" or "**Computed**" panel on the right, scroll down to the Box Model diagram.

3. **Hover and Observe**

- Hover your mouse over each part (***margin***, ***border***, ***padding***, **content**) in the box model diagram.
- Each section will highlight the corresponding space in the browser window.

4. **Live Edit and Test**

- Click on any number (e.g., padding, margin) and change it.
- See how the element visually expands, shrinks, or moves.

5. **Test box-sizing behavior**

In the Styles panel, switch:

```css
box-sizing: content-box;
```

to:

```css
box-sizing: border-box;
```

- Watch how the total width/height changes but the outer size stays the same with **border-box**.

6. **Experiment With Nested Boxes**

- Wrap your `.custom-box` in another `<div>` with its own styles.
- Inspect both to see how nesting affects layout and spacing.

---

## 📝 Summary

- **Padding** pushes the content inward.
- **Border** wraps the padding and content.
- **Margin** pushes other elements away.
- **Dev Tools** is your best friend to visualize these layers in real time.
- **box-sizing** affects how width and height are calculated:
  - content-box: adds padding/border outside the size
  - border-box: includes padding/border inside the size
