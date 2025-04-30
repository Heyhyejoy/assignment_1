import './App.css';
import { useSpring, animated } from '@react-spring/web';


function Number({n}) {
  const {number} = useSpring({
    from: {number:0},
    to: {number:n},
    delay: 200,
    config: {mass:1, tension:10, friction:10},
  })
  return <animated.div style={{  fontFamily: 'Gmarket Sans', display: 'inline'}}>
    {number.to((n) => n.toFixed(0))}
  </animated.div>;
}

function App() {
  return (
    <div className='App'>
      <h1>
        <Number n={147}/>만
      </h1>
    </div>
  );
}

export default App;
