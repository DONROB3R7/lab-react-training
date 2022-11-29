import './App.css';


// Import Componets
import IdCard from './components/IdCard';
import Greetings  from './components/Greetings';
import Random  from './components/Random';
import BoxColor from './components/BoxColor';


function App() {
  return (
    <div className='app-wrapper'>
      <h2>Iteration <span>1</span> | Component: IdCard</h2>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2>Iteration <span>2</span> | Component: Greetings</h2>
      <div className='greetigs-card'>
          <Greetings  name='John' lang="de" />
          <Greetings  name='John' lang="fr" />
      </div>
      <h2>Iteration <span>3</span> | Component: Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>Iteration <span>4</span> | Component: BoxColor</h2>
      <BoxColor red={255} green={0} blue={0} />
      <BoxColor red={128} green={255} blue={0} />
      </div>

  );
}

export default App;
