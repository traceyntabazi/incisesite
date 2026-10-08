import { describe, expect, it } from "vitest";
import { microColours } from "./ColourData";
import { finishUrls } from "./FinishAssets";

describe("chart palette preservation", () => {
  it("retains every existing shade when replacing the finish", () => {
    expect(Object.fromEntries(microColours.map(c => [c.id, c.hex]))).toEqual({
      y1: "#F2EDE5",
      y2: "#E8E0D2",
      y3: "#DDD3C1",
      y4: "#CFC2A8",
      y5: "#C4B48E",
      y6: "#B8A06A",
      y7: "#9E8855",
      y8: "#7A6B48",
      o1: "#EDE2D4",
      o2: "#E2D0BD",
      o3: "#D4B9A0",
      o4: "#C49A78",
      o5: "#B07E5A",
      o6: "#9A6842",
      o7: "#7A5435",
      r1: "#E0D0C8",
      r2: "#D4BAB0",
      r3: "#B0897A",
      r4: "#8E6258",
      r5: "#6E4A40",
      r6: "#5A3E35",
      b1: "#E0DDD8",
      b2: "#CCC8C0",
      b3: "#B0ACA5",
      b4: "#8E8A82",
      b5: "#6A6860",
      b6: "#4A4842",
      b7: "#353330",
      g1: "#E4E2DA",
      g2: "#CCC9BA",
      g3: "#A8A48E",
      g4: "#8A8A6E",
      g5: "#7A8878",
      g6: "#5A5E45"
    });
  });
  it("provides a photographed finish for every existing shade", () => {
    expect(microColours.filter(c => !finishUrls[c.hex]).map(c => c.id)).toEqual([]);
    expect(Object.keys(finishUrls)).toHaveLength(34);
  });
});
