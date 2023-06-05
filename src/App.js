//Components
import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';

//Images
import noGlassesImg from './assets/images/no-glasses.png';
import withGlassesImg from './assets/images/with-glasses.png';

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
      <div className='iteration cards'>
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
      <div  className='iteration'>
        <Rating children= {3} />
      </div>
      <div className='iteration'>
        <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>
      <div className='iteration'>
          <LikeButton />
      </div>
      <div className='iteration'>
          <ClickablePicture img={noGlassesImg} imgClicked={withGlassesImg}/>
      </div>
      <div className='iteration NOTCOMPLETED'> 
          <Dice />
      </div>
      <div className='iteration'>
      <Carousel
      images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
      />
      </div>
      <div className='iteration'>
      <NumbersTable limit={12} />
      </div>

    </div>
  );
}

export default App;
