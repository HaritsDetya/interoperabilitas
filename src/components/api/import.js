// pages/api/import.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Simulate a delay
      setTimeout(() => {
        // Simulate a random success or failure
        const isSuccess = Math.random() > 0.3;
  
        if (isSuccess) {
          res.status(200).json({ message: 'Data imported successfully' });
        } else {
          res.status(500).json({ message: 'Failed to import data' });
        }
      }, 1000); // 1 second delay
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  