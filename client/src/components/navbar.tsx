import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <FaPaperclip size={20} />
        <h1 className="ml-2">Shortify</h1>
      </div>
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
