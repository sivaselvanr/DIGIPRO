import React from 'react';

// importing components from react-router-dom package
import { Routes, Route } from 'react-router-dom';

//importing index from frontend folder
import Home from './componunts/frontend/home page/home'

//importing student page from student folder under f
import Student_page from './componunts/frontend/student page/student page';

function App() {
    return (
      <div>
        <Routes>

          {/* browser url = http://hostname:port */}
          <Route path="/" element={<Home />} />

          {/* browser url = http://hostname:port/student page */}
          <Route path='/student page' element={<Student_page />} />
        </Routes>
      </div>
    );
}

export default App;