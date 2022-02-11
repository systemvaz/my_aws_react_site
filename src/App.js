import React from 'react';
import { NavBar, HeroLayout5, HeroLayout1, HeroLayout6, MarketingFooter } from './ui-components';
import logo from './img/logo_systemvaz.jpg';
import banner from './img/banner.jpg';
import me from './img/me.jpg';
import hacker from './img/hacker.jpg';
import beats from './img/speaker.jpg'
import './App.css';

function App() {

  return (
    <div className="App">

      <header className="App-header">
        <NavBar logoSrc={logo} />
        <HeroLayout5 backgroundImage={banner} className='App-banner'/>
      </header>

      <span>
        <HeroLayout1 imageSrc={me} />
      </span>

      <span>
        <HeroLayout6 imageSrc={hacker} />
      </span>

      <span>
        <HeroLayout1 imageSrc={beats} />
      </span>

      <span>
        <MarketingFooter />
      </span>

    </div>
  );
}

export default App;
