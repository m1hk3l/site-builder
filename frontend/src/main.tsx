import '@/index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Navbar';
import { Footer } from '@/components/Footer'
import { LandingPage } from '@/components/LandingPage';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  
  // Mount LandingPage if landing-root element exists
  const landingRoot = document.getElementById('landing-root');
  console.log('Landing root element:', landingRoot);
  
  if (landingRoot) {
    try {
      const dataScript = document.getElementById('landing-data');
      console.log('Data script element:', dataScript);
      
      if (dataScript) {
        const data = JSON.parse(dataScript.textContent || '{}');
        console.log('Parsed data:', data);
        
        console.log('Mounting LandingPage component...');
        ReactDOM.createRoot(landingRoot).render(
          <React.StrictMode>
            <LandingPage 
              photoUrl={data.photoUrl}
              mainHeading={data.mainHeading}
              landingText={data.landingText}
            />
          </React.StrictMode>,
        );
        console.log('LandingPage component mounted successfully');
      } else {
        console.error('No landing-data script found');
      }
    } catch (error) {
      console.error("Failed to mount LandingPage:", error);
    }
  } else {
    console.log('No landing-root element found');
  }

  const navbarEl = document.getElementById('navbar');
  
  if (navbarEl) {
    try {
      const menuData = JSON.parse(navbarEl.dataset.menu || '[]');
      const siteName = navbarEl.getAttribute('data-site-name') || "Akvarellistuudio";
      ReactDOM.createRoot(navbarEl).render(
        <React.StrictMode>
          <Navbar menu={menuData} siteName={siteName}/>
        </React.StrictMode>,
      );
    } catch (error) {
      console.error("Failed to parse navbar data-menu:", error);
    }
  } else {
    console.error("Navbar element (#navbar) not found on DOMContentLoaded");
  }

  const footerEl = document.getElementById('footer');
  if (footerEl) {
    ReactDOM.createRoot(footerEl).render(
      <React.StrictMode>
        <Footer />
      </React.StrictMode>,
    );
  }
});
