import { useSpring, animated } from '@react-spring/web';
import { useState, useEffect } from 'react';

function App() {
  const [currentNumber, updateCurrentNumber] = useState(1);
  const targetNumber = 147;
  
  // Animation to count up 1-147
  const countUpAnimation = useSpring({
    from: { number: 1 },
    number: currentNumber,
    config: {
      mass: 5,
      friction: 120,
      tension: 150,
    },
  });

  //generate after 600ms
  useEffect(() => {
    const timer = setTimeout(() => {
      updateCurrentNumber(targetNumber);
    }, 600);
    //only one time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>
        <animated.span>
          {countUpAnimation.number.to((n) => Math.round(n))}
        </animated.span>
        만
      </h1>
    </div>
  );
}

export default App;
