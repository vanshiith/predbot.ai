Milestone 1:
https://docs.google.com/document/d/1YmYzJH4Rio1ynjkDg7YylAW6ziP6aygQpRAC_EQT120/edit?usp=sharing

Milestone 2:
https://docs.google.com/document/d/1uynBy1lRmLPqyC6qW7G1MLVvPTBw8Ko_KLh2K9suD6E/edit?usp=sharing

How to use?
you will need to install node.js and pnpm to run this on your local machine. 
figure out how to download that and then follow the steps below 

In the terminal of the directory run
cp .env.example .env.local

Create an account with Groq and then
Add GROQ_API_KEY='INSERT YOU API KEY'
to .env.local, then run:

create a file called ".env" and add:
NEXT_PUBLIC_API_KEY = ""
NEXT_PUBLIC_AUTH_DOMAIN =  ""
NEXT_PUBLIC_PROJECT_ID = ""
NEXT_PUBLIC_STORAGE_BUCKET = ""
NEXT_PUBLIC_MESSAGING_SENDER_ID= ""
NEXT_PUBLIC_APP_ID =  ""
to it

fill in the respective information from the Firebase project

This will install all the necessary packages: pnpm install
This will run the app: pnpm dev

the link to the GitHub repo:
https://github.com/vanshiith/predbot.ai

