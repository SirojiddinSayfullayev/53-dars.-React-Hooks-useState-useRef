import Footer from "./views/footer/Footer";
import Calculator from "./views/home/calculator/Calculator";
import Counter from "./views/home/counter/Counter";
import Header from "./views/home/header/Header";
import WhoAmI from "./views/home/whoAmI/WhoAmI";

function App() {

  const footData = {
    contact: "+998901234567",
    email: "soff.study.uz",
    adress: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.975342592513!2d69.21675657595323!3d41.28764110217656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f5a84b25f%3A0xf934f004dd798141!2sSoff%20Study%20zamonaviy%20kasblar%20markazi!5e0!3m2!1sru!2s!4v1715783632293!5m2!1sru!2s"
  }

  return (
    <div className="App">
      {/* <Header />
      <Counter />
      <Footer data={footData} /> */}

      {/* <WhoAmI /> */}

      <Calculator />

    </div>
  );
}

export default App;
