import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/Mypage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles></Articles>}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound></NotFound>}></Route>
      {/* * -> wildcard 문자 아무 텍스트나 매칭 */}
    </Routes>
  );
}

export default App;

// routing system이란
// 여러 페이지로 구성된 웹 애플리케이션을 만들 때
// 페이지 별로 컴포넌트들을 분리해가면서 프로젝트를
// 관리하는 시스템

// 라우팅 시스템은 페이지 이동시 html을 다시 받는 것이 아니라
// 브라우저의 history api를 사용하여 주소만 변경한 후
// 라우팅 설정에 따른 다른 페이지를 보여준다
