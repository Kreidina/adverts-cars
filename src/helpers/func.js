import { useLocation } from "react-router-dom";

export const Location = () => {
  const location = useLocation();
  const pathSegments = location.pathname;
  return pathSegments;
};
