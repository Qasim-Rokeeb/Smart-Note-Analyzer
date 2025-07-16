const sentimentColors = {
  positive: "text-green-600",
  negative: "text-red-500",
  neutral: "text-gray-500",
};

export default function NoteList({ notes, onDeleteNote }) {
  if (notes.length === 0) return <p className="text-center text-gray-500">No notes yet...</p>;

  return (
    <ul className="space-y-4">
      {notes.map(note => (
        <li
          key={note.id}
          className="flex justify-between items-center p-4 rounded shadow bg-white dark:bg-gray-800"
        >
          <div>
            <p className="text-lg">{note.text}</p>
            <p className={`text-sm mt-1 ${sentimentColors[note.sentiment]}`}>
              Sentiment: {note.sentiment}
            </p>
          </div>
          <button
            onClick={() => onDeleteNote(note.id)}
            className="text-sm text-red-500 hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
