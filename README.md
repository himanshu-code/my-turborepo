# 🚀 Modern MFE Shell — App Web

This application serves as the **App Shell (Container)** in our **Microfrontend (MFE) architecture**.  
It provides **global layout, routing, theming, and shared services** while composing feature microfrontends at build time.

---

## 🏗️ Architecture: Build-Time Microfrontends

We use a **Build-Time MFE strategy** inside a **Turborepo** monorepo.

Instead of loading MFEs at runtime, feature domains are developed as independent packages and composed during the build.

### ✨ Benefits

- 🔒 Type Safety — End-to-end TypeScript across MFEs  
- ⚡ Performance — Optimized shared bundles & tree-shaking  
- 🧩 Modularity — Clear domain boundaries per feature  
- 🧠 Developer Experience — Fast HMR across the monorepo  
- 🎯 Consistency — Shared design system & theme tokens  

---

## 🎨 Styling System — Tailwind CSS v4

The shell owns the design system and global theme using Tailwind CSS v4 (CSS-first).

### 🌍 Global Theme
Defined in: apps/web/app/globals.css

Using Tailwind v4’s @theme directive and CSS variables to ensure all MFEs share:

- Color palette  
- Spacing scale  
- Typography  
- Radius & shadows  
- Dark mode support  

### 📦 Shared Utility Scanning

Tailwind scans all MFE packages via:

@source "../../../packages/*/src/**/*.{js,ts,jsx,tsx,mdx}";

This ensures utility classes used inside MFEs are included in the final build.

---

## 📂 Project Structure

apps/
  web/              → Next.js App Shell

packages/
  ui/               → Shared design system & layout components
  dashboard/        → Dashboard MFE (Analytics, Feed)
  profile/          → Profile MFE (User Info, Stats)

### 🔗 How MFEs Are Integrated

MFEs are imported as internal packages:

import { DashboardPage } from "@repo/dashboard";
import { ProfilePage } from "@repo/profile";

The shell provides layout and routing, while MFEs focus only on feature UI & logic.

---

## 🧱 Shell Responsibilities

The App Shell owns:

- 🧭 Application routing  
- 🧩 Global layout (Header, Sidebar, Content area)  
- 🎨 Theming & design tokens  
- 🔐 Authentication boundary (future)  
- 📦 Shared services integration  

MFEs remain UI-domain focused and consume shared packages.

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

npm install

### 2️⃣ Start Development

npm run dev

The shell will run at:
http://localhost:3000

Turborepo runs all dependent packages with caching and parallel builds.

---

## 🛠️ Tech Stack

Framework: Next.js 15+ (App Router)  
Styling: Tailwind CSS v4  
Icons: Lucide React  
Monorepo: Turborepo  
Language: TypeScript  
Package Manager: npm  

---

## 🧠 Summary

This project demonstrates a scalable frontend platform architecture where:

✔ MFEs are modular but integrated at build time  
✔ A shared design system ensures UI consistency  
✔ The shell acts as the orchestration layer  
✔ The system is optimized for performance and DX  

This mirrors how modern enterprise SaaS frontends are structured.
