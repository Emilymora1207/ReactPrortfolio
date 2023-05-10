import React from 'react';
import PortfolioContainer from "./components/PortfolioContainer";
// import Portfolio from './components/pages/Portfolio';
// import projects from './projects';

import './styles/global.css'



// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card

// const App = () => {
//     const style = {
//         backgroundImage: 'imaage'
//     }
//     <PortfolioContainer />}
//     ;

// export default App;

export default function App() {
    return (
      <div>
        <PortfolioContainer />
        {/* <Portfolio projects={projects} /> */}
      </div>
    );
  }
  
