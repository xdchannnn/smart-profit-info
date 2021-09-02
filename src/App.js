import { AuthContextProvider } from "./context/auth.context";
import Routes from "./routes/Routes";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
