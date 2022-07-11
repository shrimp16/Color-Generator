import { useState } from 'react';

import { StyledButton } from '../Styles/Button.styled';
import { StyledBackground } from '../Styles/Background.styled';
import { StyledColorDisplay } from '../Styles/ColorDisplay.styled';
import { StyledContainer } from '../Styles/Container.styled';

import CustomColor from './CustomColor';

function App() {

  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
  const [inputView, setInputView] = useState(true);

  function changeColor() {

    const r = Math.floor(Math.random() * (255 - 0) + 0);
    const g = Math.floor(Math.random() * (255 - 0) + 0);
    const b = Math.floor(Math.random() * (255 - 0) + 0);

    const newColor = {
      r: r,
      g: g,
      b: b
    }

    setColor(newColor);

  }

  function swapInputView(){
    setInputView(!inputView);
  }

  return (
    <StyledBackground color={`rgb(${color.r}, ${color.g}, ${color.b})`}>
      <StyledContainer>
        <StyledButton onClick={changeColor}>Change the color!</StyledButton>
        <StyledButton onClick={swapInputView}>Custom Color</StyledButton>
        <CustomColor inputView={inputView} setColor={setColor} color={color}></CustomColor>
        <StyledColorDisplay>RGB {`${color.r} , ${color.g} , ${color.b}`}</StyledColorDisplay>
      </StyledContainer>
    </StyledBackground>
  );
}

export default App;
