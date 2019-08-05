import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css'
import Input from './component/Input/Input';
import Button from './component/Button/Button';
import swal from 'sweetalert';
import Particles from 'react-particles-js';
import Logo1 from './Logo1.png';

const particlesOptions={
  particles: {
                  
                  number:{
                  value:100,
                  density:{
                    enable:true,
                    value_area:700
                  }
                  }
                }
}
class App extends Component
{
  constructor(){
    super();
    this.state={
      Input:''
      
    }
  }
  InputData=(event)=>
  {
    this.setState({Input:event.target.value});
  }
  Clickevent=(Input)=>{
    
    let DOB=this.state.Input;
  
  
  let yearThen = parseInt(DOB.substring(0,4), 10);
  let monthThen = parseInt(DOB.substring(5,7), 10);
  let dayThen = parseInt(DOB.substring(8,10), 10);
  
  let today = new Date();
  let birthday = new Date(yearThen, monthThen-1, dayThen);


  let differenceInMilisecond = today.valueOf() - birthday.valueOf();
   
  let year_age = Math.floor(differenceInMilisecond / 31536000000);
      
  let day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
  let month_age = Math.floor(day_age/30);
  
  let tMnt= (month_age + (year_age*12));
         
  let day = day_age % 30;
  let tDays =(tMnt*30) + day;
         
  let hours=tDays*24 
         
             
  let seconds=tDays*24*3600
    let space="           ";   

            
  let milliseconds=  tDays*24*3600*1000
  if ((today.getMonth() === birthday.getMonth()) && (today.getDate() === birthday.getDate())) {
            swal("Happy B'day!!!");
        }
   document.getElementById('head').innerHTML=(`Given D-o-B:${dayThen}-${monthThen}-${yearThen}`);
  document.getElementById('result').innerHTML=(`years:${year_age}${space}Month:${tMnt}${space}Days:${tDays}${space}Hours:${hours}<br/><br/>${space}Seconds:${seconds}${space}MilliSeconds:${milliseconds}`);
            
    
    }
  render(){
   return (
    <div>
     <Particles className="particles" params={particlesOptions} />
    <h1 className=" tc pa3">Age Calculator</h1>
    <div className="gback center form">
    <div className=" pa5 br3 shadow-10">
    <div className="tc">
    <Input value={this.InputData}/>
    <br/>
    <Button data={this.Clickevent}/>
    </div>
    </div>
    </div>
    <br/>
    <h1 id="head">Your Age</h1>
    <div className="result center size">
    <div className="  br3 shadow-10">
    
    <h1 id="result"><img src={Logo1} alt='img not found' style={{ height: 100, width: 200 }}/></h1>
    </div>
    </div>
    
    </div>
  ); 
  }
  
}

export default App;
