import React from 'react';

//importing App.css file into App.js file
import './App.css';

// importing components from react-router-dom package
import { Routes, Route } from 'react-router-dom';

//importing index from frontend folder
import Home from './landingpage';
// import Home from './componunts/frontend/home page/home';

//importing student page from student folder under frontent folder
import StudentPages from './StudentPages';

function App() {
    return (
      <div>

        {/* routing to anoter page */}
        <Routes>

          {/* Home page */}
          {/* browser url = http://hostname:port */}
          <Route path="/" element={<Home />} />

          {/* Student page */}
          {/* browser url = http://hostname:port/student page */}
          <Route path='/student page' element={<StudentPages />} />
        </Routes>

      </div>
    );
}

export default App;