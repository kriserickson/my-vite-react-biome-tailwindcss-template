import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [updateDate, setUpdateDate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (updateDate) {
        setCurrentDate(new Date());
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [updateDate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="mb-4">
        <button type="button" onClick={() => setUpdateDate(!updateDate)} className={updateDate ? 'red' : 'blue'}>
          {updateDate ? 'Stop Updating Date' : 'Start Updating Date'}
        </button>
      </div>
      <div className="text-slate-700">
        The current date is: {currentDate.toDateString()} - {currentDate.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default App;
