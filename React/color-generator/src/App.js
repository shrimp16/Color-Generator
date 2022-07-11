import './App.css';

import { useState } from 'react';

import { StyledButton } from './Styles/Button.styled';
import { StyledBackground } from './Styles/Background.styled';
import { StyledColorDisplay } from './Styles/ColorDisplay.styled';
import { StyledContainer } from './Styles/Container.styled';

function App() {

  const [color, setColor] = useState('rgb(255, 255, 255)');

  function changeColor() {

    const r = Math.floor(Math.random() * (255 - 0) + 0);
    const g = Math.floor(Math.random() * (255 - 0) + 0);
    const b = Math.floor(Math.random() * (255 - 0) + 0);

    setColor(`rgb(${r}, ${g}, ${b})`);

  }

  return (
    <StyledBackground color={color}>
      <StyledContainer>
        <StyledButton onClick={changeColor}>Change the color!</StyledButton>
        <StyledColorDisplay>{color}</StyledColorDisplay>
      </StyledContainer>
    </StyledBackground>
  );
}

export default App;
