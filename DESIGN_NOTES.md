# Gerbang Waktu - Design Implementation

## Overview
Complete redesign based on reference images with "Gerbang Waktu" branding.

## Color Palette
- Navy Blue: `#2E3192`
- Orange: `#FF6B35`
- Lime Green: `#C4D82E`
- Beige: `#F5F1E8`

## Pages Implemented

### 1. Loading/Splash Page (`/`)
- Displays logo with decorative curves
- Auto-redirects to login after 2 seconds

### 2. Login Page (`/login`)
- Username/password authentication
- Mascot character integration
- Curved decorative elements

### 3. Home Page (`/home`)
- Displays today's events and tasks
- Greeting with username
- Mascot characters positioned as per design

### 4. Account Page (`/account`)
- User profile with avatar placeholder
- Streak tracker (6-day display)
- Category list menu
- Sidebar access

### 5. Schedule Page (`/schedule`)
- Today's schedule list
- Calendar view (November)
- Category event icons
- Modal for adding new schedules

### 6. Tasks Page (`/tasks`)
- Date selector (4-day view)
- Task list with checkboxes
- Modal for adding new tasks
- Floating action button

## Features
- ✅ Responsive design (mobile-first)
- ✅ Bottom navigation bar
- ✅ Sidebar menu
- ✅ Modal dialogs
- ✅ LocalStorage persistence
- ✅ Streak tracking
- ✅ Category system
- ✅ Task completion toggle

## Assets
All assets copied from `/Assets/` to `/static/`:
- Artboard 1_logo.png (Main logo)
- Artboard 2.png (Mascot full)
- Artboard 3.png (Category icon)
- Artboard 4.png (Category icon)
- Artboard 5.png (Mascot peeking)
- Artboard 9.png (Category icon)

## Typography
Using Google Fonts: **Fredoka** (rounded, friendly font matching the playful design)

## Database Structure
Simplified and streamlined:
- Categories (with icons)
- Schedules (title, date, time, category, completed)
- Tasks (title, dueDate, category, completed)
- Streak tracking

## Responsive Breakpoints
- Mobile: < 768px (bottom nav, hamburger menu)
- Desktop: ≥ 768px (expanded layout)

## Run the Project
```bash
npm install
npm run dev
```

## Default Login
Any username/password combination works (demo mode)
