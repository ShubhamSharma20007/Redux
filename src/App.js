import logo from './logo.svg';
import './App.css';
import User from './components/User';
import HomeContainer from './containers/HomeContainer';

function App() {
  const value  =[
    {
      name:"Shubha",
      location :"India"
    },
    {
      name:"Pooja",
      location :"India"
    },
    
  ]
  return (
   <>
   {/* <User data={value}/> */}
   <HomeContainer></HomeContainer>
   </>
  );
}

export default App;
