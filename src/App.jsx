import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell ,MantineProvider } from '@mantine/core';
import HeaderResponsive from './components/Header';
import JobList from './pages/JobList';
import CreateJob from './pages/CreateJob';
import FindTalents from './pages/FindTalents';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';
import './App.css';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
       <Toaster position = "top-center" />
       <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      colorScheme: 'light',
      primaryColor: 'violet',
    }}>
      <Router>
        <HeaderResponsive />
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/find-jobs" element={<JobList />} />
          <Route path="/find-talents" element={<FindTalents />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/create-job" element={<CreateJob />} />
        </Routes>
      </Router>
    </MantineProvider>
    </>
    
  );
}

export default App;