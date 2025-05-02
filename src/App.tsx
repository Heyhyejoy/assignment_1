import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';



function App() {
  const [currentNumber, updateCurrentNumber] = useState<number>(1);
  const { width, height } = useWindowSize();
  const [generateConfetti, startConfetti] = useState(false);

  const targetNumber: number = 147;

   //add up number from 1 to 147
  useEffect(() => {
    if (currentNumber < targetNumber) {
      const timeout = setTimeout(() => {
        updateCurrentNumber((prev) => prev + 1);
      }, 15); 
  
      return () => clearTimeout(timeout);
    }
  }, [currentNumber]);   

  //confetti animation after 600ms 
  useEffect(() => {
    const timer = setTimeout(() => {
      startConfetti(true);
    }, 600);
  
    //generate it only one time
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div>
      <div 
        className='backgroundGradient' 
        style={{ width, height }}> 
      </div>
      {generateConfetti && (
        <Confetti
          width={width}
          height={height}
          colors={['#ADD8E6', '#85bbec', '#cbf5f7']}
        />
      )}
      <h1>
        {currentNumber}만
      </h1>
    </div>
  );
}

export default App;