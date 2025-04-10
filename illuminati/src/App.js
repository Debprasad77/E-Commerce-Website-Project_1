import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home_Boody from './components/home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <main className="main-content">
//         {/* <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/men" component={Men} />
//             <Route path="/women" component={Women} />
//             <Route path="/kids" component={Kids} />
//           </Switch> */}
//           {/* Add your homepage content here */}
//         <h1>Welcome to Our Store</h1>
//         <p>Homepage content goes here</p>
//         </main>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        {/* Add your homepage content here */}
        <Home_Boody/>
       
      </main>
    </div>
  );
}

export default App;