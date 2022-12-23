import { useState } from "react";
import SubButton from "./components/SubButton";
import "./Example.css"

const Example = () => {
  const [isSelectedA, setIsSelectedA] = useState(false);

  const [isSelectedB, setIsSelectedB] = useState(false);

  const clickHandlerA = () => setIsSelectedA((prev) => !prev);
  const clickHandlerB = () => setIsSelectedB((prev) => !prev);

  return (
    <>
    <div className={"space"}>
      <button className="btn" onClick={clickHandlerA}>
        ボタン
      </button>
    </div>

    <div className={"space"}>
      <button className={isSelectedB ? "selected btn" : "btn"} onClick={clickHandlerB}>
        ボタン２
      </button>
      <div style={{ textAlign: "center" }}>
        {(isSelectedA || isSelectedB) && "クリックされました。"}
      </div>
    </div>

    <biv className={"space"}>
      <SubButton />
    </biv>
    </>
  );
};

export default Example;
