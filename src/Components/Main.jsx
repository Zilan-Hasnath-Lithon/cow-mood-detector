import React, { useState } from "react";

const Main = () => {
  const [mood, setMood] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [preview, setPreview] = useState(null);

  const moods = [
    "Happy",
    "Sad",
    "Angry",
    "Relaxed",
    "Stressed",
    "Playful",
    "Sleepy",
    "Curious",
    "Hungry",
  ];

  const funSuggestions = {
    Happy: "Give her a gentle head pat , জড়িয়ে ধরো",
    Sad: "Play some calming flute music , একটু নাগিন ডান্স করো।",
    Angry:
      "Offer her some fresh green grass , পিঠে একটা মাছি বসেছে, সেটাকে তাড়িয়ে দাও",
    Relaxed: "Let her nap under a big shady tree , বিকালে হানি নাট কিনে খাওয়াও",
    Stressed: `Massage her back slowly 👐, সামনে দাড়িয়ে বলো: 
            "দুইয়ে দুইয়ে.. চার হয়,
            আর তিনে তিনে ছয়,
            তোমায় না দেখলে এ মনে লাগে ভয়..."`,
    Playful: `Bring a ball, let her chase it , ওর কানে কানে বলো: 
            "নিশিতে আইসো ফুল বনে,
            তোমার মালকা বানু দিন গুনে...."`,
    Sleepy: "Don't disturb, বাবুকে ঘুমাতে দাও",
    Curious: "Show her a magic trick , দেশনেতার ব্যাপারে বলো",
    Hungry: "জিজ্ঞাসা করো, 'বাবু খাইছো?'",
  };

  const handlePhotoUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPreview(URL.createObjectURL(file));
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      setMood(randomMood);
      setSuggestion(funSuggestions[randomMood]);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 via-white to-gray-100 font-sans">
      {/* Header */}
      <header className="py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          🐮 Cow Mood Detector
        </h1>
        <p className="mt-3 text-gray-500 text-lg">
          Upload a photo & instantly reveal your cow’s vibe ✨
        </p>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6">
        {/* Upload Button */}
        <label className="mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <span className="cursor-pointer inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-3 rounded-xl font-medium text-lg shadow-lg hover:opacity-90 transition-all duration-200 active:scale-95">
            📷 Upload Photo
          </span>
        </label>

        {/* Preview Image */}
        {preview && (
          <div className="mb-8 transform transition-all duration-500 hover:scale-105">
            <img
              src={preview}
              alt="Cow Preview"
              className="w-72 h-72 object-cover rounded-2xl shadow-2xl border border-gray-200"
            />
          </div>
        )}

        {/* Mood & Suggestion */}
        {mood && (
          <div className="backdrop-blur-lg bg-white/70 rounded-2xl p-6 shadow-xl border border-gray-200 w-80 text-center transition-all duration-500">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Mood:{" "}
              <span className="text-indigo-600 font-bold">{mood}</span>
            </p>
            <p className="text-gray-600 italic whitespace-pre-line leading-relaxed">
              {suggestion}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <h2 className="text-base font-semibold mb-3 text-white">📩 Connect</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Zilan-Hasnath-Lithon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://x.com/ZilanHasnath"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            Twitter
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Main;
