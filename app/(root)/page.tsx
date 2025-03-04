import HeaderBox from "@/components/headerBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Kadek",
    lastName: "JSM",
    email: "contact@jsmastery.pro",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.0}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, {}]}
      />
    </section>
  );
};

export default Home;
