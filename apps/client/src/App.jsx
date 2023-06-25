import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Form from "./components/pages/Form/Form";
import Article from "./components/pages/Article/Article";

function App() {
  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/form/*" element={<Form />} />
            <Route exact path="/article" element={<Article />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
