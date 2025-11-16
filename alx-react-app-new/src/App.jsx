import Header from "./Header";
import UserProfile from "./UserProfile";
import MainContent from "./MainContent";
import Footer from "./Footer";

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
