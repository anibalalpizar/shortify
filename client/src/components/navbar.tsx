import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1>Shortify</h1>
      <div className="flex gap-x-2 items-center">
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="https://github.com/Anibal-Alpizar/shortify"
        >
          <FaGithub size={17} />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
