# 🍳 ClaudeChef

ClaudeChef is a modern JavaScript web app that helps you discover creative recipes based on the ingredients you have at home.  
By leveraging advanced AI from Hugging Face, ClaudeChef turns your fridge leftovers into tasty meal ideas!

---

## ✨ Features

- 📝 **Ingredient-Based Recipe Search**  
  Enter what you have, and instantly get recipes you can make.

- 🤖 **AI-Powered Suggestions**  
  Uses the `mistralai/Mixtral-8x7B-Instruct-v0.1` model to generate unique, varied, and realistic recipes.

- ⚡ **Fast Modern Web App**  
  Built with JavaScript & Vite for a smooth, responsive user experience.

---

## 🛠 Technology Stack

| Layer        | Details                                              |
| ------------ | --------------------------------------------------- |
| **Frontend** | JavaScript, Vite, HTML, CSS                          |
| **AI Model** | Hugging Face [`mistralai/Mixtral-8x7B-Instruct-v0.1`](https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1) |
| **Integration** | Calls the Hugging Face Inference API to generate recipes |

---

## 🚀 How It Works

1. **Input Ingredients**  
   Type in ingredients like: eggs, tomatoes, cheese, bread

2. **AI Recipe Suggestion**  
    ClaudeChef sends your list to the AI, which returns a recipe.

3. **View Instructions**  
    See clear, markdown-formatted steps and quantities tailored to your ingredients.

---

## 📦 Example Output

> **Tomato Cheese Omelette Sandwich**
> - Lists all the Ingredients required o make the Recpie
> - With great detailed steps to prepare the recipe at home
> - Additional note to improve the Recpie

---

## 🛠 Getting Started

```bash
# Clone the repository
git clone https://github.com/mycode-name/ClaudeChef.git
cd ClaudeChef

# Install dependencies
npm install

# Start the development server
npm run dev

# Make sure to add ACCESS TOKEN (from hugging face) in .env file

