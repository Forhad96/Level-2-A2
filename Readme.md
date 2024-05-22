# Inventory Management API

## Overview

This API is designed for inventory control, built using Node.js, Express, TypeScript, and MongoDB. It provides comprehensive product and order management capabilities, such as CRUD operations, searching, and inventory tracking. The system ensures robust data validation with Zod and handles errors effectively.

## Setup Instructions

1. **Initialization**:

   - Generate a `package.json` file.
   - Install necessary packages: `express`, `typescript`, `mongoose`, `cors`, `dotenv`, `ts-node-dev`.

2. **Server Configuration**:

   - Establish a standalone server file.

3. **Database Connection**:

   - Utilize Mongoose for MongoDB integration.
   - Set up a configuration file with credentials.
   - Implement middleware like `express.json` and `cors` for parsing.

4. **Modular Design**:

   - Create interfaces for structure.
   - Develop schemas, models, and validations using Zod.
   - Organize routes, controllers, services, and merge with the Express framework.

5. **API Testing**:

   - Execute GET and POST requests.

6. **Code Quality**:
   - Set up and configure ESLint for code standards.

## Achievements

- Full CRUD functionality for product and order entities.
- Advanced product search capabilities.
- Comprehensive error management.
- Efficient inventory control mechanisms.
- Data integrity ensured by Zod validation.
- Clean and modular coding practices.
- Uniform API endpoint design.
- Code consistency maintained with ESLint.
- Detailed commit logs reflecting development and updates.

## Local Deployment

### Prerequisites

- Node.js (version 14+)
- MongoDB (either local or remote)

### Installation Steps

1. **Repository Cloning**:
   ```
   git clone https://github.com/Forhad96/Level-2-A2.git
   ```
2. **Dependencies**:
   ```
   npm install
   ```
3. **Environment Setup**:
   - Create a `.env` file at the root level.
   - Define variables: `DATABASE_URL` and `PORT`.

### Launching the Server

- Initiate the server with:
  ```
  npm run start:dev
  ```
- Access the API at: `http://localhost:<PORT>`.

## Endpoints

#### Products

- **POST** `/api/products`: Add a product.
- **GET** `/api/products`: List all products.
- **GET** `/api/products/:productId`: Fetch a product by ID.
- **PUT** `/api/products/:productId`: Modify product details.
- **DELETE** `/api/products/:productId`: Remove a product.
- **GET** `/api/products?searchTerm=<term>`: Product search.

#### Orders

- **POST** `/api/orders`: Place an order.
- **GET** `/api/orders`: View all orders.
- **GET** `/api/orders?email=<email>`: Find orders by user email.

## Acknowledgments

**Appreciation**: Thank you for your attention to this guide.
