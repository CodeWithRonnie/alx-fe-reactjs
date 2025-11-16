import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Mamikie Maemu" age={25} bio="Front-end developer and travel enthusiast." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
