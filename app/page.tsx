import {RiDeleteBin6Line} from 'react-icons/ri'

async function getData() {
  const res = await fetch("http://localhost:3000/api/workouts");
  const data = await res.json();
  console.log(data);
  
  return data;
}

export default async function Home() {
  const workoutData = await getData();

  return <main>
    <div className="workouts flex justify-around my-2">
      <div className="w-[80%]">
        {workoutData.workouts && workoutData.workouts.map((data: any )=> (
          <div className='w-full h-32 bg-white flex justify-between my-4' key={data._id}>
          <div className='px-3'>
            <h1 className='font-bold text-2xl text-green-500 my-2'>{data.title}</h1>
            <p className='font-bold'>Load(kg): {data.load}</p>
            <p className='font-bold'>Number of reps: {data.reps}</p>
            <p className='text-gray-600'>less then a minute ago</p>
          </div>
          <div className='m-3'>
            <div className='w-10 h-10 bg-gray-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-400'><RiDeleteBin6Line/></div>
          </div>
        </div>
        ))}
    </div>
    </div>
  </main>;
}

