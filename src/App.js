import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <section>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
