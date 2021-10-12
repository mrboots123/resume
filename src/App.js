import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import contactInfo from './copy/contactInfo.json'
import ContactBar from "./ContactBar";
import SectionHeader from "./SectionHeader";
import TimeLineItem from "./TimeLineItem";
import jobs from "./copy/job.json";
import Education from "./Education";
import photo from './assets/photo.jpeg'
function App() {
  return (
    <div className="container vh-100">
        <ContactBar sites={contactInfo} />
        <div className="d-flex w-100 pb-5">
            <div className="rounded">
                <img src={photo} height={150} width={150}/>
            </div>
            <div className="d-flex flex-column w-100 ms-5">
                <div className="d-flex justify-content-center pb-2">
                    <h1>SOFTWARE ENGINEER</h1>
                </div>
                <p className="vertical-spread text-secondary">Hello! My name is Diego Vazquez, and I am a Software Engineer from Phoenix, Arizona. My Experience ranges from creating end to end websites to creating back end services that power the front-end. I have over 5 years of professional experience and have been coding since the age of 17. Feel free to look at my resume or some of my social platforms.</p>
            </div>
        </div>
        <Education/>
        <SectionHeader title={'Experience'}/>
        {
            jobs.map((job, index) => <TimeLineItem job={job} final={ index === (jobs.length - 1)}/>)
        }
        <div className="pb-5"></div>
    </div>
  );
}

export default App;
