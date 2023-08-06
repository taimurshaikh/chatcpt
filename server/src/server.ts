import express from 'express';
import cors from 'cors';
import run from './utils/webbrowser';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
app.use(bodyParser.json());

// Define your /api route
app.get('/api', (_req, res) => {
  res.send('Hello World!');
});

app.post('/api/generate', express.json(), async (req, res, next) => {
  try {
    console.log(req.body.query);
    const query = req.body.query; // Extract 'query' from request body
    console.log("here");
    if (!query) {
      res.status(400).json({ error: 'Missing required parameter: query' });
    }
    console.log("here2");
    const responseString = await run(query); // Call the run function with the provided query
    console.log("here3");
    res.status(200).json({ message: responseString }); // Send the response string back to the frontend
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
