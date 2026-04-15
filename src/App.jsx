import { useState } from "react";
import ExerciseList from "./components/ExerciseList";
import UserForm from "./components/UserForm";
import AIResult from "./components/AIResult";
import ExerciseDetails from "./components/ExerciseDetails";

function App() {
  const [userData, setUserData] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        💪 Gym Helper
      </h1>

      <UserForm onGenerate={setUserData} />

      <AIResult userData={userData} />

      {/* SZCZEGÓŁY */}
      {selectedExercise && (
        <ExerciseDetails
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}

      {/* LISTA */}
      <ExerciseList onSelect={setSelectedExercise} />
    </div>
  );
}

export default App;