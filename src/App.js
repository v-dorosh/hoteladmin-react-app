import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import UsersList from "./components/UsersList";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" exact element={<UsersList />} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;