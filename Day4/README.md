## 🎯 Task 1: Temperature Converter

**Task:** Build a temperature converter where Celsius and Fahrenheit inputs stay in sync

**Requirements:**
1. Create parent component `TemperatureApp.jsx`
2. Create two child components: `CelsiusInput.jsx` and `FahrenheitInput.jsx`
3. Lift temperature state to parent
4. When user types in Celsius, Fahrenheit updates automatically
5. When user types in Fahrenheit, Celsius updates automatically
6. Formula: F = (C × 9/5) + 32, C = (F - 32) × 5/9

**Sample Output:**
```
Temperature Converter

Celsius: [25]
Fahrenheit: [77]



## 🎯 Task 2: Color Picker

**Task:** Create a color picker where RGB sliders update a color preview

**Requirements:**
1. Create parent component `ColorPicker.jsx`
2. Create `RGBSlider.jsx` component (reusable for R, G, B)
3. Create `ColorDisplay.jsx` component to show the color
4. Lift RGB values state to parent
5. Each slider ranges from 0-255
6. Display the RGB values and hex code
7. Show color preview box

**Sample Output:**
```
🎨 Color Picker

Red: [255] ━━━━━━●
Green: [100] ━━●━━━━
Blue: [50] ━●━━━━━━

RGB: (255, 100, 50)
HEX: #FF6432
[Color Preview Box]
```

**Challenge:** Add a "Copy Hex" button that copies the hex code





## 🎯 Task 3: Todo List with Filter

**Task:** Build a todo list where adding/filtering is split between components

**Requirements:**
1. Create parent `TodoApp.jsx`
2. Create `TodoInput.jsx` - input field and add button
3. Create `TodoList.jsx` - displays todos
4. Create `TodoFilter.jsx` - buttons to filter (All, Active, Completed)
5. Lift todos state and filter state to parent
6. Each todo has: text, id, completed status
7. Implement add, toggle complete, and delete functionality

**Sample Output:**
```
📝 My Todo List

[Add new todo...] [Add]

Filter: [All] [Active] [Completed]

☑ Learn React (completed)
☐ Build Projects
☐ Get a Job

Total: 3 tasks | Completed: 1




## 🎯 Task 4: Nigerian States Quiz

**Task:** Build a quiz app where question display and answer checking are separate

**Requirements:**
1. Create parent `QuizApp.jsx`
2. Create `Question.jsx` - displays current question and options
3. Create `ScoreBoard.jsx` - shows current score
4. Create `AnswerFeedback.jsx` - shows if answer was correct/wrong
5. Have 5 questions about Nigerian states and capitals
6. Lift quiz state to parent (current question, score, answered)
7. When user selects answer, show feedback and move to next question
8. Show final score at the end

**Sample Output:**
```
Nigerian States Quiz
Score: 2/5

Question 3:
What is the capital of Lagos State?

○ Lagos Island
○ Ikeja
○ Victoria Island
○ Lekki

[Submit Answer]
```

**Challenge:** Add a "Restart Quiz" button at the end