# ZARI | Luxury Heritagewear

## Overview

ZARI is a modern fashion e-commerce storefront built with Next.js and React. The application showcases a curated collection of luxury heritagewear such as panjabis, sherwanis, kurtas, and accessories. It offers a polished browsing experience with product listing, detailed product pages, search and filtering, and a shopping cart powered by Redux.

This project is designed as a frontend demo and showcase store rather than a full production checkout system. The current implementation focuses on product discovery, presentation, and cart interactions.

## Project Goals

- Present an elegant, premium fashion brand experience
- Allow users to browse products by category and search term
- Provide product detail views with image selection, size/color options, and quantity selection
- Support cart operations such as adding, updating, removing, and clearing items
- Demonstrate a clean modern architecture using Next.js App Router and TypeScript

## Key Features

### Customer-facing experience
- Responsive landing page with hero section, featured products, categories, and brand story
- Product catalog with search, category filtering, sorting, pagination, and empty-state handling
- Dedicated product detail page with image gallery, product metadata, size/color selection, and add-to-bag interaction
- Shopping cart page with item summary and subtotal display
- Mobile-friendly navigation and bag counter
- Toast notifications for cart actions

## Tech Stack

- Framework: Next.js 16
- UI Library: React 19
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: Redux Toolkit + React Redux
- Animation: Framer Motion
- Icons: Lucide React

## Application Architecture

### Page-level responsibilities

- Home page: introduces brand and highlights featured products
- Products page: renders the full catalog and filter controls
- Product detail page: shows a single item, gallery, purchase options, and related items
- Cart page: displays the user’s selected products and order summary

### State management

The cart state is managed with Redux Toolkit through the slice defined in `src/redux/slices/CartSlice.ts`.

## Main Features in Detail

### Home Page
The landing page is composed of:
- Hero section
- Featured products area
- Category showcase
- Brand story section

### Catalog and Product Discovery
The products page supports:
- Search input
- Category chips and mobile select
- Sorting by featured, lowest price, or highest price
- Limit selection for page size
- Pagination
- Reset filters action

### Product Detail Page
Each product detail page includes:
- Large image display
- Thumbnail gallery
- Product name, price, rating, and description
- Color and size selection
- Quantity stepper
- Add-to-bag button
- Related products section

### Cart Experience
The cart experience allows users to:
- Review selected items
- Adjust quantity
- Remove items
- Empty the basket
- See a subtotal and total summary

## UI and Styling

The project uses Tailwind CSS for layout and component styling. The design language is premium and editorial, with a warm neutral palette and elegant typography.

Key visual characteristics:
- Soft serif display typography for headings
- Clean sans-serif body typography
- High-quality product imagery
- Spacious layouts and subtle motion details

## Development Setup

### Prerequisites

Make sure the following are installed on your machine:
- Node.js 18 or newer
- npm or pnpm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open your browser at:
- http://localhost:3000

### Production build

```bash
npm run build
```

### Start production server

```bash
npm run start
```

## Environment Variables

The project currently uses optional environment configuration through Next.js environment variables.

Example:

```env
NEXT_PUBLIC_SITE_URL=
```

If this variable is not set, the app falls back to a default site URL used for metadata generation.

## Summary

ZARI is a premium fashion storefront built with Next.js, TypeScript, Redux, and Tailwind CSS. It demonstrates a modern, responsive, and visually rich shopping experience focused on product discovery, cart interaction, and elegant presentation.
