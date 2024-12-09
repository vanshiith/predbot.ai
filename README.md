# 🤖 PredBot.ai  

**PredBot.ai** is a cutting-edge AI-driven chatbot tool that integrates **Llama 3 70B**, a state-of-the-art large language model, to fetch and present insights. It combines data from **TradingView** with advanced AI capabilities, delivering actionable predictions and insights directly to users.  

---

## 🚀 Features  

- **LLM-Powered Chat:** Powered by Llama 3 70B, offering accurate and contextual responses.  
- **Data Integration:** Fetches financial and trading data seamlessly from **TradingView**.  
- **User-Friendly Interface:** Designed for simplicity and efficiency.  
- **Real-Time Insights:** Provides up-to-date market trends and analysis.  

---

## 🛠️ Prerequisites  

To run PredBot.ai locally, ensure you have the following installed:  
1. [Node.js](https://nodejs.org/) (Latest stable version)  
2. [pnpm](https://pnpm.io/installation) (Package manager)  

---

## ⚙️ Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/vanshiith/predbot.ai.git  
   cd predbot.ai  
   ```  

2. Copy and set up environment files:  
   ```bash  
   cp .env.example .env.local  
   ```  

3. **Groq API Key Setup:**  
   - Create an account with [Groq](https://groq.com/) to obtain your API key.  
   - Add the following line to your `.env.local` file:  
     ```  
     GROQ_API_KEY='INSERT_YOUR_API_KEY'  
     ```  

4. **Firebase Configuration:**  
   - Create a Firebase project to retrieve your app credentials.  
   - Create a file called `.env` and add the following:  
     ```  
     NEXT_PUBLIC_API_KEY = ""  
     NEXT_PUBLIC_AUTH_DOMAIN = ""  
     NEXT_PUBLIC_PROJECT_ID = ""  
     NEXT_PUBLIC_STORAGE_BUCKET = ""  
     NEXT_PUBLIC_MESSAGING_SENDER_ID = ""  
     NEXT_PUBLIC_APP_ID = ""  
     ```  
   - Replace the placeholders with the respective values from your Firebase project.  

5. Install dependencies:  
   ```bash  
   pnpm install  
   ```  

6. Run the application:  
   ```bash  
   pnpm dev  
   ```  

---

## 📚 Milestones  

### [Milestone 1](https://docs.google.com/document/d/1YmYzJH4Rio1ynjkDg7YylAW6ziP6aygQpRAC_EQT120/edit?usp=sharing)  
Initial setup of PredBot.ai, including foundational features and core functionality.  

### [Milestone 2](https://docs.google.com/document/d/1uynBy1lRmLPqyC6qW7G1MLVvPTBw8Ko_KLh2K9suD6E/edit?usp=sharing)  
Enhancements to data integration, user interface, and expanded capabilities for presenting financial insights.  

---

## 🤝 Contributions  

We welcome contributions from the community! If you'd like to contribute:  
1. Fork the repository.  
2. Create a feature branch.  
3. Commit your changes.  
4. Submit a pull request for review.  

---

## 📄 License  

This project is licensed under the MIT License.  

---  
