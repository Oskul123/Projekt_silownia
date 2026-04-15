import exercises from "../data/exercises";

const AIResult = ({ userData }) => {
  if (!userData) return null;

  let filtered = exercises;

  // 🔒 poziom użytkownika
  if (userData.level === "początkujący") {
    filtered = filtered.filter(ex => ex.level !== "zaawansowany");
  }

  // 🎲 losowanie ćwiczeń z puli
  const getExercises = (muscle) => {
    return filtered
      .filter(ex => ex.muscle === muscle)
      .sort(() => 0.5 - Math.random());
  };

  // 🧠 serie i powtórzenia (realistyczne)
  const getSetsAndReps = () => {
    const { goal, level } = userData;

    let sets = 3;
    let reps = "10–12";

    if (goal === "masa") {
      sets = 3;
      reps = "8–12";
    }

    if (goal === "redukcja") {
      sets = 3;
      reps = "10–15";
    }

    if (goal === "siła") {
      sets = 3;
      reps = "4–6";
    }

    if (level === "zaawansowany") {
      sets = 4;
    }

    return { sets, reps };
  };

  const { sets, reps } = getSetsAndReps();

  // 📅 split zależny od dni
  const getSplit = (days) => {
    if (days === 3) {
      return [
        { day: "Dzień 1", name: "Klatka + Triceps", muscles: ["klatka", "triceps"] },
        { day: "Dzień 2", name: "Plecy + Biceps", muscles: ["plecy", "biceps"] },
        { day: "Dzień 3", name: "Nogi + Brzuch", muscles: ["nogi", "brzuch"] },
      ];
    }

    if (days === 4) {
      return [
        { day: "Dzień 1", name: "Klatka", muscles: ["klatka"] },
        { day: "Dzień 2", name: "Plecy", muscles: ["plecy"] },
        { day: "Dzień 3", name: "Nogi", muscles: ["nogi"] },
        { day: "Dzień 4", name: "Barki + Ramiona", muscles: ["barki", "biceps", "triceps"] },
      ];
    }

    if (days === 5) {
      return [
        { day: "Dzień 1", name: "Klatka", muscles: ["klatka"] },
        { day: "Dzień 2", name: "Plecy", muscles: ["plecy"] },
        { day: "Dzień 3", name: "Nogi", muscles: ["nogi"] },
        { day: "Dzień 4", name: "Barki", muscles: ["barki"] },
        { day: "Dzień 5", name: "Ramiona + Brzuch", muscles: ["biceps", "triceps", "brzuch"] },
      ];
    }

    return [];
  };

  const plan = getSplit(userData.days);

  // 🔥 FIX: MINIMUM 3 ĆWICZENIA NA DZIEŃ
  const getDayExercises = (muscles) => {
    let pool = [];

    muscles.forEach((m) => {
      pool.push(...getExercises(m));
    });

    // mieszanie
    pool = pool.sort(() => 0.5 - Math.random());

    // 🔥 gwarancja minimum 3 ćwiczeń
    const minCount = 3;

    return pool.slice(0, Math.max(minCount, pool.length));
  };

  return (
    <div className="bg-green-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl mb-4">🤖 Twój plan treningowy</h2>

      {/* INFO */}
      <div className="mb-6 bg-green-700 p-3 rounded">
        <p>🎯 Cel: <b>{userData.goal}</b></p>
        <p>📊 Poziom: <b>{userData.level}</b></p>
        <p>📅 Dni treningowe: <b>{userData.days}</b></p>
        <p>
          🏋️ Serie: <b>{sets}</b> | Powtórzenia: <b>{reps}</b>
        </p>
      </div>

      {/* PLAN */}
      {plan.map((day, index) => {
        const exercisesForDay = getDayExercises(day.muscles);

        return (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold mb-2">
              {day.day} — {day.name}
            </h3>

            <ul className="space-y-2">
              {exercisesForDay.map((ex) => (
                <li key={ex.id} className="bg-green-700 p-2 rounded">
                  <b>{ex.name}</b>
                  <br />
                  <span className="text-sm text-gray-200">
                    {sets} serie × {reps}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default AIResult;