import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// ✅ DB connection (SAFE)
let db;

try {
  db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  console.log("DB connected");
} catch (err) {
  console.error("DB connection failed:", err);
}

// lead_id generator
function generateLeadId() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  const rand = Math.random().toString(36).substring(2, 9).toUpperCase();
  return `FTQ${dd}${mm}${yyyy}${rand}`;
}

// test route
app.get("/api", (req, res) => {
  res.send("API running");
});

// form submit API
app.post("/api/custom-request", (req, res) => {

  // ✅ DB safety check
  if (!db) {
    return res.status(500).json({ success: false, message: "DB not connected" });
  }

  const {
    name,
    phone,
    email,
    destinations,
    serviceType,
    duration,
    customDuration,
    travelDates,
    number_of_people,
    budget,
    requirements,
    source,
    page_url,
  } = req.body;

  if (!/^[6-9]\d{9}$/.test(phone)) {
    return res.json({ success: false, message: "Invalid phone number" });
  }

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "").trim();
  const cleanDestination = normalize(destinations);

  const duplicateQuery = `
    SELECT id FROM custom_requests 
    WHERE phone = ? 
    AND REPLACE(LOWER(destinations), ' ', '') = ?
    AND status != 'closed'
  `;

  db.query(duplicateQuery, [phone, cleanDestination], (err, dupResult) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false });
    }

    if (dupResult.length > 0) {
      return res.json({
        success: false,
        message:
          "A similar query from this number is already open. Our team will soon contact you.",
      });
    }

    const countQuery = `
      SELECT COUNT(*) as total FROM custom_requests 
      WHERE phone = ? 
      AND status != 'closed'
    `;

    db.query(countQuery, [phone], (err, countResult) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false });
      }

      if (countResult[0].total >= 3) {
        return res.json({
          success: false,
          message:
            "You already have 3 active requests. Please wait for our team to contact you.",
        });
      }

      const lead_id = generateLeadId();

      const insertQuery = `
        INSERT INTO custom_requests
        (lead_id, name, phone, email, destinations, service_type, duration, custom_duration, travel_date, number_of_people, budget, requirements, source, page_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(
        insertQuery,
        [
          lead_id,
          name,
          phone,
          email,
          destinations,
          serviceType,
          duration,
          customDuration,
          travelDates,
          number_of_people,
          budget,
          requirements,
          source,
          page_url,
        ],
        (err) => {
          if (err) {
            console.error("DB Error:", err);
            return res.status(500).json({ success: false });
          }

          res.json({ success: true, lead_id });
        }
      );
    });
  });
});


// ✅ SERVE FRONTEND (Hostinger FIX)
app.use(express.static(path.join(process.cwd(), "dist")));

app.use((req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/index.html"));
});


// ✅ START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
