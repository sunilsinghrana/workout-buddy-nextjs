import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Workout from "@/models/Workout";


export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectMongoDB();
  const workouts = await Workout.find();
  return NextResponse.json({workouts})
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { title, load, reps } = await req.json();
  await connectMongoDB();
  await Workout.create({title, load, reps});
  return NextResponse.json({ message: "Workouts Created" }, { status: 200 });
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);
    try {
        await connectMongoDB();
        await Workout.findByIdAndDelete(id);
        return NextResponse.json({message: "Workout deleted"}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Not deleted"}, {status: 404})
        
    }
}