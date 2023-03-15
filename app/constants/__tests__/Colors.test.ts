import colors from "constants/Colors";

describe("Colors", () => {
  it("should have properties for colors", () => {
    expect(colors).toHaveProperty("white");
    expect(colors).toHaveProperty("black");
    expect(colors).toHaveProperty("background");
  });

  it("should have valid hex color values for each property", () => {
    const regExp = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    expect(regExp.test(colors.white)).toBe(true);
    expect(regExp.test(colors.black)).toBe(true);
    expect(regExp.test(colors.background)).toBe(true);
  });
});
