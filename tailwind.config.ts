import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        hover: "rgb(var(--hover))",
        muted: "rgb(var(--muted))",
        "muted-foreground": "rgb(var(--muted-foreground))",
        border: "rgb(var(--border))",
      },
      screens: {
        xs: "475px",
      },
    },
  },
};
