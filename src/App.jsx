import { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { Sun, Moon } from "lucide-react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const sentiment = analyzeSentiment(text);
    const newNote = { id: Date.now(), text, sentiment };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const analyzeSentiment = (text) => {
    const t = text.toLowerCase();
    if (t.includes("love") || t.includes("great") || t.includes("happy")) return "positive";
    if (t.includes("hate") || t.includes("bad") || t.includes("sad")) return "negative";
    return "neutral";
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <div className="max-w-xl mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Smart Note Analyzer 🧠</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <NoteInput onAddNote={addNote} />
          <NoteList notes={notes} onDeleteNote={deleteNote} />
        </div>
      </div>
    </div>
  );
}
