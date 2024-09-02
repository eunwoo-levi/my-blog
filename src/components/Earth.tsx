"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Earth = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = canvas;

      // 캔버스의 크기를 조정
      canvas.width = clientWidth * 2;
      canvas.height = clientHeight * 2;

      // createGlobe 함수 호출
      const globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: canvas.width,
        height: canvas.height,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });

      return () => {
        globe.destroy();
      };
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "auto", aspectRatio: "1" }}
    />
  );
};

export default Earth;
