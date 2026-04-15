const ExerciseCard = ({ exercise, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(exercise)}
      className="bg-gray-800 p-4 rounded-xl shadow cursor-pointer hover:bg-gray-700"
    >
      <h3 className="text-xl font-bold">{exercise.name}</h3>
      <p>Mięsień: {exercise.muscle}</p>
      <p>Poziom: {exercise.level}</p>
    </div>
  );
};

export default ExerciseCard;