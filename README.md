This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Go Tb API
**Status: Finished** <br>
**Current version: Beta version** <br> <br>
![Static Badge](https://img.shields.io/badge/ApiGoTb-0.0.2-green)



# How to run the api? (localhost)
  <details>  
  <summary>
      <strong>How to run ⚙</strong>
  </summary>
  
  -  ```npm i ```
  -  ```npm install -g prisma ```
  -  ```prisma init ```
  -  ```prisma generate ```
  -  ```nodemon index.js ```
  -  make sure the username, password, and name of your database matches the .env <br><br>
    ```DATABASE_URL = mysql://root:password@localhost:3306/db``` <br><br>
    for this env, database name is db
    
  </details>

---

This API provides endpoints to manage Faskes (Fasilitas Kesehatan) and Provinsi data.

## Endpoints

### Faskes Endpoints

- `GET /faskes`: Get all Faskes data.
- `GET /faskes/:id`: Get a specific Faskes by ID.
- `POST /faskes`: Create a new Faskes (admin role required).
- `PUT /faskes/:id`: Update an existing Faskes by ID (admin role required).
- `DELETE /faskes/:id`: Delete a Faskes by ID (admin role required).

### Provinsi Endpoints

- `GET /provinsi`: Get all Provinsi data.
- `GET /provinsi/:id`: Get a specific Provinsi by ID.
- `POST /provinsi`: Create a new Provinsi.
- `PUT /provinsi/:id`: Update an existing Provinsi by ID.
- `DELETE /provinsi/:id`: Delete a Provinsi by ID.

## Authentication Endpoints

### Register User

- `POST /auth/register`: Register a new user.
  - Request Body:
    ```json
    {
      "username": "example_user",
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    - Success (Status Code 200):
      ```json
      {
        "message": "User registered successfully"
      }
      ```
    - Error (Status Code 400 or 500):
      ```json
      {
        "error": "Registration failed"
      }
      ```

### Login User

- `POST /auth/login`: Log in an existing user.
  - Request Body:
    ```json
    {
      "username": "example_user",
      "password": "password123"
    }
    ```
  - Response:
    - Success (Status Code 200):
      ```json
      {
        "token": "<JWT token>"
      }
      ```
    - Error (Status Code 401 or 500):
      ```json
      {
        "error": "Invalid credentials"
      }
      ```

## Authentication Flow

1. **Register User**
   - Use the `/api/auth/register` endpoint to create a new user account. Provide a unique username, valid email address, and a strong password.
2. **Login User**
   - Use the `/api/auth/login` endpoint to authenticate a user and receive a JWT (JSON Web Token) for further authentication.
   - Include the received JWT token in the Authorization header for authenticated requests.
3. **Protected Routes**
   - Certain routes require authentication with a valid JWT token.
   - Include the JWT token in the Authorization header of the request as `Bearer <JWT token>`.

## Authorization
- Certain endpoints require specific user roles for access.

  <details>  
  <summary>
      <strong>Not working ❌</strong>
  </summary>
  
  - Admin role is required for certain privileged operations like user management or creating/updating sensitive data.
  - User role is allowed for basic operations and accessing non-sensitive data.
  
  </details>



## Request/Response Formats

### Request

- For creating/updating Faskes or Provinsi, send JSON data in the request body with the required fields.
- Example for creating a Faskes:
  ```json
  {
    "tahun": 2023,
    "provinsi": "Jawa Barat",
    "kabkota": "Bandung",
    "id_kabkot": 1,
    "jenis_faskes": "RS",
    "faskes": "RS Hasan Sadikin",
    "id_fas": 101,
    "jumlah_kasus_tb_terkonfirmasi": 50,
    "jumlah_kasus_tb_diobati": 45
  }
  ```
# Important
  - ## User also need to insert the JWT bearer token for authorization

### Response

- Successful responses will return JSON data with the requested resource or a success message.
- Error responses will include an error message and appropriate status code.

## Error Handling

- Invalid requests or server errors will return an error response with a corresponding status code.

---
