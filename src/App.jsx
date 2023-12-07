import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage";
import { UserInfoPage } from "./Pages/UserInfoPage/UserInfoPage";
import { UserPage } from "./Pages/UserPage/UserPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
