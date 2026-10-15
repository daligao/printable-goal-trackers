export const templates = [
  {
    id: "30-day-habit-challenge",
    title: "30-Day Habit Challenge",
    subtitle: "A small daily action, repeated until it feels like yours.",
    purpose: "Choose one habit, make it easy to start, and mark each day you show up.",
    fields: ["Habit I am practicing", "My smallest version", "Why it matters"],
    instructions: [
      "Write one habit and a version small enough to do on a busy day.",
      "Mark a day after you finish it; an imperfect streak still counts.",
      "Use the weekly notes to notice what made the habit easier or harder."
    ],
    type: "habit",
    days: 30
  },
  {
    id: "2027-goals-tracker",
    title: "2027 Goals Tracker",
    subtitle: "Choose a few meaningful goals and turn each one into a next step.",
    purpose: "Keep the year visible without turning it into an overwhelming plan.",
    fields: ["My 2027 theme", "A promise to myself", "Review month"],
    instructions: [
      "Limit this page to goals that genuinely matter this year.",
      "Give every goal one next action and one milestone you can recognize.",
      "Review the page regularly; revise the plan instead of abandoning it."
    ],
    type: "goals"
  },
  {
    id: "7-day-declutter-challenge",
    title: "7-Day Declutter Challenge",
    subtitle: "One small space a day, with a clear finish line.",
    purpose: "Make room gradually by focusing on manageable categories instead of an entire home.",
    fields: ["My donation / recycle plan", "A space I want to enjoy", "Start date"],
    instructions: [
      "Set a timer that feels manageable; stopping on time is part of the challenge.",
      "Use the suggested area as a starting point and skip anything unsafe or sentimental.",
      "Move donations and recycling out of the home promptly when you can."
    ],
    type: "declutter",
    tasks: [
      ["Day 1", "Entry or bag zone", "Remove 10 items that do not belong here."],
      ["Day 2", "One clothing drawer", "Keep what fits and is worn; set aside the rest."],
      ["Day 3", "Bathroom shelf", "Discard expired items according to local guidance."],
      ["Day 4", "Paper pile", "Recycle duplicates and file the next useful action."],
      ["Day 5", "Kitchen counter", "Clear one surface and return only daily essentials."],
      ["Day 6", "Digital downloads", "Delete obvious duplicates and old screenshots."],
      ["Day 7", "Donation bag", "Finish one bag and choose its next destination."]
    ]
  },
  {
    id: "reading-challenge",
    title: "Reading Challenge",
    subtitle: "Make space for the books you want to meet this season.",
    purpose: "Set a flexible reading intention and collect small notes as you go.",
    fields: ["My reading goal", "Start date", "Finish date"],
    instructions: [
      "Choose a goal that fits your season: pages, minutes, books, or a mix.",
      "Add a title when you start it and mark the finish when you are done.",
      "Use the notes column for a quote, idea, or reason to recommend it."
    ],
    type: "reading"
  }
];
