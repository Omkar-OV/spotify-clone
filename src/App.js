import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MainMenu } from './Components/MainMenu';
import { RightMenu } from './Components/RightMenu';
import {MainContainer} from './Components/MainContainer';

function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <MainMenu/>
      <MainContainer />
      <RightMenu/>
      
      <div className="background"></div>
      </div>
  );
}

export default App;
