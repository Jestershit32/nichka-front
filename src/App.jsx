
import { Header } from "./components/Header/Header"
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Panel } from "./components/Panel/Panel";


export const App = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Panel />
      </Wrapper>
    </>
  );
}

