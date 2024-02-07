[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wbN9vHn8)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13595043)

# DGL 113 2024WI Assignment #4

Preview the docs/index.html file with a web browser to get a general idea about the webpage layout and its functionality, then complete the following tasks.

Create a new file in the `docs` folder called `app.js`.

At the top of the `docs/app.js` file, add the `use strict` directive:

```javascript
'use strict';
```

Add a `<script>` element to the `index.html` file to include the `app.js` script.
Place the `<script>` element just before the closing `</body>` tag just like
the script element that is used to include the `main.js` script.

Create the following functions:

- `addItem(quantity,size,description)`: adds an item to the drink order.
- `deleteItem(index)`: deletes the item at position `index` in the drink order.
  `index` is 0-based, so 0 means the first item, 1 means the second item, and
  so on.
- `getOrderTotal()`: calculates the total cost of the drink order.
  Short, Tall, Grande, and Venti coffees cost 2.99, 3.19, 3.49 and 3.99 respectively.
  Short, Tall, Grande, and Venti teas cost 2.85, 3.05, 3.25, and 3.50 respectively.

You should maintain all informaiton about the order using several parallel arrays, i.e., the item at the same index position of different arrays represents a property of the same order such as quantity, size, and description.
The `getOrderTotal()` function should be implemented by iterating over
those arrays.

You may have to create some global variables and/or constants to solve this problem.

HINT: the parameter values passed into addItem() function are directly extracted from the webpage dropdown boxes without processing. You may need to extract the information you need before pushing them on to their respective arrays, or do that in the getOrderTotal() function.

NOTE: Only modify the `docs/app.js` and `docs/index.html` files. Do not make changes to any other files.
