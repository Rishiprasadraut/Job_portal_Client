# 🚀 Job Portal - MERN Stack Application

A modern, responsive job portal web application built with React, Vite, and Tailwind CSS. This platform allows users to search and browse job listings, apply for positions, and manage their applications with a seamless user experience.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Context API](#context-api)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **Job Search & Filter**: Advanced search functionality with title and location filters
- **Category-Based Filtering**: Filter jobs by categories (Programming, Data Science, Designing, Networking, Management, Marketing, Cybersecurity)
- **Location-Based Filtering**: Filter jobs by location (Bangalore, Washington, Hyderabad, Mumbai, California, Chennai, New York)
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices
- **Authentication**: User authentication powered by Clerk
- **Job Listings**: Browse through numerous job opportunities with detailed information
- **Pagination**: Organized job listings with pagination (6 jobs per page)
- **Apply for Jobs**: Direct application functionality for job seekers
- **Mobile App Promotion**: App download section for Play Store and App Store

### User Experience
- **Hero Section**: Engaging landing page with search functionality
- **Trusted Companies**: Display of trusted company logos (Microsoft, Walmart, Accenture, Samsung, Amazon, Adobe)
- **Filter Toggle**: Mobile-friendly filter sidebar with show/hide functionality
- **User Profile**: Integrated user profile with Clerk's UserButton component
- **Social Media Integration**: Footer with social media links (Facebook, Twitter, Instagram)

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** - UI library for building user interfaces
- **Vite 7.3.1** - Next-generation frontend build tool
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **React Router DOM 7.13.1** - Routing and navigation
- **React Toastify 11.0.5** - Toast notifications

### Authentication & State Management
- **Clerk React 5.61.1** - User authentication and management
- **Context API** - Global state management

### Additional Libraries
- **Quill 2.0.3** - Rich text editor
- **ESLint** - Code linting and formatting

### Development Tools
- **@vitejs/plugin-react** - Vite plugin for React
- **PostCSS & Autoprefixer** - CSS processing via Tailwind

## 📁 Project Structure

```
client/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, icons, and asset configurations
│   │   └── assets.js         # Asset exports and data (JobCategories, JobLocations, jobsData)
│   ├── components/           # Reusable React components
│   │   ├── AppDownload.jsx   # Mobile app download section
│   │   ├── Footer.jsx        # Footer with social links
│   │   ├── Hero.jsx          # Hero section with search
│   │   ├── JobCard.jsx       # Individual job card component
│   │   ├── JobListing.jsx    # Main job listing component with filters
│   │   └── Navbar.jsx        # Navigation bar with authentication
│   ├── context/              # Context API for state management
│   │   └── AppContext.jsx    # Global app state (search filters, jobs)
│   ├── pages/                # Page components
│   │   ├── Application.jsx   # Application management page
│   │   ├── Applyjob.jsx      # Job application page
│   │   └── Home.jsx          # Home page layout
│   ├── App.css               # Global application styles
│   ├── App.jsx               # Main App component with routing
│   ├── index.css             # Tailwind CSS imports
│   └── main.jsx              # Application entry point
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-portal/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `client` directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔐 Environment Variables

Create a `.env` file in the root of the client directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxx
```

**Getting Clerk API Key:**
1. Sign up at [Clerk.com](https://clerk.com)
2. Create a new application
3. Copy the Publishable Key from the dashboard
4. Add it to your `.env` file

## 💻 Usage

### Development Mode
```bash
npm run dev
```
The application will start at `http://localhost:5173`

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
npm run preview
```

## 🧩 Components Overview

### 1. **Navbar Component**
- Displays logo and navigation
- Integrates Clerk authentication (Login/UserButton)
- Shows user's first and last name when logged in
- "Recruiter Login" and user "Login" buttons

### 2. **Hero Component**
- Eye-catching gradient banner
- Dual search functionality (Job title + Location)
- Displays trusted company logos
- Search triggers context state update

### 3. **JobListing Component**
- Main job display section
- Sidebar with search filters:
  - Current search tags (removable)
  - Category checkboxes
  - Location checkboxes
  - Mobile filter toggle button
- Grid layout (1 col on mobile, 2 on tablet, 3 on desktop)
- Pagination logic (6 jobs per page)

### 4. **JobCard Component**
- Individual job display card
- Shows job title, location, and level
- Truncated job description (150 characters)
- "Apply Now" and "Learn more" buttons
- Company icon display

### 5. **AppDownload Component**
- Gradient background section
- Mobile app promotion
- Play Store and App Store links
- Responsive image display

### 6. **Footer Component**
- Logo display
- Copyright information
- Social media icon links (Facebook, Twitter, Instagram)

## 🌐 Context API

### AppContext
Located in `src/context/AppContext.jsx`

**State Variables:**
- `searchFilter` - Object containing title and location search terms
- `isSearch` - Boolean to track if search is active
- `jobs` - Array of job listings
- `currentPage` - Current page number for pagination

**Methods:**
- `setSearchFilter()` - Update search filters
- `setIsSearch()` - Toggle search state
- `fetchJobs()` - Fetch job data (currently uses static data)

## 🎨 Styling

The application uses **Tailwind CSS 4.2.1** with custom configurations:

- **Responsive breakpoints**: sm, md, lg, xl, 2xl
- **Color scheme**: Blue primary, purple accents, gray neutrals
- **Custom gradient backgrounds**: Purple gradients for hero section
- **Utility classes**: Extensive use of Tailwind utilities for rapid development

## 📱 Responsive Design

- **Mobile First**: Designed with mobile-first approach
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
  - 2XL: > 1536px

## 🔄 Routing

Routes defined in `App.jsx`:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Main landing page with job listings |
| `/apply-job/:id` | Applyjob | Individual job application page |
| `/application` | Applyjob | User's applications page |

## 🚀 Deployment

### Vercel Deployment
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Netlify Deployment
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Build Configuration
- **Output**: `dist/` directory
- **Build Command**: `npm run build`
- **Dev Server**: `npm run dev`

<!-- git remote add origin https://github.com/Rishiprasadraut/Job_portal_Client.git
git branch -M main
git push -u origin main -->

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Rishiprasad.Dev**

## 🙏 Acknowledgments

- React Team for the amazing library
- Vite for the blazing fast build tool
- Tailwind CSS for the utility-first framework
- Clerk for authentication services
- All trusted companies featured on the platform

---

**Note**: This is the client-side application. Ensure you have the backend server running for full functionality (API integration coming soon).

For questions or support, please open an issue in the repository.
