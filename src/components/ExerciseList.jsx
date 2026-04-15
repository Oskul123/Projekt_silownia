import { useState } from "react";
import exercises from "../data/exercises";
import ExerciseCard from "./ExerciseCard";

const ExerciseList = ({ onSelect }) => {
  const [search, setSearch] = useState("");
  const [muscleFilter, setMuscleFilter] = useState("wszystkie");

  // filtrowanie
  const filteredExercises = exercises.filter((ex) => {
    const matchesSearch =
      ex.name.toLowerCase().includes(search.toLowerCase()) ||
      ex.muscle.toLowerCase().includes(search.toLowerCase());

    const matchesMuscle =
      muscleFilter === "wszystkie" || ex.muscle === muscleFilter;

    return matchesSearch && matchesMuscle;
  });

  return (
    <div>
      <h2 className="text-2xl mb-4">📋 Lista ćwiczeń</h2>

      {/* FILTRY */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        
        {/* WYSZUKIWARKA */}
        <input
          type="text"
          placeholder="🔍 Szukaj ćwiczenia..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        {/* FILTR PARTII */}
        <select
          value={muscleFilter}
          onChange={(e) => setMuscleFilter(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="wszystkie">Wszystkie partie</option>
          <option value="klatka">Klatka</option>
          <option value="plecy">Plecy</option>
          <option value="nogi">Nogi</option>
          <option value="barki">Barki</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="brzuch">Brzuch</option>
        </select>
      </div>

      {/* LISTA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredExercises.map((ex) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            onSelect={onSelect}
          />
        ))}
      </div>

      {/* BRAK WYNIKÓW */}
      {filteredExercises.length === 0 && (
        <p className="mt-4 text-gray-400">
          Brak ćwiczeń dla wybranych filtrów
        </p>
      )}
    </div>
  );
};

export default ExerciseList;