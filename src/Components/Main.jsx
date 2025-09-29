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
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-100 via-white to-blue-50 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="py-12 text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-md">
          🐮 Cow Mood Detector
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Upload a photo & reveal your cow’s mood ✨
        </p>
      </header>

      {/* Floating Cards Container */}
      <div className="flex flex-col items-center justify-center flex-grow px-6 relative z-10">
        {/* Upload Button */}
        <label className="mb-8">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
          <span className="cursor-pointer inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-3xl font-semibold text-lg shadow-2xl hover:opacity-90 hover:shadow-3xl transition-all duration-300 active:scale-95">
            📷 Upload Photo
          </span>
        </label>

        {/* Preview Image Card */}
        {preview && (
          <div className="mb-10 w-full max-w-sm transform transition-all duration-700 hover:scale-105 hover:-translate-y-2">
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-4 flex justify-center">
              <img
                src={preview}
                alt="Cow Preview"
                className="w-64 h-64 object-cover rounded-2xl"
              />
            </div>
          </div>
        )}

        {/* Mood & Suggestion Floating Card */}
        {mood && (
          <div className="w-full max-w-sm backdrop-blur-xl bg-white/40 rounded-3xl shadow-2xl border border-white/20 p-6 text-center transform transition-all duration-700 hover:scale-[1.03] hover:-translate-y-1">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Mood:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                {mood}
              </span>
            </p>
            <p className="text-gray-700 italic whitespace-pre-line leading-relaxed md:text-lg">
              {suggestion}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-16 w-full z-10 relative">
        <h2 className="text-sm font-semibold mb-2 text-white">📩 Connect with Me</h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/Zilan-Hasnath-Lithon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://x.com/ZilanHasnath"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            Twitter
          </a>
        </div>
      </footer>

      {/* Floating Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-300 rounded-full opacity-25 blur-2xl -z-10 animate-pulse"></div>
    </main>
  );
};

export default Main;
