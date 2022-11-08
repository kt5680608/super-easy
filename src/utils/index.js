const componentToHex = (color) => {
  const hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const addBrightness = (hex, brightness) => {
  const tmp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  const result = {
    r:
      Math.trunc(parseInt(tmp[1], 16) * brightness) > 255
        ? 255
        : Math.trunc(parseInt(tmp[1], 16) * brightness) < 0
        ? 0
        : Math.trunc(parseInt(tmp[1], 16) * brightness),
    g:
      Math.trunc(parseInt(tmp[2], 16) * brightness) > 255
        ? 255
        : Math.trunc(parseInt(tmp[2], 16) * brightness) < 0
        ? 0
        : Math.trunc(parseInt(tmp[2], 16) * brightness),
    b:
      Math.trunc(parseInt(tmp[3], 16) * brightness) > 255
        ? 255
        : Math.trunc(parseInt(tmp[3], 16) * brightness) < 0
        ? 0
        : Math.trunc(parseInt(tmp[3], 16) * brightness),
  };
  return rgbToHex(result.r, result.g, result.b);
};
