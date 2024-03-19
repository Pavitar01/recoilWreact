import React from "react";
import { useRecoilState } from "recoil";
import { charAtom } from "./recoil/atom";
const Counter = () => {
  const [count, setCount] = useRecoilState(charAtom);
  return (
    <div>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default Counter;
