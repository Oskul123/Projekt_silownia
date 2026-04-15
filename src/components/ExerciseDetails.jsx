const ExerciseDetails = ({ exercise, onClose }) => {
  if (!exercise) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-6">
      <h2 className="text-2xl mb-4">{exercise.name}</h2>

      <p>Mięsień: {exercise.muscle}</p>
      <p>Poziom: {exercise.level}</p>

      <p className="mt-4">{exercise.description}</p>

      <div className="mt-4">
        <h3>Jak wykonać:</h3>
        <p>{exercise.instructions || "Brak instrukcji"}</p>
      </div>

      <button
        onClick={onClose}
        className="mt-4 bg-red-500 px-4 py-2 rounded"
      >
        Zamknij
      </button>
    </div>
  );
};

export default ExerciseDetails;