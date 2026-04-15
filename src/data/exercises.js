const exercises = [
  // KLATKA
  {
    id: 1,
    name: "Wyciskanie sztangi leżąc",
    muscle: "klatka",
    level: "średni",
    type: "push",
    description: "Podstawowe ćwiczenie na rozwój klatki piersiowej",
    instructions: "Połóż się na ławce, stopy na ziemi. Opuść sztangę do klatki i wypchnij w górę."
  },
  {
    id: 2,
    name: "Wyciskanie hantli na skosie",
    muscle: "klatka",
    level: "średni",
    type: "push",
    description: "Ćwiczenie na górną część klatki",
    instructions: "Ustaw ławkę pod kątem. Opuszczaj hantle kontrolowanie i wypychaj w górę."
  },
  {
    id: 3,
    name: "Rozpiętki hantlami",
    muscle: "klatka",
    level: "początkujący",
    type: "push",
    description: "Izolowane ćwiczenie na klatkę",
    instructions: "Leżąc na ławce rozkładaj ręce na boki i wracaj do góry."
  },

  // PLECY
  {
    id: 4,
    name: "Martwy ciąg",
    muscle: "plecy",
    level: "zaawansowany",
    type: "pull",
    description: "Ćwiczenie wielostawowe na całe ciało",
    instructions: "Podnieś sztangę z ziemi prostując plecy i biodra."
  },
  {
    id: 5,
    name: "Podciąganie na drążku",
    muscle: "plecy",
    level: "średni",
    type: "pull",
    description: "Buduje szerokość pleców",
    instructions: "Podciągnij się aż broda znajdzie się nad drążkiem."
  },
  {
    id: 6,
    name: "Wiosłowanie sztangą",
    muscle: "plecy",
    level: "średni",
    type: "pull",
    description: "Ćwiczenie na grubość pleców",
    instructions: "Pochyl się i przyciągaj sztangę do brzucha."
  },
  {
    id: 7,
    name: "Ściąganie drążka do klatki",
    muscle: "plecy",
    level: "początkujący",
    type: "pull",
    description: "Łatwiejsza alternatywa dla podciągania",
    instructions: "Ściągaj drążek do klatki kontrolując ruch."
  },

  // NOGI
  {
    id: 8,
    name: "Przysiady ze sztangą",
    muscle: "nogi",
    level: "średni",
    type: "legs",
    description: "Podstawowe ćwiczenie na nogi",
    instructions: "Zejdź w dół trzymając plecy prosto i wróć do góry."
  },
  {
    id: 9,
    name: "Wykroki",
    muscle: "nogi",
    level: "początkujący",
    type: "legs",
    description: "Ćwiczenie na nogi i pośladki",
    instructions: "Zrób krok do przodu i ugnij kolana."
  },
  {
    id: 10,
    name: "Prostowanie nóg",
    muscle: "nogi",
    level: "początkujący",
    type: "legs",
    description: "Izolacja czworogłowych",
    instructions: "Prostuj nogi na maszynie."
  },
  {
    id: 11,
    name: "Uginanie nóg",
    muscle: "nogi",
    level: "początkujący",
    type: "legs",
    description: "Ćwiczenie na tył uda",
    instructions: "Uginaj nogi na maszynie."
  },

  // BARKI
  {
    id: 12,
    name: "Wyciskanie żołnierskie",
    muscle: "barki",
    level: "średni",
    type: "push",
    description: "Ćwiczenie na barki",
    instructions: "Wyciskaj sztangę nad głowę."
  },
  {
    id: 13,
    name: "Unoszenie hantli bokiem",
    muscle: "barki",
    level: "początkujący",
    type: "push",
    description: "Ćwiczenie na boczny akton",
    instructions: "Unoś hantle bokiem do wysokości barków."
  },
  {
    id: 14,
    name: "Face pull",
    muscle: "barki",
    level: "średni",
    type: "pull",
    description: "Ćwiczenie na tylny akton barków",
    instructions: "Przyciągaj linę do twarzy."
  },

  // BICEPS
  {
    id: 15,
    name: "Uginanie ramion ze sztangą",
    muscle: "biceps",
    level: "początkujący",
    type: "pull",
    description: "Ćwiczenie na biceps",
    instructions: "Zginaj ręce trzymając sztangę."
  },
  {
    id: 16,
    name: "Uginanie hantli",
    muscle: "biceps",
    level: "początkujący",
    type: "pull",
    description: "Izolacja bicepsa",
    instructions: "Unoś hantle do góry z kontrolą."
  },

  // TRICEPS
  {
    id: 17,
    name: "Prostowanie ramion na wyciągu",
    muscle: "triceps",
    level: "początkujący",
    type: "push",
    description: "Ćwiczenie na triceps",
    instructions: "Prostuj ramiona na wyciągu."
  },
  {
    id: 18,
    name: "Pompki na poręczach",
    muscle: "triceps",
    level: "średni",
    type: "push",
    description: "Ćwiczenie wielostawowe",
    instructions: "Opuszczaj ciało i wypychaj w górę."
  },

  // BRZUCH
  {
    id: 19,
    name: "Plank",
    muscle: "brzuch",
    level: "początkujący",
    type: "core",
    description: "Ćwiczenie stabilizacyjne",
    instructions: "Utrzymuj ciało w jednej linii."
  },
  {
    id: 20,
    name: "Brzuszki",
    muscle: "brzuch",
    level: "początkujący",
    type: "core",
    description: "Ćwiczenie na mięśnie brzucha",
    instructions: "Unoś tułów w górę."
  },
  {
  id: 21,
  name: "Wyciskanie sztangi skos dodatni",
  muscle: "klatka",
  level: "średni",
  type: "push",
  description: "Góra klatki",
  instructions: "Ławka skośna, kontrolowane opuszczanie i wyciskanie."
},
{
  id: 22,
  name: "Wyciskanie hantli płasko",
  muscle: "klatka",
  level: "średni",
  type: "push",
  description: "Stabilizacja i masa",
  instructions: "Hantle w linii klatki, pełny zakres ruchu."
},
{
  id: 23,
  name: "Dipy na klatkę",
  muscle: "klatka",
  level: "zaawansowany",
  type: "push",
  description: "Ciężkie ćwiczenie masowe",
  instructions: "Pochyl ciało do przodu, schodź głęboko."
},
{
  id: 24,
  name: "Rozpiętki na bramie",
  muscle: "klatka",
  level: "początkujący",
  type: "push",
  description: "Izolacja",
  instructions: "Stałe napięcie mięśnia."
},
{
  id: 25,
  name: "Wiosłowanie hantlą",
  muscle: "plecy",
  level: "średni",
  type: "pull",
  description: "Jednostronne wzmocnienie",
  instructions: "Przyciągaj łokieć do biodra."
},
{
  id: 26,
  name: "Wiosłowanie na maszynie",
  muscle: "plecy",
  level: "początkujący",
  type: "pull",
  description: "Stabilny ruch",
  instructions: "Kontroluj fazę negatywną."
},
{
  id: 27,
  name: "Martwy ciąg rumuński",
  muscle: "plecy",
  level: "średni",
  type: "pull",
  description: "Tył ciała",
  instructions: "Biodra w tył, proste plecy."
},
{
  id: 28,
  name: "Ściąganie szerokim chwytem",
  muscle: "plecy",
  level: "początkujący",
  type: "pull",
  description: "Szerokość pleców",
  instructions: "Nie bujaj ciałem."
},
{
  id: 29,
  name: "Hack squat",
  muscle: "nogi",
  level: "średni",
  type: "legs",
  description: "Ciężkie nogi",
  instructions: "Pełny zakres ruchu."
},
{
  id: 30,
  name: "Wykroki z hantlami",
  muscle: "nogi",
  level: "średni",
  type: "legs",
  description: "Stabilizacja i siła",
  instructions: "Kolano nie wychodzi za palce."
},
{
  id: 31,
  name: "Suwnica",
  muscle: "nogi",
  level: "początkujący",
  type: "legs",
  description: "Bezpieczna maszyna",
  instructions: "Kontrolowany ruch."
},
{
  id: 32,
  name: "Uginanie nóg leżąc",
  muscle: "nogi",
  level: "początkujący",
  type: "legs",
  description: "Dwugłowe uda",
  instructions: "Powolny ruch."
},
{
  id: 33,
  name: "Arnold press",
  muscle: "barki",
  level: "średni",
  type: "push",
  description: "Pełne barki",
  instructions: "Rotacja nad głową."
},
{
  id: 34,
  name: "Unoszenie hantli przód",
  muscle: "barki",
  level: "początkujący",
  type: "push",
  description: "Przedni akton",
  instructions: "Kontrola ruchu."
},
{
  id: 35,
  name: "Odwrotne rozpiętki",
  muscle: "barki",
  level: "średni",
  type: "pull",
  description: "Tylny akton",
  instructions: "Nie szarp."
},
{
  id: 36,
  name: "Uginanie młotkowe",
  muscle: "biceps",
  level: "średni",
  type: "pull",
  description: "Grubość ramion",
  instructions: "Neutralny chwyt."
},
{
  id: 37,
  name: "Francuskie wyciskanie",
  muscle: "triceps",
  level: "średni",
  type: "push",
  description: "Długi triceps",
  instructions: "Kontrola łokci."
}
];

export default exercises;