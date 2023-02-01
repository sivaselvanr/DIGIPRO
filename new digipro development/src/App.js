import React from 'react';

// importing components from react-router-dom package
import { Routes, Route } from 'react-router-dom';

//importing index from frontend folder
import Home from './componunts/frontend/home page/home'

//importing student page from student folder under frontent folder
import Student_page from './componunts/frontend/student page/student page';

//importing header 

function App() {
    return (
      <div>
        <Headers />
        {/* routing to anoter page */}
        <Routes>

          {/* Home page */}
          {/* browser url = http://hostname:port */}
          <Route path="/" element={<Home />} />

          {/* Student page */}
          {/* browser url = http://hostname:port/student page */}
          <Route path='/student page' element={<Student_page />} />
        </Routes>

      </div>
    );
}

export default App;