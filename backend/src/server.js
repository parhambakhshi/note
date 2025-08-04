import express from "express";
import connectDB from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001; // متغیر محیطی باید با حروف بزرگ باشد.

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});

app.use(cors({
  origin: "http://localhost:5173", // مجاز کردن درخواست‌ها از این آدرس
}));

app.use(express.json()); // به صورت استاندارد بعد از cors قرار می‌دهیم.

app.use("/api/notes", notesRoutes);
