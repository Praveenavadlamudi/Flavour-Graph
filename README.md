# FlavourGraph — Intelligent Recipe Suggester

**FlavourGraph** is a full-stack application that recommends recipes based on the ingredients you have on hand. It uses graph theory, backtracking, and greedy algorithms to provide smart suggestions, identify ingredient gaps, and recommend substitutions.  

---

## Key Features

- **Ingredient-based recipe suggestions**: Enter available ingredients and get recipes that use them.  
- **Greedy and backtracking algorithms**: Efficiently find recipes with maximum ingredient matches or explore multiple possibilities.  
- **Ingredient gap analysis**: Highlights missing ingredients for each recipe.  
- **Substitution recommendations**: Suggests alternatives for missing ingredients.  
- **Full-stack implementation**:  
  - **Backend**: FastAPI handles API requests, recipe matching, and algorithm logic.  
  - **Frontend**: Simple HTML/CSS/JS interface for user interaction.  

---

## How It Works

1. **User Input**: Enter ingredients (comma-separated).  
2. **Algorithm Processing**:  
   - **Greedy**: Finds recipes with the highest number of matches.  
   - **Backtracking**: Explores multiple combinations to suggest all possible recipes.  
3. **Output**:  
   - Recipes you can make with available ingredients.  
   - Missing ingredients for each recipe.  
   - Suggested substitutions for missing items.  

---

## Technology Stack

- **Backend**: Python, FastAPI  
- **Frontend**: HTML, CSS, JavaScript  
- **Data Storage**: JSON files (for recipes and substitutions)  
- **Version Control**: Git, GitHub  

---

## Setup Instructions

### Backend

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
