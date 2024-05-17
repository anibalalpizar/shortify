"use client";

import { shortenLinkRequest } from "@/app/api/link.api";
import { useState } from "react";
import { LinkContext } from "../LinkContext";

export const LinkProvider = ({ children }: { children: React.ReactNode }) => {
  const [shortenedLink, setShortenedLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const shortenLink = async (link: string) => {
    setLoading(true);
    try {
      const res = await shortenLinkRequest(link);
      setShortenedLink(res.data.shortUrl);
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinkContext.Provider
      value={{ shortenedLink, error, loading, shortenLink }}
    >
      {children}
    </LinkContext.Provider>
  );
};
