# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Skip Selection Page

A modern, responsive React application for selecting waste skip sizes and booking services.

## Features

- Modern, clean UI design
- Fully responsive (mobile and desktop)
- Interactive skip size selection
- Progress indicator
- Detailed skip information display
- Accessibility focused
- Type-safe with TypeScript

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Icons
- Framer Motion (for animations)

## Project Structure

```
src/
  ├── components/        # Reusable UI components
  ├── pages/            # Page components
  ├── types/            # TypeScript interfaces
  ├── hooks/            # Custom React hooks
  ├── utils/            # Utility functions
  ├── styles/           # Global styles
  └── assets/           # Images and other static assets
```

## Design Decisions

1. **Modern UI**: Implemented a clean, modern design with clear visual hierarchy and ample white space.
2. **Responsive Design**: Mobile-first approach with fluid layouts that adapt to all screen sizes.
3. **Accessibility**: ARIA labels, keyboard navigation, and proper contrast ratios.
4. **Performance**: Optimized images, lazy loading, and efficient state management.
5. **User Experience**: Clear progress indicators, intuitive navigation, and helpful tooltips.

## Improvements from Original

1. Added detailed skip information cards with expandable details
2. Improved mobile responsiveness
3. Added smooth animations for better user engagement
4. Implemented better visual feedback for selected items
5. Added clear pricing breakdown
6. Improved progress indicator
7. Added helpful tooltips for skip size selection
