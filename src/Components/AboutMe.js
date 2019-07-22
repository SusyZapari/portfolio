import React, {Component} from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
class AboutMe extends Component {
    render(){
        return (
            <div>
                <hr></hr>
            <h1 id="aboutmetitle">About me</h1>
            <div className="p-3 bg-secondary my-2 rounded">
        <Toast>
          <ToastHeader>
            Summary
          </ToastHeader>
          <ToastBody>
          As a passionate life-long learner, I constantly acquire new knowledge; that's how 
          I discovered the tech world, which fuels my interest in continuous professional 
          development. Nowadays I'm studying web development at Laboratoria. I am seeking a job
          position in the field of technology and interested in entrepreneurship and social impact
          proposals.
          </ToastBody>
        </Toast>
      </div>
            <button onclick>Go to my CV</button>
            
            <h1>Abilities</h1>
            <button onclick= "/.Home.js">Skills</button>
            <button onclick>Soft skills</button>
            <button onclick>My background</button>
            </div>
        );
    }

}

export default AboutMe;