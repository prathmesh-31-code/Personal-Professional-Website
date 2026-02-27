import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App({ element }) {
  return (
    <div
      className="
        bg-slate-200
      "
    >
      <Navbar />

      <main className="pt-20">
        {element}
      </main>

      <Footer />
    </div>
  );
}

export default App;
