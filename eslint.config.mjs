import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**"] },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      // Advisory performance hint added by the React 19-era plugin. Our effects
      // intentionally sync state with external systems (scroll, intersection,
      // media queries, URL deep-links), which is a supported pattern.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
