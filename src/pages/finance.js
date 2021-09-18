import "../assets/styles/dashboard.scoped.css";
import "../assets/styles/finance.scoped.css";
import React from "react";

import Header from "../components/dashboardComponents/dashboardHeader";
import Footer from "../components/dashboardComponents/footer";
import MyFinance from "../components/financeComponents/myFinance";
import FinanceTablinks from "../components/financeComponents/financeTablinks";

function Finance() {
  return (
    <div className="background">
      <Header />
      <div className="finance_screen">
        <FinanceTablinks />
        <MyFinance />
      </div>
      <Footer />
    </div>
  );
}

export default Finance;
