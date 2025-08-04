import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // اضافه کردن گزینه timestamps برای فیلدهای createdAt و updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
