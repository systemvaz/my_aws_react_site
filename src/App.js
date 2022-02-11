import React from 'react';
import { NavBar, HeroLayout5, HeroLayout1, HeroLayout6, MarketingFooter } from './ui-components';
import logo from './img/logo_avarano.jpg';
import banner from './img/banner.jpg';
import me from './img/me.jpg';
import hacker from './img/hacker.jpg';
import beats from './img/speaker.jpg'
import './App.css';

function App() {

  const aboutMeTop = "About Me";
  const aboutMeMiddle = "Alex Varano";
  const codeTop = "Hack the Planet";
  const codeMiddle = "Code and Projects";
  const codeButtonTxt = "Have a Look";
  const beatsTop = "Drop the Bass";
  const beatsMiddle = "Electronic Music";
  const beatsButtonTxt = "Have a Listen";

  return (
    <div className="App">

      <header className="App-header">
        <NavBar logoSrc={logo} />
        <HeroLayout5 backgroundImage={banner} className='App-banner'/>
      </header>

      <span>
        <HeroLayout1 
          imageSrc={me} 
          topTxt={aboutMeTop} 
          middleTxt={aboutMeMiddle}
        />
      </span>

      <span>
        <HeroLayout6 
          imageSrc={hacker} 
          topTxt={codeTop}
          middleTxt={codeMiddle}
          buttonTxt={codeButtonTxt}
        />
      </span>

      <span>
        <HeroLayout1 
          imageSrc={beats} 
          topTxt={beatsTop}
          middleTxt={beatsMiddle}
          buttonTxt={beatsButtonTxt}
        />
      </span>

      <span>
        <MarketingFooter />
      </span>

    </div>
  );
}

export default App;
