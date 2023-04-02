import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  const country = "in";


  // Now making a state named as Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    // This will show the alert
    setAlert({
      msg: message,
      type: type
    })

    // This will hide the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <div>
      <Router>
        <Navbar showAlert={showAlert} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Alert alert={alert} />
        <Routes>

          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />} />

          {/* Login Components */}
          <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;