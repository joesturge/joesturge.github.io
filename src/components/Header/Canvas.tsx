import { createRef, useCallback, useEffect, useState } from "react";
import { useInterval, useWindowSize } from "react-use";
import interpolate from "color-interpolate";

const FRAMERATE = 10;

const drawPixel = (
  x: number,
  y: number,
  color: string,
  context: CanvasRenderingContext2D
) => {
  context.beginPath();
  context.rect(x, y, 1, 1);
  context.fillStyle = color;
  context.fill();
};

const drawLoop = (
  func: (x: number, y: number) => void,
  width: number,
  height: number
) => {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      func(x, y);
    }
  }
};

const squarec = (a: number[]) => {
  return [Math.pow(a[0], 2) - Math.pow(a[1], 2), 2 * a[0] * a[1]];
};

const addc = (a: number[], b: number[]) => {
  return [a[0] + b[0], a[1] + b[1]];
};

const absc = (a: number[]) => {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
};

const screenToWorld = (
  x: number,
  y: number,
  width: number,
  height: number,
  center: number[],
  zoom: number
) => {
  const screenCenterX = Math.floor(width / 2);
  const screenCenterY = Math.floor(height / 2);

  return [
    (x - screenCenterX) / zoom + center[0],
    (screenCenterY - y) / zoom + center[1],
  ];
};

const Canvas = (props: { colorRamp: string[] }) => {
  const [c, setC] = useState([-1.9, 0.01]);

  useInterval(() => {
    setC([c[0]+1e-4, c[1]-1e-5]);
  }, 1000 / FRAMERATE);

  const windowSize = useWindowSize();

  const canvas = createRef<HTMLCanvasElement>();

  const render = useCallback(
    (c: number[]) => {
      if (canvas.current) {
        const width = (canvas.current.width = canvas.current.clientWidth / 3);
        const height = (canvas.current.height = canvas.current.clientHeight / 3);
        const context = canvas.current.getContext("2d");

        if (!context) {
          console.warn("Could not create canvas context");
          return;
        }

        const center = [-0.25, 0];
        const zoom = 300;
        const iterations = 10;
        const greys = interpolate(props.colorRamp);

        drawLoop(
          (x, y) => {
            const start = screenToWorld(x, y, width, height, center, zoom);

            let next = start;
            for (let i = 0; i < iterations; i++) {
              next = addc(squarec(next), c);
              if (absc(next) > 2) {
                drawPixel(x, y, greys(i / iterations), context);
                return;
              }
            }

            drawPixel(x, y, greys(1), context);
          },
          width,
          height
        );
      }
    },
    [canvas, props.colorRamp]
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
