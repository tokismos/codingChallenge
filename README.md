# Furniture Configurator

A Next.js application for configuring and purchasing furniture with customizable options like colors and seating arrangements.

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable UI components
├── helpers/      # Utility functions
├── hooks/        # Custom React hooks
├── pages/        # Next.js pages
└── providers/    # Application providers
```

## Data Management

- Uses React Query for server state management
- Mock data available for development in `src/mockData`

## Styling

- Styled-components for component styling
- Consistent error and loading states

## Development

The application uses TypeScript for type safety and better developer experience. Key types are defined in `src/types.ts`.
