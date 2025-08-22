import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const NavBar = () => {
  return (
    <header
      className="bg-base-300 border-b border-base-content/10 "
      style={{ backgroundColor: "#191919" }}
    >
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white font-serif tracking-tight ">
            Notion't
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-active btn-accent ">
              <PlusIcon className="size-5" />
              <span> New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
