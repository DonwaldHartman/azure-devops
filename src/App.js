import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './azure.svg';
import dashboard from './assets/azure-dashboard.png'
import error from './assets/error.png'
import term2 from './assets/terminal-2.png';
import release from './assets/release.png';
import pipeline from './assets/pipeline.png';
import azure_icons from './assets/azure-icons.png';
import './App.css';
import particlesOptions from "./particles.json";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


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
                <p className='Hero'><img src={azure_icons} className="" alt="logo"/></p>
<p> Welcome to my first venture into Azure Devops and React JS. Two milestones at once! The reason why I have used Azure Devops was to look into the work processes of building and deploying an app with Azure Devops. Using React was to see what native tools were available with Azure Devops to build a React App. </p>
<Popup
    trigger={<img src={dashboard} className="term2"  alt="dashboard"/>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Azure Devops Dashboard</div>
        <div className="content">
        <img src={dashboard} alt="dashboard"/>
        </div>
      </div>
    )}
  </Popup>
<p>I created a free tier Azure Devops account and started looking at the boards and repo for it. It is very centralised when it comes to workflow as every aspect of a project can be used in Azure Devops frorm the planning, team configurations, code hosting, pipelines and artifact storage and deployment. </p>
<hr></hr>
<h3>First Complications</h3>
<p>During my first pipleline build attempt I ran into an issue where I could not run any pipelines as my account had No hosted parallelism purchased or granted. Luckily I found a way to use my own VPS for the pipeline runners and deployment group. Self-hosted Servers for the win </p>

<section className='twoImages'>
    
<Popup
    trigger={ <img src={error} className="term2" alt="terminal"/>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Azure Devops Dashboard</div>
        <div className="content">
        <img src={error} className="term2" alt="terminal"/>
        </div>
      </div>
    )}
  </Popup>

  <Popup
    trigger={ <img src={term2} className="term2" alt="terminal"/>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Azure Devops Dashboard</div>
        <div className="content">
        <img src={term2} className="term2" alt="terminal"/>
        </div>
      </div>
    )}
  </Popup>
    
  </section>
<hr></hr>
 <h3>Builds and Pipelines</h3> 
<p>After configuring my runners and deployment pool, creating pipelines and deploying a build was pretty easy as Azure Devops provides an array of yaml configs for various technologies being deployed. In this case a React app was being deployed and the only change in the config yaml that was needed was changing from Azures VM to my selfhosted runner. A few clicks later the code had been build and stored as an artifact. In the release stage, the configuratio is set in a way that its simple to deply my artifacts to a live server</p>
<section className='twoImages'>
    
<Popup
    trigger={ <img src={pipeline} className="term2" alt="terminal"/>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">Pipeline</div>
        <div className="content">
        <img src={pipeline} className="term2" alt="terminal"/>
        </div>
      </div>
    )}
  </Popup>

  <Popup
    trigger={ <img src={release} className="term2" alt="terminal"/>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Release</div>
        <div className="content">
        <img src={release} className="term2" alt="terminal"/>
        </div>
      </div>
    )}
  </Popup>
    
  </section>
  <hr></hr>
  <h3>Final Thoughts</h3>
<p>Azure Devops for a beginner is a very powerful and easy to use, CI/CD solution. Better yet as a Devops tool, its powerful, as it integrates the agile worfklow, code repositories, build piplines and artifact storage so easily, that I would suggest Azure Devops to be used by companies and individuals who need a stable and easy to use, easy to maintain Devops CI/CD solution. </p>

            </header>
            </div>
        </div>
    );
}

export default App;
