import './App.css';

import { useState } from 'react';

import { StyledButton } from './Styles/Button.styled';
import { StyledBackground } from './Styles/Background.styled';

function App() {

  const [color, setColor] = useState('rgb(255, 255, 255)');

  function changeColor(){

    const r = Math.random() * (255 - 0) + 0;
    const g = Math.random() * (255 - 0) + 0;
    const b = Math.random() * (255 - 0) + 0;

    setColor(`rgb(${r}, ${g}, ${b})`);

  }

  return (
    <StyledBackground color={color}>
      <StyledButton onClick={changeColor}>Change the color!</StyledButton>
    </StyledBackground>
  );
}

export default App;
