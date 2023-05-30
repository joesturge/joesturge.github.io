import JuliaSet, { Options } from "julia-set";
import { createRef, useCallback, useEffect, useRef } from "react";
import { useInterval, useWindowSize } from "react-use";

const FRAMERATE = 60;

const INITIAL_C: [number, number] = [-1.9, 0.01];

const codeFrom = (c: [number, number]) =>
  `z * z + ${c[0].toFixed(6)}i${c[1].toFixed(6)}`;

const Canvas = (props: {
  palette: ([number, number, number] | [number, number, number, number])[];
}) => {
  const canvas = createRef<HTMLCanvasElement>();
  const c = useRef<[number, number]>(INITIAL_C);
  const direction = useRef<number>(1);
  const juliaSet = useRef<JuliaSet | null>(null);
  const frame = useRef<Promise<void> | null>(null);

  /**
   * Set the animation parameters for the julia fractal
   */
  useInterval(() => {
    if (c.current[0] < -2) {
      direction.current = 1;
    } else if (c.current[0] > -1.2) {
      direction.current = -1;
    }
    c.current = [
      c.current[0] + direction.current * 0.0002,
      c.current[1] - direction.current * 0.00002,
    ];

    safelyUpdate({ code: codeFrom(c.current), palette: props.palette });
  }, 1000 / FRAMERATE);

  /**
   * Initialize the julia fractal canvas
   */
  useEffect(() => {
    if (canvas.current && juliaSet.current === null) {
      juliaSet.current = JuliaSet.render(canvas.current, {
        code: codeFrom(INITIAL_C),
        height: 0.03,
        center: [-1, 0],
        iterations: 30,
        runawayDistance: 4,
      });
    }
  }, [canvas, juliaSet]);

  /**
   * Normalize the aspect ratio of the canvas on window size update
   */
  const windowSize = useWindowSize();

  /**
   * adjust the window size of the canvas if the page changes size
   */
  useEffect(() => {
    if (canvas.current) {
      canvas.current.height = canvas.current.clientHeight;
      canvas.current.width = canvas.current.clientWidth;
    }
  }, [canvas, windowSize]);

  /**
   * Update the julia set only if another update is not already in progress
   */
  const safelyUpdate = useCallback(
    (options: Partial<Omit<Options, "antialias">>) => {
      if (frame.current === null && juliaSet.current !== null) {
        frame.current = new Promise<void>((resolve) => {
          juliaSet.current?.update(options);
          resolve();
        })
          .then(() => {
            frame.current = null;
            return;
          })
          .catch((e) => {
            console.error("could not render julia set.", e);
            frame.current = null;
            return;
          });
      }
    },
    [frame, juliaSet]
  );

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
