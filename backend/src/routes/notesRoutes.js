import express from "express";
import { createNote, deleteNote, getAllnotes, updateNote, getNoteById } from "../controllers/notesController.js";  // وارد کردن getNoteById

const router = express.Router();

// روت برای دریافت همه نوت‌ها
router.get("/", getAllnotes);

// روت برای دریافت نوت بر اساس id
router.get("/:id", getNoteById);  // اصلاح نام تابع

// روت برای ساخت نوت جدید
router.post("/", createNote);

// روت برای به‌روزرسانی نوت
router.put("/:id", updateNote);

// روت برای حذف نوت
router.delete("/:id", deleteNote);

export default router;
