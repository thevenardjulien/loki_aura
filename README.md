# Laravel Inertia React Project Starter

A modern, full-stack web application boilerplate built with Laravel 11, Inertia.js, React 18, TypeScript, Tailwind CSS, and Shadcn UI components.

## 🏗️ Architecture Overview

This project implements a modern monolithic architecture using Laravel as the backend framework and React for the frontend, seamlessly connected via Inertia.js. This architecture provides:

- **Single Codebase**: All code lives in one repository, simplifying deployment and maintenance
- **Server-Side Rendering**: Improved SEO and initial page load performance
- **Type Safety**: Full TypeScript support across the frontend
- **Modern UI**: Powered by Tailwind CSS and Shadcn components
- **Authentication**: Built-in auth system using Laravel Fortify
- **Developer Experience**: Hot Module Replacement (HMR) and fast refresh during development

### Tech Stack

- **Backend**

    - Laravel 11.x (PHP 8.x)
    - Laravel Fortify for authentication
    - SQLite

- **Frontend**

    - React 18.3.1
    - TypeScript 5.7.3
    - Vite 6.0.11
    - Tailwind CSS
    - Shadcn UI Components
    - Lucide React Icons

- **Infrastructure**
    - Inertia.js for seamless frontend-backend communication

## 🚀 Getting Started

### Prerequisites

- PHP 8.x
- Composer
- Node.js (Latest LTS version)
- SQLite (but you can use any other RDBMS)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-inertia-laravel-starter
```

2. Install PHP dependencies:

```bash
composer install
```

3. Install Node.js dependencies:

```bash
npm install
```

4. Set up your environment:

```bash
cp .env.example .env
php artisan key:generate
```

5. Configure your database in `.env` and run migrations:

```bash
php artisan migrate
```

6. Start the development servers:

```bash
npm run dev
```

Visit `http://localhost:8000` to see your application.

## 📚 Documentation Structure

The documentation is split into three main sections:

1. [Getting Started](README.md) - This file, containing project overview and setup instructions
2. [Backend Documentation](backend.md) - Details about Laravel implementation, API endpoints, and authentication
3. [Frontend Documentation](frontend.md) - React components, Inertia.js integration, and UI architecture

## 🧪 Testing

```bash
# Run PHP tests
php artisan test

# Run JavaScript tests
npm run test
```

## 🛠️ Development Workflow

1. Create a new branch for your feature/fix
2. Write tests for new functionality
3. Implement your changes
4. Ensure all tests pass
5. Submit a pull request

## 📝 Type Checking

The project uses TypeScript for type safety. Run type checking with:

```bash
npm run typecheck
```

## 🎨 Code Style

- PHP code follows PSR-12 standards
- TypeScript/React code follows the project's ESLint and Prettier configuration
- Run style checks with:

```bash
# PHP
./vendor/bin/pint

# TypeScript/React
npm run lint
```

## 📦 Building for Production

```bash
npm run build
```
