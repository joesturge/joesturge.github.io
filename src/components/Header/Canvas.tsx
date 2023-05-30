import JuliaSet, { Options } from "julia-set";
import { createRef, useCallback, useEffect, useState } from "react";
import { useInterval, useWindowSize } from "react-use";

const FRAMERATE = 60;

const INITIAL_C: [number, number] = [-1.9, 0.01];

const codeFrom = (c: number[]) =>
  `z * z + ${c[0].toFixed(6)}i${c[1].toFixed(6)}`;

const Canvas = (props: {
  palette: ([number, number, number] | [number, number, number, number])[];
}) => {
  const [c, setC] = useState<[number, number]>(INITIAL_C);
  const [direction, setDirection] = useState<number>(1);
  const [juliaSet, setJuliaSet] = useState<JuliaSet | null>(null);
  const [frame, setFrame] = useState<Promise<void> | null>(null);

  /**
   * Set the animation parameters for the julia fractal
   */
  useInterval(() => {
    if (c[0] < -2) {
      setDirection(1);
    } else if (c[0] > -1.2) {
      setDirection(-1);
    }
    setC([c[0] + direction * 0.0002, c[1] - direction * 0.00002]);
  }, 1000 / FRAMERATE);

  /**
   * Normalize the aspect ratio of the canvas on window size update
   */
  const windowSize = useWindowSize();

  const canvas = createRef<HTMLCanvasElement>();

  /**
   * Initialize the julia fractal canvas
   */
  useEffect(() => {
    if (canvas.current) {
      setJuliaSet(
        JuliaSet.render(canvas.current, {
          code: codeFrom(INITIAL_C),
          height: 0.03,
          center: [-1, 0],
          iterations: 30,
          runawayDistance: 4,
        })
      );
    }
  }, [canvas]);

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
      if (frame === null && juliaSet !== null) {
        setFrame(
          new Promise<void>((resolve) => {
            juliaSet?.update(options);
            resolve();
          })
            .then(() => setFrame(null))
            .catch(e => {
              console.error("could not render julia set.", e);
              setFrame(null);
            })
        );
      }
    },
    [frame, juliaSet]
  );

  /**
   * Update the fractal if the constant changes
   */
  useEffect(
    () => safelyUpdate({ code: codeFrom(c), palette: props.palette }),
    [c, props.palette, safelyUpdate]
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
