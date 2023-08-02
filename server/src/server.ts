import express from 'express';
import cors from 'cors';

const app = express();
const port = 3080;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Define your /api route
app.get('/api', (_req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
