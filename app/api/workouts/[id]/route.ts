import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Workout from "@/models/Workout";

// Response for get request
export const GET = async (req: NextRequest, res: NextResponse) => {
    const id = req.url.split("workouts/")[1]
    try {
        await connectMongoDB() // connect to database
        await Workout.findById(id)
        return NextResponse.json({ message: "GET Workout" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "NOT FOUND" }, { status: 404 });
    }
}

// Response for put request
export const PUT = async (req: NextRequest, res: NextResponse) => {
    const id = req.url.split("workouts/")[1]
    const { title, load, reps } = await req.json();
    try {
        await connectMongoDB() // connect to database
        await Workout.findByIdAndUpdate(id, {title, load, reps}, {new: true})
        return NextResponse.json({ message: "Workout Updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Workout Not Updated" }, { status: 404 });
    }
}

// Response for DELETE request
export const DELETE = async (req: NextRequest, res: NextResponse) => {
    const id = req.url.split("workouts/")[1]
    try {
        await connectMongoDB();
        await Workout.findByIdAndDelete(id);
        return NextResponse.json({message: "Workout deleted"}, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Not deleted"}, {status: 404})
        
    }
  }
