# Hotel Feedback Classifier

A Generative AI and NLP-powered web application that classifies open-ended hotel reviews into key categories such as **Facilities**, **Service**, and **Administration** in real time.

---

## 🌐 Live Web App

👉 **[https://hotel-feedback-1.vercel.app](https://hotel-feedback-1.vercel.app)**

---

## 💡 Features

- **Real-Time Classification**: Automatically detects whether guest feedback concerns *Facilities*, *Service*, or *Administration*.
- **Confidence Scoring**: Computes match strength and dynamic confidence score percentage.
- **Interactive Insights Dashboard**: Visual breakdown, statistics cards, and percentage distribution across all feedback categories.
- **Search & Filter History**: Search feedback by keywords or filter by category.
- **Dual AI Engine**: Built-in instant NLP classification engine + optional OpenAI GPT-3.5 API integration.
- **Modern Responsive UI**: Built with React 18, Vite, and Tailwind CSS.

---

## 🛠️ Tech Stack

| Layer       | Technology                             |
|-------------|----------------------------------------|
| Frontend    | React 18, Tailwind CSS, Lucide React   |
| Build Tool  | Vite                                   |
| Hosting     | Vercel                                 |
| NLP Engine  | Hospitality Classifier / OpenAI API    |
| Notebook    | Python, Scikit-learn, MultinomialNB    |

---

## 🚀 Running Locally

### Option 1: Instant Standalone (No Node.js / npm Required)
Double-click `Hotel-Feedback-Classifier.html` in your file manager to open and run the app directly in any browser.

### Option 2: Full Vite + React App (with Node.js)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

---

## 📓 Machine Learning Colab Notebook

The Jupyter notebook containing the Python Scikit-Learn MultinomialNB classifier and training dataset is available in this repository:
- [`Genai_project.ipynb`](./Genai_project.ipynb)
