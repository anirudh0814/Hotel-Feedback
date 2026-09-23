# Hotel Feedback Classifier

A Generative AI and NLP-powered web app that classifies open-ended hotel reviews into key categories such as **Facilities**, **Service**, and **Administration** in real time.

---

## ⚠️ Note on the Original Live Demo Link
The external Netlify demo link (`https://tourmaline-florentine-2b495a.netlify.app/`) hosted by the original author is currently returning **HTTP 429 (Bandwidth Quota Exceeded / Site Paused)** because the original Netlify free-tier bandwidth limit was reached.

To run or deploy your own working version, follow the quick steps below.

---

## 🚀 Quick Run (Instant - No Node.js / npm Required)

You can launch and use the full interactive web application immediately by simply opening `Hotel-Feedback-Classifier.html` in your browser:

1. Double-click [Hotel-Feedback-Classifier.html](./Hotel-Feedback-Classifier.html) in your file manager (Finder), or
2. Run in terminal:
   ```bash
   open Hotel-Feedback-Classifier.html
   ```
   Or start a local Python server:
   ```bash
   python3 -m http.server 8080
   ```
   Then visit `http://localhost:8080/Hotel-Feedback-Classifier.html`.

---

## 💻 Running the Full React + Vite App (with Node.js)

1. Navigate to the web app directory:
   ```bash
   cd "gen ai web codes"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying Your Own Live Web App (Free)

### Option 1: Netlify Drop (Drag & Drop in 30 Seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop) (log in with a free Netlify account).
2. Run `npm run build` inside `gen ai web codes` (or drop the folder containing `Hotel-Feedback-Classifier.html` renamed to `index.html`).
3. Drag and drop the `dist` folder into the Netlify Drop box.
4. Your new, permanent live web app URL will be generated instantly!

### Option 2: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or connect your GitHub repository to [Vercel](https://vercel.com).
2. Deploy with a single command:
   ```bash
   cd "gen ai web codes" && npx vercel
   ```

---

## 💡 Features

- **Real-Time Classification**: Automatically detects whether customer feedback concerns *Facilities*, *Service*, or *Administration*.
- **Confidence Scoring**: Computes match strength and confidence score percentage.
- **Interactive Insights Dashboard**: Visual breakdown and percentage distribution of all feedback categories.
- **Search & Filter History**: Search by keywords or filter by category.
- **Dual AI Engine**: Built-in instant NLP classification + optional OpenAI GPT-3.5 API integration.

---

## 🛠️ Tech Stack

| Layer       | Technology            |
|-------------|------------------------|
| Frontend    | React 18, Tailwind CSS |
| Icons       | Lucide React           |
| Build Tool  | Vite                   |
| NLP Engine  | Hospitality Classifier / OpenAI GPT-3.5 |
| Notebook    | Python, Scikit-learn, MultinomialNB |
