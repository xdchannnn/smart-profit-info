import '../assets/styles/sponsor.scoped.css'
import '../assets/styles/dashboard.scoped.css'

import { useState } from 'react';

import Header from '../components/dashboardComponents/dashboardHeader';
import Screen from '../components/sponsorComponents/screen'
import Footer from '../components/dashboardComponents/footer';

function Sponsor() {
  const [open, setOpen] = useState("General")

    return (
      <div className="background">
        <Header />
            <div className="screen">
                <Screen />
            </div>
        <Footer />
      </div>
    );
  }
  
  export default Sponsor;