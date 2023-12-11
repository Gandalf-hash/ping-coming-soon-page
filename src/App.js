import { AppEmailInput } from "./components/email-input";

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
      <footer></footer>
    </>
  );
}

export default App;
