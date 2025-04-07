# Navigation Bar Microservice

A modern, customizable navigation bar built as a Micro Frontend using Module Federation. This component provides a consistent navigation experience across your application ecosystem with advanced features like account management, theme switching, and responsive design.

## Features

-   **Module Federation**: Exposed as a remote module that can be seamlessly integrated into any frontend
-   **Responsive Design**: Fully responsive navigation interface that works across all device sizes with mobile-first approach
-   **Theme Management**:
    -   Built-in light, dark, and system theme support
    -   Persistent theme preference using localStorage
    -   Customizable theme variables and gradients
-   **User Account Management**:
    -   Support for multiple account profiles
    -   Account switching functionality
    -   Guest mode support
    -   Profile picture handling with fallback to initials
-   **Modern UI Components**:
    -   Built with Shadcn UI components
    -   Animated borders and transitions
    -   Customizable styling with Tailwind CSS
-   **State Management**:
    -   Redux for global state
    -   Context API for sidebar state
    -   Persistent sidebar state using cookies
-   **TypeScript**: Fully typed for better developer experience and code quality
-   **Security**:
    -   Secure profile image handling with allowed domains
    -   Environment variable validation
    -   Type-safe API integration

## Architecture

This microservice follows a modular architecture pattern using Webpack Module Federation (via Vite's federation plugin). The core components are:

-   **Navigationbar**: The main component that renders the navigation UI
-   **NavigationbarWrapper**: A wrapper with Redux provider for state management
-   **Menu System**:
    -   Account management menu
    -   Theme selection menu
    -   Main navigation menu
-   **State Management**:
    -   Redux store for user and navigation state
    -   Context for sidebar state
    -   Local storage for theme preferences
-   **Component Structure**:
    -   Modular components with clear separation of concerns
    -   Reusable UI components from Shadcn
    -   Custom hooks for responsive behavior

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   pnpm (or npm/yarn)

### Installation

```bash
cd services/frontend/navigationbar
pnpm install
```

### Development

To run the navigation bar in development mode:

```bash
pnpm dev
```

This will start the development server at http://localhost:5001.

### Building for Production

```bash
pnpm build
```

The build outputs will be in the `dist` directory, with the Module Federation configuration generating a `remoteEntry.js` file.

## Integration with Host Applications

### Step 1: Configure the Host Application

In your host application's Vite config (or webpack config), set up the remote module:

```typescript
// vite.config.ts
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        // ... other plugins
        federation({
            name: "host",
            remotes: {
                navigationbar: "http://localhost:5001/assets/remoteEntry.js", // In production, use your deployed URL
            },
            shared: ["react", "react-dom", "react-router-dom", "react-redux", "@reduxjs/toolkit"],
        }),
    ],
    // ... other config
});
```

### Step 2: Import the Remote Module

You can now import the navigation bar in your host application:

```tsx
// Import the remote module using dynamic import
import("navigationbar/Navigationbar").then((module) => {
    const Navigationbar = module.default;
    // Use the Navigationbar component
});

// Or with React.lazy for better code splitting
const Navigationbar = React.lazy(() => import("navigationbar/Navigationbar"));
```

### Step 3: Use the Component

```tsx
import React, { Suspense } from "react";
const Navigationbar = React.lazy(() => import("navigationbar/NavigationbarWrapper"));

function App() {
    return (
        <div className="app">
            <Suspense fallback={<div>Loading Navigation...</div>}>
                <Navigationbar
                    user={{
                        id: "user-1",
                        name: "John Doe",
                        email: "john@example.com",
                        picture: "https://example.com/avatar.jpg",
                        role: "client",
                        createdAt: new Date().toISOString(),
                        lastLogin: new Date().toISOString(),
                    }}
                    savedAccounts={[
                        {
                            id: "account-1",
                            name: "Account 1",
                            email: "account1@example.com",
                            picture: "https://example.com/avatar1.jpg",
                        },
                    ]}
                />
            </Suspense>

            {/* Rest of your application */}
        </div>
    );
}
```

## Props API

### NavigationbarProps

| Prop            | Type                          | Description                                           |
| --------------- | ----------------------------- | ----------------------------------------------------- |
| `user`          | `User \| null \| undefined`   | The current user object (optional)                    |
| `savedAccounts` | `SavedAccount[] \| undefined` | List of saved accounts for quick switching (optional) |

### User Interface

```typescript
interface User {
    id: string;
    name: string;
    email: string;
    picture: string;
    role: "admin" | "client" | "guest";
    createdAt: string;
    lastLogin: string;
}
```

### SavedAccount Interface

```typescript
interface SavedAccount {
    id: string;
    name: string;
    email: string;
    picture?: string;
}
```

## Customization

### Theming

The navigation bar supports both light and dark modes with system preference detection. It uses CSS variables for theming:

```css
:root {
    /* Override the default color variables */
    --gradient-background: #ffffff;
    --gradient-color: hsl(219, 100%, 65%);
    --gradient-color-secondary: hsl(190, 100%, 50%);
}

.dark {
    /* Override dark mode variables */
    --gradient-background: #000000;
}
```

### Profile Images

The component supports profile images from trusted domains:

-   res.cloudinary.com
-   res-console.cloudinary.com
-   lh3.googleusercontent.com

For other domains or missing images, it falls back to displaying user initials.

### Environment Variables

Required environment variables:

-   VITE_BASE_URL_DASHBOARD
-   VITE_BASE_URL_LANDING
-   VITE_BASE_URL_ACCOUNT
-   VITE_BASE_URL_AUTH
-   VITE_BASE_URL_NAVIGATIONBAR

## Browser Support

This component is built with modern JavaScript and CSS features. It supports:

-   Chrome (latest 2 versions)
-   Firefox (latest 2 versions)
-   Safari (latest 2 versions)
-   Edge (latest 2 versions)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
