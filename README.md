# Eco-Adventure Experience Blog

## Purpose
The **Eco-Adventure Experience Blog** is designed to showcase eco-friendly travel adventures like mountain treks, ocean dives, and other sustainable travel experiences. Users can explore various eco-adventures, learn about the details of each experience, and engage with expert consultants to plan their next eco-friendly adventure. The platform also includes user profiles with login and registration functionality to enhance engagement.

## Live URL
[Eco-Adventure](https://adventure-hub-site.web.app/)

## Key Features
- **Browse Eco-Adventures**: Explore different eco-friendly travel experiences, such as treks, dives, and other adventures.
- **Detailed Adventure Pages**: Each eco-adventure option comes with detailed descriptions, images, and guides to help users understand the experience.
- **Expert Consultations**: Users can consult experts in various eco-adventure fields to get personalized recommendations or advice.
- **User Profiles**: Users can create accounts to save their favorite adventures, track their planned trips, and manage their details.
- **Login and Registration**: Secure login and registration functionality to personalize the user experience.
- **Responsive Design**: The website is fully responsive and optimized for all screen sizes.
- **Animations**: Smooth animations and transitions to enhance the user experience using Lottie files.
- **Interactive Components**: Features like image sliders, modals, and interactive forms to improve user interaction.

## Technologies Used
- **React**: JavaScript library for building the user interface.
- **React Router**: For routing between different pages in the application.
- **Firebase**: For user authentication and data storage.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: A plugin for Tailwind CSS to speed up UI development.
- **Swiper**: For implementing image sliders and carousels.
- **AOS**: Library for scroll animations.
- **React Icons**: Icons for the user interface.
- **Lottie**: For implementing animations from Lottie files.




---

## Running the Project Locally

### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can check if it's installed by running `node -v` in your terminal. If it's not installed, download it from the [official Node.js website](https://nodejs.org/).
- **Bun**: If you are using Bun as your package manager, ensure it's installed. You can check by running `bun -v`. If it's not installed, you can follow the [installation guide](https://bun.sh/).

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rimasultana/Eco-Adventure
   ```
   
2. **Navigate to the Project Folder**:
   After cloning the repository, navigate into the project directory:
   ```bash
   cd Eco-Adventure
   ```

3. **Install Dependencies**:
   Depending on your package manager (npm, yarn, or Bun), install the necessary dependencies:

   - If using **npm**:
     ```bash
     npm install
     ```
   - If using **yarn**:
     ```bash
     yarn
     ```
   - If using **Bun**:
     ```bash
     bun install
     ```

4. **Set up Firebase Configuration**:
   - Create a Firebase project if you haven't already by following the [Firebase setup guide](https://firebase.google.com/docs/web/setup).
   - Create a `.env` file in the root directory of your project and add the Firebase configuration:

     ```env
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

5. **Run the Project Locally**:
   Once everything is set up, you can start the development server:
   
   - If using **npm**:
     ```bash
     npm run dev
     ```
   - If using **yarn**:
     ```bash
     yarn dev
     ```
   - If using **Bun**:
     ```bash
     bun run dev
     ```

   This will start the project and open it in your default web browser, usually at `http://localhost:5173`.

6. **Access the Application**:
   Open your browser and go to `http://localhost:5173` to view the application running locally.

---
