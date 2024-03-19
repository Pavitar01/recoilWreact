import { useRecoilState, useRecoilValue } from "recoil";
import Counter from "./Counter";
import "./App.css";
import { charValueSelector } from "./recoil/selector";
import { charAtom } from "./recoil/atom";
function App() {
  const [text, setText] = useRecoilState(charAtom);
  return (
    <>
      <h1>Counter</h1>
      <Counter />
      <p>using recoil state {text}</p>
      <p>using recoil selector {useRecoilValue(charValueSelector)}</p>
    </>
  );
}

export default App;
