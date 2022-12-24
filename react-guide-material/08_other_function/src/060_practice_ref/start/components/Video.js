import { useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef(({ path }, ref) => {

    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
            },

        stop() {
            videoRef.current.pause();
        }
}));

return (
    
  <video style={{ maxWidth: "100%" }} ref={videoRef}>
    <source src={path}></source>
  </video>
);
});

export default Video;