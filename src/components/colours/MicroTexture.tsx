import { finishUrls } from "./FinishAssets";

/** Real INCISE chart photography, matched to the selected palette tone. */
export const useMicroTextureStyle = (hex: string) => ({
  backgroundColor: hex,
  backgroundImage: finishUrls[hex] ? `url(${finishUrls[hex]})` : undefined,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const MicroTextureCanvas = ({ hex, className }: { hex: string; className?: string }) => (
  <img
    src={finishUrls[hex]}
    alt=""
    aria-hidden="true"
    className={className}
    decoding="async"
  />
);
