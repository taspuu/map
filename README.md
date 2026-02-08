---
marp: true
---

# Campus Navigation Web App Documentation

## Project Overview
This project is a **Campus Navigation Web Application** that allows users to:
- View the campus map
- Select buildings and floors
- See rooms, offices, and sections
- View floor layouts
- Navigate between floors easily

The project is built using:
- HTML
- CSS
- JavaScript

---

## Features

### 1. Interactive Campus Map
- Displays the campus layout
- Allows building selection
- Opens a modal with floor options

### 2. Floor Navigation
Each floor page includes:
- Room list
- Visit buttons
- Floor layout image
- Navigation buttons

### 3. Floor Layout Viewer
Users can:
- Click **View Floor Layout**
- Show or hide the diagram

### 4. Responsive Design
The website adapts to:
- Desktop
- Tablet
- Mobile devices

---

## Project Structure

```
project-folder/
│
├── index.html          # Main campus map page
├── floor1.html         # First floor page
├── floor2.html         # Second floor page
├── style.css           # All styling
├── background.jpg      # Background image
├── 1st floor.png       # Floor layout image
└── README.md           # Documentation
```

---

## Technologies Used

### HTML
Used for:
- Page structure
- Navigation buttons
- Room cards
- Modal windows

### CSS
Used for:
- Layout
- Colors
- Animations
- Responsive design
- Buttons and cards

### JavaScript
Used for:
- Opening and closing modals
- Toggling floor layout display

Example:
```javascript
function toggleMap(btn) {
  const map = document.getElementById("mapBox");
  map.classList.toggle("open");
}
```

---

## How the System Works

### Step 1: Open Index Page
The user sees:
- Campus background
- Explore button

### Step 2: Choose Building/Floor
A modal appears showing:
- Floor boxes
- Navigation buttons

### Step 3: Open Floor Page
The user can:
- See rooms
- Click Visit
- View layout
- Navigate floors

---

## UI Components

### Room Card
Each room includes:
- Room number
- Description
- Visit button

### Navigation Buttons
- Back to campus
- Next floor
- Previous floor

### Floor Layout Button
- Expands image
- Smooth animation

---

## Responsive Behavior

Screen Width | Layout
-------------|--------
Desktop | 3 columns
Tablet | 2 columns
Mobile | 1 column

---

## How to Run the Project

1. Download or clone the project
2. Open folder
3. Double-click `index.html`

No server required.

---

## Future Improvements

Possible enhancements:
- Real map integration
- Room search feature
- Admin panel to edit rooms
- Database integration
- Indoor navigation system

---

## Author
Fahidul Islam Taspi(12411007)

