import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';



function App() {
  const [currentNumber, updateCurrentNumber] = useState(1);
  const { width, height } = useWindowSize();
  const [generateConfetti, startConfetti] = useState(false);

  const targetNumber = 147;
  
  //Animation to count up 1-147
  const countUpAnimation = useSpring({
    from: { number: 1 },
    number: currentNumber,
    config: {
      mass: 5,
      friction: 120,
      tension: 150,
    },
  });
  //confetti animation after 600ms 
  //count up number to 147
  useEffect(() => {
    const timer = setTimeout(() => {
      updateCurrentNumber(targetNumber);
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
        <animated.span>
          {countUpAnimation.number.to((n) => Math.round(n))}
        </animated.span>만
      </h1>
    </div>
  );
}

export default App;