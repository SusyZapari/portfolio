import React, {Component} from "react";
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import wallpaper5 from '../images/wallpaper5.jpeg';
import sezf from '../images/sezf.jpg';
import './AboutMe.css';

class AboutMe extends Component {
    render(){
        return (
            <div id="AboutMe">
                <hr></hr>
            <h1 id="aboutmetitle">About me</h1>
            <div className="p-3 bg-secondary my-2 rounded">
            <img className='wallpaper5' background fluid src={wallpaper5} alt={"..."}/>
        <Toast>
          <ToastHeader>
            Summary
          </ToastHeader>
          <ToastBody>
          As a passionate life-long learner, I constantly acquire new knowledge; that's 
          how I discovered the tech world, which fuels my interest in continuous 
          professional development. Nowadays I am Front end Developer that's why I am 
          seeking a job position in the field of technology, besides I am interested in 
          entrepreneurship and social impact proposals. 
          </ToastBody>
        </Toast>
        <img className='sezf'src={sezf}/>
      </div>
            <Button href= "https://github.com/SusyZapari/susyzapari.github.io/raw/develop/SusanaZapari_Resume.pdf" rel="noopnener noreferrer" target="_blank">Go to my CV</Button>
            
            <h1>Abilities</h1>
            <Button href= "/.Home.js">Skills</Button>
            <Button onClick>Soft skills</Button>
            <Button onClick>My background</Button>
            </div>
        );
    }

}

export default AboutMe;