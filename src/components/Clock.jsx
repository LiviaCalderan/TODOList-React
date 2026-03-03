import { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex justify-center align-items-center h-2">
      <div className='m-3 p-4'> {time.toLocaleTimeString()} </div>
    </div>
  );
}

export default Clock