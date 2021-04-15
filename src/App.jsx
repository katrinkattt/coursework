import './App.css';
import { Btn } from './components/btn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>frame</p>
        <div>
          <Btn text="ok" heigh={30} func={() => console.log('click')} />
        </div>
      </header>
    </div>
  );
}

export default App;
