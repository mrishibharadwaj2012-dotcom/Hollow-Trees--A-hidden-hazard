import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// API route for Grounded Research Literature & Tree Acoustics lookup using Gemini with Google Search tool
app.post('/api/search-grounding', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'Query is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured on the server.',
        fallback: true,
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    // Use gemini-3.8-flash with googleSearch tool as specified in prompt instructions
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: `You are a scientific research assistant specializing in arboricultural physics, non-destructive testing (NDT), and tree biomechanics for a National Children's Science Congress (NCSC) project titled "Assessment of Internal Trunk Cavities in Trees for Predicting Structural Failure and Reducing Risk to Human Life".
Provide accurate, concise, grounded scientific explanations. Focus on:
1. Ultrasonic stress wave propagation in wood (radial, tangential, longitudinal velocities).
2. Internal decay, heart rot, and cavity detection principles.
3. Acoustic impedance mismatch between sound wood and air-filled cavities.
4. Specific tropical and Indian tree species (e.g., Shorea robusta / Sal, Tectona grandis / Teak, Azadirachta indica / Neem, Ficus benghalensis / Banyan, Samanea saman / Rain tree) when queried.
5. Scientific honesty: reiterate that ultrasonic transmission is a preliminary screening tool, not an absolute predictor of exact tree failure time.
Always return factual summaries grounded with citations.`,
      },
    });

    const text = response.text || '';
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata || {};
    const groundingChunks = groundingMetadata.groundingChunks || [];
    const webSearchQueries = groundingMetadata.webSearchQueries || [];

    return res.json({
      text,
      groundingChunks,
      webSearchQueries,
    });
  } catch (error: any) {
    console.error('Error generating grounded content:', error);
    return res.status(500).json({
      error: error.message || 'Failed to fetch grounded research data',
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`NCSC Tree Cavities Project server running on port ${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
