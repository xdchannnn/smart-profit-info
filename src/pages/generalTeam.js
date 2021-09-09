import '../assets/styles/dashboard.scoped.css'
import '../assets/styles/my-team.scoped.css'
import React from 'react';

import Header from '../components/dashboardComponents/dashboardHeader';
import Footer from '../components/dashboardComponents/footer';
import GeneralTopBlock from '../components/generalTeamComponents/generalTopBlock';
import Tablinks from '../components/generalTeamComponents/tablinks';
import Tabcontent from '../components/generalTeamComponents/tabContent'
import ButtonsBlock from '../components/teamComponents/buttonsBlock';


function MyTeam() {
    
    const [tab, setTab] = React.useState('New')

    return (
        <div className="background">
            <Header />
            <div className="team_screen">
                <GeneralTopBlock />
                <Tablinks tab={tab} setTab={setTab}/>
                <Tabcontent /> 
                <ButtonsBlock />
            </div>
            <Footer />
        </div>
  );
}

export default MyTeam;
