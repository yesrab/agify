import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AgePage from "./pages/AgePage";
import LoginForm from "./pages/LoginForm";
import Placeholder from "./pages/Placeholder";
import CustomHookPage from "./pages/CustomHookPage";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/age' element={<AgePage />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/CustomHook' element={<CustomHookPage />} />
          <Route path='*' element={<Placeholder />} />
        </Routes>
      </Router>
      <h1>This is test footer element statement</h1>
    </div>
  );
}

export default App;
