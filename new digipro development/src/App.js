import React from 'react';

// importing components from react-router-dom package
import { Routes, Route } from 'react-router-dom';

//importing index from frontend folder
import Home from './componunts/frontend/home page/home'

//importing stude

function App() {
    return (
      <div>
        <Routes>

          {/* browser url = http://hostname:port */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
}

export default App;