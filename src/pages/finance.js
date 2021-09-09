import '../assets/styles/dashboard.scoped.css'
import '../assets/styles/finance.scoped.css'
import React from 'react';

import Header from '../components/dashboardComponents/dashboardHeader';
import Footer from '../components/dashboardComponents/footer';
import FinanceTablinks from '../components/financeComponents/financeTablinks';
import MyFinance from '../components/financeComponents/myFinance';
import LostFinance from '../components/financeComponents/lostFinance';



function Finance() {
    
    const [tab, setTab] = React.useState('MyFinance')

    return (
        <div className="background">
            <Header />
            <div className="finance_screen">
                <FinanceTablinks tab={tab} setTab={setTab} />
                {tab === "MyFinance" ? <MyFinance /> :
                 tab === "LostFinance" ? <LostFinance /> : null
                }
            </div>
            <Footer />
        </div>
  );
}

export default Finance;