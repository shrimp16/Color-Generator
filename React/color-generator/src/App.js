import './App.css';

import { StyledButton } from './Styles/Button.styled';
import { StyledBackground } from './Styles/Background.styled';

function App() {
  return (
    <StyledBackground>
      <StyledButton>Change the color!</StyledButton>
    </StyledBackground>
  );
}

export default App;
