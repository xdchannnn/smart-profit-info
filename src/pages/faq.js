import '../assets/styles/faq.scoped.css'
import '../assets/styles/dashboard.scoped.css'

import { useState } from 'react';

import Header from '../components/dashboardComponents/dashboardHeader';
import Tablinks from '../components/FAQ/faqTablinks'
import GeneralIssues from '../components/FAQ/generalIssues'
import ForPartners from '../components/FAQ/forPartners'
import FinanceQuestions from '../components/FAQ/financeQuestions'
import Footer from '../components/dashboardComponents/footer';

function Activation() {
  const [open, setOpen] = useState("General")

    return (
      <div className="background">
        <Header />
            <div className="faq_screen">
                <Tablinks open={open} setOpen={setOpen} />
                {open === "General" ? <GeneralIssues /> :
                 open === "Partner" ? <ForPartners /> :
                 open === "Finance" ? <FinanceQuestions /> : 
                 null
                }
            </div>
        <Footer />
      </div>
    );
  }
  
  export default Activation;