
## Example of Request Body, Response, and Error for Each Endpoint

### Faskes Endpoints

#### GET /faskes
- Response (200):
  ```json
  
    {
      "id": 1,
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
- Error (500):
  ```json
  {
    "error": "Failed to fetch Faskes data"
  }
  ```

#### GET /faskes/:id
- Response (200):
  ```json
  {
    "id": 1,
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
- Error (404):
  ```json
  {
    "error": "Faskes not found"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to fetch Faskes data"
  }
  ```

#### POST /faskes
- Request Body:
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
- Response (201):
  ```json
  {
    "message": "Faskes created successfully",
    "faskes": {
      "id": 1,
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
  }
  ```
- Error (400):
  ```json
  {
    "error": "Invalid Faskes data"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to create Faskes"
  }
  ```

#### PUT /faskes/:id
- Request Body:
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
- Response (200):
  ```json
  {
    "message": "Faskes updated successfully",
    "faskes": {
      "id": 1,
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
  }
  ```
- Error (400):
  ```json
  {
    "error": "Invalid Faskes data"
  }
  ```
- Error (404

):
  ```json
  {
    "error": "Faskes not found"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to update Faskes"
  }
  ```

#### DELETE /faskes/:id
- Response (200):
  ```json
  {
    "message": "Faskes deleted successfully"
  }
  ```
- Error (404):
  ```json
  {
    "error": "Faskes not found"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to delete Faskes"
  }
  ```

### Provinsi Endpoints

#### GET /provinsi
- Response (200):
  ```json
    {
      "id": 1,
      "nama": "Jawa Barat"
    }
    
  ```
- Error (500):
  ```json
  {
    "error": "Failed to fetch Provinsi data"
  }
  ```

#### GET /provinsi/:id
- Response (200):
  ```json
  {
    "id": 1,
    "nama": "Jawa Barat"
  }
  ```
- Error (404):
  ```json
  {
    "error": "Provinsi not found"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to fetch Provinsi data"
  }
  ```

#### POST /provinsi
- Request Body:
  ```json
  {
    "nama": "Jawa Barat"
  }
  ```
- Response (201):
  ```json
  {
    "message": "Provinsi created successfully",
    "provinsi": {
      "id": 1,
      "nama": "Jawa Barat"
    }
  }
  ```
- Error (400):
  ```json
  {
    "error": "Invalid Provinsi data"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to create Provinsi"
  }
  ```

#### PUT /provinsi/:id
- Request Body:
  ```json
  {
    "nama": "Jawa Barat"
  }
  ```
- Response (200):
  ```json
  {
    "message": "Provinsi updated successfully",
    "provinsi": {
      "id": 1,
      "nama": "Jawa Barat"
    }
  }
  ```
- Error (400):
  ```json
  {
    "error": "Invalid Provinsi data"
  }
  ```
- Error (404):
  ```json
  {
    "error": "Provinsi not found"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to update Provinsi"
  }
  ```

#### DELETE /provinsi/:id
- Response (200):
  ```json
  {
    "message": "Provinsi deleted successfully"
  }
  ```
- Error (404):
  ```json
  {
    "error": "Provinsi not found"
  }
  ```
- Error (500):
  ```json
  {
    "error": "Failed to delete Provinsi"
  }
  ```

---

This section provides example request bodies, responses, and errors for each endpoint, ensuring clear and consistent documentation for API users.
