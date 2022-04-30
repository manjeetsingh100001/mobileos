//import logo from './logo.svg';
import './App.css';

function App() {
 const header1="Mobile Operating System"
  const arr1=["Android","Blackeberry","iphone","Window Phone"]
  const header2="Mobile Manufacturers";
  const arr2=["Samsung","Htc","Micromax","Apple"]
  return (
   <div class="App">
     <h1>{header1}</h1>
    { arr1.map((e)=>{ 
     return  <Card skill= {e} />
     })}
    <div>
      <h1>{header2}</h1>
      { arr2.map((e)=>{ 
     return  <Card skill= {e} />
     })}
    </div>
   </div>
   
  );
}
function Card(props){
 console.log(props)
  return <li>{props.skill}</li>
   
}
export default App;
