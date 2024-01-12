// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// async function main() {
//   console.log(`Start seeding ...`);

//   // Seed Users
//   const users = [];
//   const list = ["vedant1", "anjali1", "trainer1"];

//   for (const item of list) {
//     const user = await prisma.user.create({
//       data: { name: item, email: `${item}@gymapp.com` },
//     });
//     users.push(user);
//   }

//   // Seed Sessions
//   const sessions = [];
//   for (let i = 1; i <= 5; i++) {
//     const session = await prisma.session.create({
//       data: { userId: users[i % users.length].id },
//     });
//     sessions.push(session);
//   }

//   // Seed Exercises
//   const exercises = [];
//   for (let i = 1; i <= 5; i++) {
//     const exercise = await prisma.exercise.create({
//       data: { name: `Exercise ${i}` },
//     });
//     exercises.push(exercise);
//   }

//   // Seed SessionExercises
//   for (const session of sessions) {
//     for (const exercise of exercises) {
//       await prisma.sessionExercise.create({
//         data: {
//           sessionId: session.id,
//           exerciseId: exercise.id,
//         },
//       });
//     }
//   }

//   // Seed FocusAreas
//   const focusAreaData = [
//     { name: "Chest", muscleGroup: "Upper Body" },
//     { name: "Back", muscleGroup: "Upper Body" },
//     { name: "Legs", muscleGroup: "Lower Body" },
//     { name: "Arms", muscleGroup: "Upper Body" },
//     { name: "Shoulders", muscleGroup: "Upper Body" },
//   ];

//   for (const { name, muscleGroup } of focusAreaData) {
//     await prisma.focusArea.create({
//       data: { name, muscleGroup },
//     });
//   }
//   // Seed ExerciseFocusAreas
//   for (const exercise of exercises) {
//     for (let i = 1; i <= 5; i++) {
//       await prisma.exerciseFocusArea.create({
//         data: { exerciseId: exercise.id, focusAreaId: i },
//       });
//     }
//   }

//   // Seed WeightUnits
//   for (const name of ["kg", "lbs"]) {
//     await prisma.weightUnit.create({
//       data: { name },
//     });
//   }

//   // Seed SessionExerciseSets
//   const sessionExercises = await prisma.sessionExercise.findMany();
//   for (const sessionExercise of sessionExercises) {
//     await prisma.sessionExerciseSet.create({
//       data: {
//         sessionExerciseId: sessionExercise.id,
//         roundCount: Math.floor(Math.random() * 5) + 1, // Random rounds between 1 and 5
//         weight: Math.floor(Math.random() * 100), // Random weight
//         weightUnitId: Math.floor(Math.random() * 2) + 1, // Randomly select between 1 and 2
//       },
//     });
//   }

//   console.log(`Seeding finished.`);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
