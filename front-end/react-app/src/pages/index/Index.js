import "./Index.css";
import NavBar from "../../components/navBar/NavBar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

function Index() {
  return (
    <>
      <div class="container">
        <header>
          <NavBar />
          <Hero />
        </header>
        <main></main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Index;
