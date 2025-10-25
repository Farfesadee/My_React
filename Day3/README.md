## **Part 8: Tasks**

## 🎯 Task 1: Simple Counter

**Task:** Create a counter that can increment, decrement, and reset

**Requirements:**
1. Create `Counter.jsx`
2. Use useState to manage count (starting at 0)
3. Create three buttons:
   - "+" to increment by 1
   - "-" to decrement by 1
   - "Reset" to set back to 0
4. Display the current count
5. Add CSS styling

**Sample Output:**
```
Count: 5
[+]  [-]  [Reset]
```

**Challenge:** Don't allow count to go below 0



## 🎯 Task 2: Like Button

**Task:** Create a like button that toggles between liked and unliked

**Requirements:**
1. Create `LikeButton.jsx`
2. Use useState to manage liked state (boolean)
3. Show different text/color when liked vs unliked
4. Display like count (starts at 0, increases/decreases on toggle)
5. Use emoji: ❤️ when liked, 🤍 when unliked

**Sample Output:**
```
[❤️ Liked] 1 like
(Click to toggle)
[🤍 Like] 0 likes
```

**Challenge:** Disable button for 1 second after clicking (prevent spam)



## 🎯 Task 3: Name Tag Generator

**Task:** Create an input that generates a name tag preview

**Requirements:**
1. Create `NameTag.jsx`
2. Use useState for name, title, and company
3. Create three input fields
4. Display a styled name tag showing all information
5. Name tag should update as user types

**Sample Output:**
```
[Input: First Name]
[Input: Job Title]
[Input: Company]

--- NAME TAG ---
Hello, my name is
CHIDI OKAFOR
Frontend Developer
Paystack
```

**Challenge:** Add a "Download" button that shows an alert with the formatted name tag


## 🎯 Task 4: Shopping Cart

**Task:** Build a simple shopping cart with add/remove functionality

**Requirements:**
1. Create `ShoppingCart.jsx`
2. Use useState for cart items array (start with 2-3 Nigerian products)
3. Each item should have: name, price, quantity
4. Show list of items with quantity and subtotal
5. Buttons to increase/decrease quantity for each item
6. Display total price at bottom
7. "Remove" button for each item

**Sample Output:**
```
🛒 Shopping Cart

Jollof Rice - ₦1,500 x 2 = ₦3,000
[+] [-] [Remove]

Plantain - ₦500 x 1 = ₦500
[+] [-] [Remove]

Total: ₦3,500
```

**Challenge:** Add a "Clear Cart" button that removes all items