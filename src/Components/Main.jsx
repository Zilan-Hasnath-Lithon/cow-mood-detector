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
        Angry: "Offer her some fresh green grass , পিঠে একটা মাছি বসেছে, সেটাকে তাড়িয়ে দাও",
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
        <main className="h-[calc(100vh-64px)] flex flex-col justify-center items-center bg-white p-6 font-sans">
            <p className="text-gray-600 text-center text-lg mb-6">
                Upload a photo and detect the mood!
            </p>

            <label className="flex justify-center mb-6">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                />
                <span className="cursor-pointer inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-blue-800 hover:shadow-lg transition-transform duration-200 active:scale-95">
                    Upload Photo
                </span>
            </label>

            {preview && (
                <img
                    src={preview}
                    alt="Cow Preview"
                    className="w-64 h-64 object-cover rounded-xl shadow-md mb-6"
                />
            )}

            {mood && (
                <div className="bg-blue-50 rounded-xl p-5 shadow-inner border border-green-200 w-72 text-center mb-6">
                    <p className="text-xl font-bold text-green-700 mb-2">
                        Mood: <span className="text-green-900">{mood}</span>
                    </p>
                    <p className="text-gray-700 italic">{suggestion}</p>
                </div>
            )}
        </main>
    );
};

export default Main;
