import JuliaSet from "julia-set";
import { createRef, useCallback, useEffect, useState } from "react";
import { useInterval, useWindowSize } from "react-use";

const FRAMERATE = 60;

const Canvas = (props: {
  palette: ([number, number, number] | [number, number, number, number])[];
}) => {
  const [c, setC] = useState([-1.9, 0.01]);
  const [direction, setDirection] = useState(1);

  /** 
   * Set the animation parameters for the julia fractal
   */
  useInterval(() => {
    if (c[0] < -2) {
      setDirection(1);
    } else if (c[0] > -1) {
      setDirection(-1);
    }
    setC([c[0] + direction * 0.0002, c[1] - direction * 0.00002]);
  }, 1000 / FRAMERATE);

  /**
   * Normalize the aspect ratio of the canvas on window size update
   */
  const windowSize = useWindowSize();

  const canvas = createRef<HTMLCanvasElement>();

  const render = useCallback(
    (c: number[]) => {
      if (canvas.current) {
        canvas.current.height = canvas.current.clientHeight;
        canvas.current.width = canvas.current.clientWidth;

        JuliaSet.render(canvas.current, {
          code: `z * z + ${c[0].toFixed(6)}i${c[1].toFixed(6)}`,
          palette: props.palette,
          height: 0.03,
          center: [-1, 0],
          iterations: 30,
          runawayDistance: 4,
        });
      }
    },
    [canvas, props.palette]
  );

  useEffect(() => render(c), [c, render, windowSize]);

  return (
    <canvas
      ref={canvas}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default Canvas;
