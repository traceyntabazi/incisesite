import { useRef, useEffect } from "react";

/**
 * Renders a tiny canvas with procedural grain/noise to simulate 
 * microcement texture, then returns it as a CSS background-image.
 */
export const useMicroTextureStyle = (hex: string) => {
  return {
    backgroundColor: hex,
    backgroundImage: `
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E"),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.015' numOctaves='3' seed='42'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)' opacity='0.06'/%3E%3C/svg%3E")
    `,
    backgroundSize: "256px 256px, 512px 512px",
  };
};

/**
 * Canvas-based microcement texture generator for the immersive preview.
 * Creates organic trowel-mark patterns.
 */
export const MicroTextureCanvas = ({
  hex,
  className,
}: {
  hex: string;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    // Base color
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, w, h);

    // Generate organic noise texture
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);

      // Multi-scale noise simulation
      const noise1 = (Math.sin(x * 0.02 + y * 0.015) * 0.5 + 0.5) * 12;
      const noise2 = (Math.cos(x * 0.05 - y * 0.03) * 0.5 + 0.5) * 8;
      const noise3 = (Math.random() - 0.5) * 18;
      // Trowel streak effect - horizontal bias
      const trowel = Math.sin(y * 0.008 + x * 0.002) * 6;

      const variation = noise1 + noise2 + noise3 + trowel - 16;

      data[i] = Math.max(0, Math.min(255, data[i] + variation));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + variation));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + variation));
    }

    ctx.putImageData(imageData, 0, 0);

    // Add subtle trowel marks
    ctx.globalCompositeOperation = "overlay";
    ctx.globalAlpha = 0.04;
    for (let i = 0; i < 12; i++) {
      const startY = Math.random() * h;
      ctx.beginPath();
      ctx.moveTo(0, startY);
      ctx.bezierCurveTo(
        w * 0.3, startY + (Math.random() - 0.5) * 30,
        w * 0.7, startY + (Math.random() - 0.5) * 30,
        w, startY + (Math.random() - 0.5) * 20
      );
      ctx.strokeStyle = Math.random() > 0.5 ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.3)";
      ctx.lineWidth = Math.random() * 40 + 10;
      ctx.stroke();
    }
  }, [hex]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      className={className}
      style={{ imageRendering: "auto" }}
    />
  );
};
