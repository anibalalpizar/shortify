import { CardDemo } from "@/components/card-form";
import React from "react";
import { LinkProvider } from "./context/provider/LinkProvider";

function HomePage() {
  return (
    <LinkProvider>
      <div className="flex flex-col items-center justify-center h-screen">
        <CardDemo />
      </div>
    </LinkProvider>
  );
}

export default HomePage;
