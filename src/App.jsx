
import { Header } from "./components/Header/Header"
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Panel } from "./components/Panel/Panel";
// import { Post } from './components/Post/Post'
// import { LoginWindow } from './components/LoginWindow/LoginWindow'
import { Footer } from "./components/Footer/Footer";
import { RegistrWindow } from "./components/RegistrWindow/RegistrWindow";


export const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Panel />
        {/* <LoginWindow /> */}
        <RegistrWindow />
        {/* <Post /> */}
        <Footer />
      </Wrapper>
    </>
  );
}

