# SpiritTail 🍸

A dynamic cocktail recipe application built with React, inspired by real barback experience. Browse spirits, discover cocktails, and view detailed ingredient instructions.

![App Demo](https://media.giphy.com/media/DahK8I5UbqwOTE9mVw/giphy.gif)

## 🚀 Features

- **Spirit Selection:** Choose your base spirit (Vodka, Gin, Rum, Tequila, Whiskey).
- **Cocktail Browser:** View a curated list of cocktails for each spirit.
- **Recipe Details:** Step-by-step instructions and ingredient lists for every drink.
- **Fast & Responsive:** Built with Vite for lightning-fast performance and Bootstrap for responsiveness.

## 🛠️ Tech Stack

- **Frontend:** React 18
- **State Management:** Redux + Redux Thunk
- **Bundler:** Vite
- **Styling:** Bootstrap 5 + Custom CSS
- **Routing:** React Router v5

## 💻 Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dsimp/SpiritTail-1.git
    cd SpiritTail-1
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # Note: If you encounter peer dependency warnings, use:
    npm install --legacy-peer-deps
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deployment (Netlify Drop)

This project is configured for **Manual Deployment** via Netlify Drop (most reliable method).

1.  **Build the project:**
    ```bash
    npm run build
    ```
    This creates a `dist` or `build` folder with your production assets.

2.  **Deploy:**
    *   Go to [Netlify Drop](https://app.netlify.com/drop).
    *   Drag and drop the `build` folder onto the page.
    *   Netlify will instantly publish your site.

> **Note:** The `public/_redirects` file is included to ensure client-side routing works correctly on Netlify.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
