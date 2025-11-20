import React from 'react';
import './App.css';
import Header from './components/Header';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetup';

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <BasicInfo/>
                <Work/>
                <Skills/>
                <Resources/>
                <DeveloperSetup/>
            </main>
            <footer>
                <p>Provided By Deshui Yu</p>
            </footer>
        </div>
    );
}

export default App;