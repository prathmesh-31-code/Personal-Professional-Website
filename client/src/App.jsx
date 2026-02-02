import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App({ element }) {
  return (
    <>
      <Navbar />

      {/* Push content below fixed navbar */}
      <main className="pt-20 min-h-screen">
        {element}
      </main>

      <Footer />
    </>
  );
}

export default App;
