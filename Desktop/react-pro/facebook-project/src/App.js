import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/feed/Feed";
import RightSidebar from "./components/RightSidebar";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
function App() {
  const [{user} , dispatch]=useStateValue();
  
  return (<>
    {
      !user?(<Login />) :(<div className="App">
      <Header/>
      <div className="app_body">
        <Sidebar />
        <Feed />
        <RightSidebar/>
      </div>
     </div>)
    }
    
    </>
  );
}

export default App;
