import Note from "../models/Note.js";

// برای دریافت تمام نوت‌ها
export async function getAllnotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });  // همه نوت‌ها را از دیتابیس می‌آورد
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// برای دریافت نوت با آی‌دی
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.log("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// برای ساخت نوت جدید
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    // استفاده از مدل Note برای ساخت نوت جدید
    const newNote = new Note({ title, content });

    // ذخیره نوت جدید
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// برای به‌روزرسانی نوت
export async function updateNote(req, res) {
  const { id } = req.params;  // دریافت id نوت از پارامترهای URL
  const { title, content } = req.body;  // دریافت داده‌های جدید برای نوت

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id, 
      { title, content },
      { new: true }  // برای دریافت نوت آپدیت‌شده
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// برای حذف نوت
export async function deleteNote(req, res) {
  const { id } = req.params;  // دریافت id نوت از پارامترهای URL

  try {
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
