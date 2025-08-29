import express from "express";
import dotenv from "dotenv";
import cors from "cors";   // <-- add this
import authRoutes from "./routes/auth.routes.js";
import patientRoutes from "./routes/patient.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
