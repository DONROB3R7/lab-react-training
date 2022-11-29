import './App.css';


// Import IdCard 
import IdCard from './components/IdCard';
import Greetings  from './components/Greetings';

function App() {
  return (
    <>
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
      <div className='greetigs-card'>
          <Greetings  name='John' lang="de" />
          <Greetings  name='John' lang="fr" />
      </div>
    </>
  );
}

export default App;
