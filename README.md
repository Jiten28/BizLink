# BizLink — Business Buyer & Seller Matching Platform

## 📌 Overview
BizLink is a web application built as part of the Caprae Capital frontend assignment.  
It connects **business buyers** and **sellers** through an intuitive, match-first platform — inspired by social matchmaking apps but optimized for acquisitions.

This project demonstrates:
- Modern **React + Vite** development
- Component-based UI architecture
- **Dark/Light theme** with Tailwind CSS
- Role-specific onboarding flows (Buyer / Seller)
- **Buyer profile browsing** for sellers
- **AI-powered document analysis** for due diligence

---

## 🎯 Features
### 🔹 Role-Based Onboarding
- **Buyer Flow**: Onboarding form → Dashboard → Data Room
- **Seller Flow**: Onboarding form → Browse Buyers → Accept match → Dashboard

### 🔹 Buyer Profiles
- Glanceable cards with:
  - Budget / Revenue range
  - Industries
  - Location
  - Verification badge
  - Compatibility score

### 🔹 Dashboard
- Step-by-step **Deal Process** visualization
- **Data Room** for pasting/uploading TXT/PDF documents
- **AI Panel** that summarizes:
  - Key points
  - Risks
  - Opportunities

### 🔹 Theme Support
- Dark & Light themes with dynamic logo switching

---

## 🛠️ Tech Stack
- **React 19** + **Vite**
- **Tailwind CSS**
- **pdfjs-dist** (PDF parsing)
- **JavaScript (ES6+) with JSX**
- **Vercel** for deployment

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Jiten28/BizLink.git
cd bizlink
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run in Development

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 📂 Screenshots to Add

Once deployed on **Vercel**, take clean screenshots and place them in a `/screenshots` folder in the repo.
Update this README with the correct file paths.

Recommended screenshots:

1. **Landing Page** — Role selection
    * Dark Theme
     <img width="1863" height="886" alt="image" src="https://github.com/user-attachments/assets/88075c60-dc30-4f04-8073-4d436256f864" />

    * Light Theme
     <img width="1861" height="881" alt="image" src="https://github.com/user-attachments/assets/67c57710-c717-4ae0-83c8-84649b56e8ee" />


2. **Buyer Onboarding Form**

     <img width="1866" height="885" alt="image" src="https://github.com/user-attachments/assets/eb5cb4bc-8c47-4a30-a33d-f799d93bca94" />

3. **Seller Browse Buyers**

    <img width="1864" height="878" alt="image" src="https://github.com/user-attachments/assets/eb45bc5c-2f62-4c05-adb6-e454893648f0" />

4. **Buyer Dashboard**

    <img width="1865" height="880" alt="image" src="https://github.com/user-attachments/assets/9e8da556-4e2b-40ff-ad59-b8eaa83a2245" />

5. **Data Room with AI Panel Open**

    <img width="1855" height="874" alt="image" src="https://github.com/user-attachments/assets/e5068df0-5272-49e6-ab68-50faebec8849" />



---

## 📦 Deployment

This project is deployed on **Vercel**.
To deploy:

1. Push your code to GitHub
2. Import repo in Vercel
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy and share your live link

---

## 📄 License

This project was created as part of the **Caprae Capital Frontend Assignment**.

All rights reserved by the author(Jiten Kumar).

---
