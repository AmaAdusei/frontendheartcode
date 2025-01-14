import React, { useState, useEffect } from "react";
import Login from "src/pages/loginpage";
import Signup from "src/pages/signuppage";
import HomeScreen from "src/pages/homescreen_temp";
import Profile from "src/pages/profilepage";
import GameCPR from "src/pages/gamecprpage";
import Schedule from "src/pages/schedulepage";
import Verification from "src/pages/verificationpage";

const App = () => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || "Login"
  );

  // Save current page to local storage
  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  // Function to render the selected page
  const renderPage = () => {
    switch (currentPage) {
      case "Login":
        return <Login setCurrentPage={setCurrentPage} />;
      case "Signup":
        return <Signup setCurrentPage={setCurrentPage} />;
      case "HomeScreen":
        return <HomeScreen setCurrentPage={setCurrentPage} />;
      case "Profile":
        return <Profile />;
      case "GameCPR":
        return <GameCPR />;
      case "Schedule":
        return <Schedule />;
      case "Verification":
        return <Verification setCurrentPage={setCurrentPage} />;
      default:
        console.warn("Unknown page:", currentPage);
        return <Login setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {/* Render the current page */}
      {renderPage()}

      {/* Show navigation bar only after Login/Signup */}
      {currentPage !== "Login" && currentPage !== "Signup" && (
        <nav>
          <button onClick={() => setCurrentPage("HomeScreen")}>Home</button>
          <button onClick={() => setCurrentPage("Profile")}>Profile</button>
          <button onClick={() => setCurrentPage("GameCPR")}>Game CPR</button>
          <button onClick={() => setCurrentPage("Schedule")}>Schedule</button>
        </nav>
      )}
    </div>
  );
};

export default App;
