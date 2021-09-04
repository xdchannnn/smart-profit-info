import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/auth.context";
import Routes from "./routes/Routes";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
      <ToastContainer theme="dark" />
    </AuthContextProvider>
  );
}

export default App;
