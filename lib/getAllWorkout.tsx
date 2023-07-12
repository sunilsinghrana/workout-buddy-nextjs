export default async function getAllWorkouts() {
    const res = await fetch("http://localhost:3000/api/workouts")
    if (!res.ok) throw new Error('failed to fetch data')
    const data = await res.json()

    return data.workouts   
}