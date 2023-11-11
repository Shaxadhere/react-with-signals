import Header from "./Header";
import Sider from "./Sider";
import Todos from "./Todos";

function App() {
  return (
    <div>
      <Header />
      <Sider />
      <div className="main-content">
      <Todos />
      </div>
    </div>
  );
}

export default App;
