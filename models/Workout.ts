import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
    title: String,
    load: Number,
    reps: Number,
  })

  const Workout = mongoose.models.Workout || mongoose.model("Workout", WorkoutSchema);

  export default Workout;