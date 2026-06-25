# Trainer Portfolio

A fully responsive portfolio website built for a certified fitness coach, showcasing services, client success stories, and providing an easy way for potential clients to get in touch.

## 🌐 Live Demo

**Website:** [https://trainer-portfolio-xi.vercel.app/](https://trainer-portfolio-xi.vercel.app/)

---

## 🚀 Tech Stack

- **React (Vite)** — Component-based UI architecture
- **React Router** — Client-side routing between the home page and program detail pages
- **Plain CSS** — Custom mobile-first design system built with CSS variables (no CSS framework)
- **lucide-react** — UI icon library
- **Simple Icons (Custom SVGs)** — Facebook, Instagram, and TikTok brand icons
- **Vercel** — Deployment and hosting

---

## ✨ Features

### Responsive Design

- Mobile-first development approach
- Tablet breakpoint: **768px**
- Desktop breakpoint: **1024px**
- Optimized experience across all screen sizes

### Mobile Navigation

- Animated hamburger menu
- Smooth open/close transitions
- Fully responsive navigation experience

### Cross-Route Anchor Navigation

- Navbar links correctly scroll to sections on the home page
- Works even when navigating from program detail pages
- Implemented using:
  - `useNavigate`
  - `useLocation`
  - `useEffect`

### Program Detail Pages

Dedicated pages built with React Router:

- 1-on-1 Coaching
- Remote Coaching
- Nutrition Guidance

All pages share a consistent design system and user experience.

### Testimonials Carousel

Custom-built carousel featuring:

- Star rating display
- Smooth fade/slide transitions
- Fixed-size testimonial cards
- Smart dots indicator:
  - Maximum of 5 visible dots
  - Automatically shifts as the active testimonial changes

### Micro-Interactions

- Desktop-only hover effects
- Button press animations
- Card hover lift effects
- Interactive icon animations

### Click-to-Call

Phone number uses the `tel:` protocol, enabling one-tap calling on mobile devices.

---

## 📂 Project Structure

```bash
src/
├── assets/         # Images and icons
├── components/     # Navbar, Hero, About, Services, Feedback, Contact, Footer
├── data/           # Static testimonial data
├── pages/          # Home, OneOnOneCoaching, RemoteCoaching, NutritionGuidance
└── styles/         # Component-specific CSS files
```

---

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/George-frontend/trainer-portfolio.git
```

Navigate into the project directory:

```bash
cd trainer-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 📖 What I Practiced

During this project I focused on:

- Building reusable React components
- Creating a custom responsive design system
- Implementing client-side routing with React Router
- Managing cross-route navigation behavior
- Building custom UI components without external libraries
- Creating responsive layouts using modern CSS
- Adding polished user interactions and animations
- Structuring a scalable React project

---

## 📄 License

This project was created for portfolio and educational purposes.
