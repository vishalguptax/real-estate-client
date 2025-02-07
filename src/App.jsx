import Layout from "./components/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import List from "./components/listIems/List"

function App() {
  return (
    <>
    <Layout></Layout>
    {/* <Login/> */}
    {/* <Register/> */}
    <List/>
    </>
  );
}

export default App;
