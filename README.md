🥗 Nutri-Scope – AI Food Allergy & Safety Scanner
Built for HackSutra 2025 (GDG On Campus SKNCOE – Build with Google)

Nutri-Scope is a smart web application that helps users instantly check whether a packaged food product is safe for them based on their allergies and dietary preferences using Google Gemini AI + OCR + Multilingual Audio Support.

🚨 Problem Statement

People with food allergies, diabetes, or strict diets (vegan, gluten-free, lactose-free) struggle to read and understand small ingredient labels, especially in different languages.

This can lead to:

Accidental consumption of harmful ingredients

Health risks

Poor accessibility for regional language users and visually impaired users

💡 Solution

Nutri-Scope allows users to:

Upload or capture an image of a food label

Automatically extract ingredients using OCR

Analyze them using Google Gemini AI

Match with user-selected allergies

Show SAFE / DANGER result

Translate output into Indian languages

Read the result aloud using AI Voice

✨ Features

📷 Image Upload / Camera Scan

🔍 OCR (Tesseract.js)

🧠 AI Analysis (Google Gemini 2.5 Flash)

🌐 Multi-language Support (All major Indian languages)

🔊 Text-to-Speech (Audio Output)

⚠ Allergy & Dietary Profile (Custom + Default)

🟢 Safe / 🔴 Dangerous Highlighting

🌍 Public Demo via ngrok

🛠 Google Technologies Used

Google Gemini API (Generative Language API)

Model: gemini-2.5-flash

Ingredient understanding

Allergy risk detection

Multilingual translation

Google Cloud AI Platform

Text-to-Speech (Web Speech API with Gemini Translation)

(Requirement: At least one Google Technology ✔️)

🧑‍💻 Tech Stack
Frontend

React (Vite)

JavaScript

CSS (Mobile-first UI)

Tesseract.js (OCR)

Backend

Node.js

Express.js

Google Gemini API
