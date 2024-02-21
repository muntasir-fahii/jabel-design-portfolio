import Link from "next/link";

const Navbar = () => {
  return (
    <header className="wrapper h-24 flex justify-between items-center">
      <div className="flex justify-between items-center gap-10">
        <Link className="font-oval font-semibold" href={"./"}>
          jabel.design
        </Link>
        <ul className="flex font-sans justify-between gap-10 bg-gray py-[0.875rem] px-6 items-center rounded-[6.25rem]">
          <li className="nav-link">
            <Link href={"https://dribbble.com/jabelahmed"}>dribble</Link>
          </li>
          <li className="nav-link">
            <Link href={"https://www.behance.net/jabelahmed"}>behance</Link>
          </li>
          <li className="nav-link">
            <Link href={"https://www.linkedin.com/in/jabel-ahmed-1810b3152"}>
              linkedin
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center gap-10">
        <Link
          className="font-oval bg-gray py-[0.875rem] px-8  rounded-[6.25rem]"
          href={"./"}
        >
          cv
        </Link>
        <Link
          className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-12  rounded-[6.25rem]"
          href={"./"}
        >
          mail me
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
