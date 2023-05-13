import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './azure.svg';
import term1 from './assets/terminal-1.png';
import term2 from './assets/terminal-2.png';
import azure_icons from './assets/azure-icons.png';
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
  
    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <div className='Container'>
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Azure Devops</h1>
                <img src={azure_icons} className="" alt="logo"/>
<p> I created this page and Big Friendly Button as a way to show off tools and techniques that I have learned in Devops and GitOps, and the hardest part is showing off.
Since all the proccesses that went into creating this is all working hard in the background in containers and repositories its hard to show off what went into it all. 
This page is running on nginx-fpm inside of kubernetes on a Linode instance, the containers built with ArgoCD and the code served from Github , all being monitored on Grafana with Prometheus as its Datasource, and still the most impressive thing is the colour palleted chosen for the particle js floating in the background. </p>
<img src={term1} className="term1" alt="terminal"/>
<p>The approach I took in building this was at first planned to be a Devops instance, with Jenkins serving as the CI/CD pipeline. the code on Github and the services on Kubernetes but I wanted something to be up and running, precise and concise and easy to deploy and troubleshoot and thats why I chose the GitOps route.</p>

<p>Usually these projects would be hosted off a cheap or free AWS or Google Cloud platform but I chose Linode because when in doubt , use what you know best, and a bare bones Ubuntu server is what I know best. 14 years working with linux and Ubuntu specifically makes deploying apps off bare bones servers pretty much childs play. </p>
<img src={term2} className="term2" alt="terminal"/>
<p>Now one last feature that I had to unfortunately drop was a JS - Git integration that would allow a user to press a button, push a change to Github and rebuild everything. The security risks behind was not worth it. </p>

<p>I will keep this page us as long as my Linode subscription lasts , but changes will be made and development will continue and so say all of us.</p>

               
            </header>
            </div>
        </div>
    );
}

export default App;
