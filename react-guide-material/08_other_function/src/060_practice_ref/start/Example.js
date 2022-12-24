import { useState, useRef } from "react";
import Video from "./components/Video";

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      {/* <h3>練習問題</h3> */}
      <p>useRef、useImperativeHandle、forwardRefを使って完成系の動画再生機能を作成してください。※useImperativeHandleでplay(再生)、stop(停止)メソッドを定義すること。
</p>
      <Video ref={ref} path="./sample.mp4"/>
      <button
        onClick={() => {
          setPlaying((prev) => !prev);
          playing ? ref.current.stop() : ref.current.play()
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
