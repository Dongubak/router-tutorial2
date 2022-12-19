import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  ///컴포넌트를 보여주는 순간 다른 페이지로 이동하고 싶을 때
  ///마이페이지 이동시 로그인이 안 되어있다면 로그인페이지로 이동한다.
  return <div>마이 페이지</div>;
};

export default MyPage;
