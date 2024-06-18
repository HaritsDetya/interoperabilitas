# Go Tb API
**Status: Finished** <br>
**Current version: Beta version**

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
    
  </details>

---

This API provides endpoints to manage Faskes (Fasilitas Kesehatan) and Provinsi data.

## Endpoints

### Faskes Endpoints

- `GET /faskes`: Get all Faskes data.
- `GET /faskes/:id`: Get a specific Faskes by ID.
- `POST /afaskes`: Create a new Faskes (admin role required).
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
