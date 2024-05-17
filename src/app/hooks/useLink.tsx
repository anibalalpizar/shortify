import { useContext } from "react";
import { LinkContext } from "../context/LinkContext";

export const useLink = () => {
  const link = useContext(LinkContext);
  if (!link) throw new Error("useLink must be used within a LinkProvider");
  return link;
};
