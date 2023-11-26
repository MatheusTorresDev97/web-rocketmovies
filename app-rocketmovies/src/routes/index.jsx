import { BrowserRouter } from "react-router-dom";
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import { useAuth } from "../hooks/auth";

const Routes = () => {
  const { userInfos } = useAuth();
  return (
    <BrowserRouter>
      {userInfos ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

export default Routes