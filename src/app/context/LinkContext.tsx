import { createContext } from "react";
import { Link } from "@/types/link";

export const LinkContext = createContext<Link | undefined>(undefined);
