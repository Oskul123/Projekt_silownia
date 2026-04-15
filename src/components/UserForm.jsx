import { useState } from "react";

const UserForm = ({ onGenerate }) => {
  const [goal, setGoal] = useState("masa");
  const [level, setLevel] = useState("początkujący");
  const [days, setDays] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();

    onGenerate({
      goal,
      level,
      days,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-xl shadow-lg mb-6"
    >
      <h2 className="text-2xl mb-4">⚙️ Twoje dane treningowe</h2>

      {/* CEL */}
      <div className="mb-4">
        <label className="block mb-1">🎯 Cel treningowy</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        >
          <option value="masa">Masa</option>
          <option value="redukcja">Redukcja</option>
          <option value="siła">Siła</option>
        </select>
      </div>

      {/* POZIOM */}
      <div className="mb-4">
        <label className="block mb-1">📊 Poziom</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        >
          <option value="początkujący">Początkujący</option>
          <option value="średni">Średni</option>
          <option value="zaawansowany">Zaawansowany</option>
        </select>
      </div>

      {/* DNI TRENINGOWE */}
      <div className="mb-4">
        <label className="block mb-1">📅 Dni treningowe</label>
        <select
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full p-2 rounded bg-gray-700 text-white"
        >
          <option value={3}>3 dni w tygodniu</option>
          <option value={4}>4 dni w tygodniu</option>
          <option value={5}>5 dni w tygodniu</option>
        </select>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 transition p-2 rounded font-bold"
      >
        🤖 Generuj plan treningowy
      </button>
    </form>
  );
};

export default UserForm;