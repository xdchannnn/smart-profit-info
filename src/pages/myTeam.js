import '../assets/styles/dashboard.scoped.css'
import '../assets/styles/my-team.scoped.css'
import React from 'react';

import Header from '../components/dashboardComponents/dashboardHeader';
import Footer from '../components/dashboardComponents/footer';
import GeneralTopBlock from '../components/teamComponents/generalTopBlock';
import Tablinks from '../components/teamComponents/tablinks';
import NewRegistrations from '../components/teamComponents/newRegistrations';
import ExpiredPartners from '../components/teamComponents/expiredPartners';
import PaidPartners from '../components/teamComponents/paidPartners';
import ButtonsBlock from '../components/teamComponents/buttonsBlock';


function MyTeam() {
    
    const [tab, setTab] = React.useState('New')

    return (
        <div className="background">
            <Header />
            <div className="team_screen">
                <GeneralTopBlock />
                <Tablinks tab={tab} setTab={setTab}/>

                {tab === "New" ? <NewRegistrations /> : 
                tab === "Expired" ? <ExpiredPartners /> :
                tab === "Paid" ? <PaidPartners /> : null}
                    
                <ButtonsBlock />
            </div>
            <Footer />
        </div>
  );
}

export default MyTeam;
