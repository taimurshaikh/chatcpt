import express from 'express';
import cors from 'cors';
import run from './utils/agent';
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
    const query = req.body.query; // Extract 'query' from request body
    const uni = req.body.selectedUniversity;
    if (!query) {
      res.status(400).json({ error: 'Missing required parameter: query' });
    }
    const responseString = await run(query + `. For context, I go to ${uni}.`); // Call the run function with the provided query
    res.status(200).json({ message: responseString }); // Send the response string back to the frontend
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
