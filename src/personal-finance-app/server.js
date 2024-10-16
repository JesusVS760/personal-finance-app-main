import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const filePath = path.join(__dirname, "data.json");

// POST route to handle incoming data
app.post("/data.json", (req, res) => {
  const newPot = req.body;
  console.log("Received newPot:", newPot); // Log the received data

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err); // Log read error
      return res.status(500).json({ error: "Error reading the file" });
    }

    let pots;
    try {
      pots = JSON.parse(data || "[]"); // Parse existing JSON or initialize as an empty array
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError); // Log JSON parse error
      return res.status(500).json({ error: "Error parsing JSON data" });
    }

    pots.push(newPot); // Add the new pot

    fs.writeFile(filePath, JSON.stringify(pots, null, 2), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err); // Log write error
        return res.status(500).json({ error: "Error writing to the file" });
      }
      console.log("Pot added successfully:", pots); // Log success
      res.status(200).json({ message: "Pot added successfully" });
    });
  });
});

// Add a GET route to retrieve the content of data.json
app.get("/data.json", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data.json:", err);
      return res.status(500).json({ error: "Error reading the file" });
    }
    res.status(200).json(JSON.parse(data || "[]")); // Return the JSON data
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
