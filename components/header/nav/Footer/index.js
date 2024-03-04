import Link from "next/link";
import styles from "./style.module.scss";

const CV_LINK =
  "https://drive.google.com/uc?export=download&id=1h5fnAxSzprA4qnqjEjwjlHFqHZZGYxPG";

export default function index() {
  return (
    <div className={styles.footer}>
      <div className="flex flex-col justify-between items-center gap-5">
        <Link
          className=" font-oval bg-slate-50 text-black py-[0.875rem] px-8 rounded-[6.25rem] hover:bg-dark hover:text-light eq"
          href={CV_LINK}
          target="_blank"
          download={CV_LINK}
        >
          cv
        </Link>
        <Link
          className="font-oval font-medium shadow-md bg-black text-white py-[0.875rem] px-8  rounded-[6.25rem] hover:bg-gray hover:text-dark eq"
          href={"./"}
        >
          mail me
        </Link>
      </div>
    </div>
  );
}
