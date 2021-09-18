import "../assets/styles/dashboard.scoped.css";
import "../assets/styles/my-team.scoped.css";
import React from "react";

import Header from "../components/dashboardComponents/dashboardHeader";
import Footer from "../components/dashboardComponents/footer";
import GeneralTopBlock from "../components/generalTeamComponents/generalTopBlock";
import Tablinks from "../components/generalTeamComponents/tablinks";
import Tabcontent from "../components/generalTeamComponents/tabContent";
import ButtonsBlock from "../components/generalTeamComponents/buttonsBlock";

function MyTeam() {
  return (
    <div className="background">
      <Header />
      <div className="team_screen">
        <GeneralTopBlock />
        <Tablinks />
        <Tabcontent />
        <ButtonsBlock />
      </div>
      <Footer />
    </div>
  );
}

export default MyTeam;
