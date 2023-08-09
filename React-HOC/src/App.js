import './App.css';
import UsersList from "./components/UsersList";
import userHOC from './components/userHOC';
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
function App() {
  //if .jpg  useHoc(LoadImage)
  // if .wmv  useHoc(LoadVideo)
  // if .mp4  useHoc(LoadAudio)
  const UserInfoLoader = userHOC(UsersList);
  return (
    <div className="App">
        <h1>React Design Patterns</h1>
        <section>
          <h2>Example of Higher Order Component</h2>
          <UserInfoLoader />
        </section>

    </div>
  );
}

export default App;
