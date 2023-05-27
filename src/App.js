import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';



const users = [
  {
    lastName:'Doe',
    firstName:'John',
    gender:'male',
    height: 178,
    birth: "1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName:'Delores ',
    firstName:'Obrien',
    gender:'female',
    height: 172,
    birth: "1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
]


function App() {
  return (
    <div className="App">
      <div className='iteration'>
      {
        users.map( user => {
          return <IdCard lastName={user.lastName} firstName={user.firstName} gender={user.gender} height={user.height} birth={user.birth} picture={user.picture} />
        })
      }
      </div>     
      <div className='iteration'>
        <div><Greeting lang = "de" children = "Ludwig"/></div>
        <div><Greeting lang = "fr" children = "Solene"/></div>
        <div><Greeting lang = "en" children = "Michael"/></div>
      </div> 
      <div className='iteration'>
        <div><Random min= {1} max={66}/></div>
      </div> 
      <div className='iteration'>
        <div><BoxColor r= {57} g={200} b={156}/></div>
      </div> 
      <div>
      <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>

<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>

<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
      </div>
    </div>
  );
}

export default App;
