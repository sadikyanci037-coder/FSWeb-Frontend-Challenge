import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Profile />
        </main>
        <Footer />
      </>
  );
}

export default App;