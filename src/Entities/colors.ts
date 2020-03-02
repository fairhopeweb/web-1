import { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";

const LIGHT_COLORS = {
  LIST_ITEM_HOVER: `rgba(0, 0, 0, 0.04)`,
  LIST_ITEM_ACTIVE: `rgba(0, 0, 0, 0.10)`,
  PRIMARY: `rgb(106, 61, 232)`,
  TEXT_COLOR: "#333",
  CHEVRON_COLOR: "rgb(0, 0, 0, 0.2)",
  ACTIVE_CHEVRON_COLOR: "rgb(0, 0, 0, 0.5)"
};

const DARK_COLORS = {
  LIST_ITEM_HOVER: `rgba(255, 255, 255, 0.04)`,
  LIST_ITEM_ACTIVE: `rgba(255, 255, 255, 0.10)`,
  PRIMARY: `#bb86fc`,
  TEXT_COLOR: "#fff",
  CHEVRON_COLOR: "rgb(255, 255, 255, 0.2)",
  ACTIVE_CHEVRON_COLOR: "rgb(255, 255, 255, 0.5)"
};

export const useColors = () => {
  const darkMode = useDarkMode();
  const [colors, setColors] = useState(LIGHT_COLORS);
  useEffect(() => {
    if (darkMode.value) {
      setColors(DARK_COLORS);
    } else {
      setColors(LIGHT_COLORS);
    }
  }, [darkMode.value]);
  return colors;
};

export default useColors;
