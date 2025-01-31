import lumiLogo from './assets/img/Lumi.svg';
import Header from './layout/Header.';

function App() {
  return (
    <>
      <Header />
      <div>
        <a href="https://luminescence33.com/" target="_blank">
          <img src={lumiLogo} className="logo" alt="Luminescence33 logo" />
        </a>
      </div>
      <h1>Luminescence</h1>
    </>
  );
}

export default App;
