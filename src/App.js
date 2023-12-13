import { AppEmailInput } from "./components/email-input";
import {
  AppFacebookIcon,
  AppInstagramIcon,
  AppTwitterIcon,
} from "./components/icons";

function App() {
  return (
    <>
      <main className="page-container">
        <div className="logo">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div>
          <h1>
            We are lunching <span>soon!</span>
          </h1>
          <h3>Subscribe and get notified</h3>
        </div>
        <div>
          <AppEmailInput />
        </div>
        <div className="illustration-container">
          <img src="/images/illustration-dashboard.png" alt="Illustration" />
        </div>
      </main>
      <footer>
        <AppFacebookIcon />
        <AppTwitterIcon />
        <AppInstagramIcon />
      </footer>
      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          marginTop: "6px",
          color: "gray",
        }}
      >
        Copyrights Ping. All rights reserved
      </div>
    </>
  );
}

export default App;
