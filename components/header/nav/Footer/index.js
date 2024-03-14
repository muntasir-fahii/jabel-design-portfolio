import Link from "next/link";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import copy from "clipboard-copy";

const CV_LINK =
  "https://drive.google.com/uc?export=download&id=1h5fnAxSzprA4qnqjEjwjlHFqHZZGYxPG";

export default function Index() {
  const initialText = "mail me";
  const copiedText = "heyjabel@gmail.com";

  const [buttonText, setButtonText] = useState(initialText);

  useEffect(() => {
    if (buttonText === "copied!") {
      const resetTimeout = setTimeout(() => {
        setButtonText(initialText);
      }, 1000);

      return () => clearTimeout(resetTimeout);
    }
  }, [buttonText, initialText]);

  const handleButtonClick = async () => {
    try {
      await copy(copiedText);
      setButtonText("copied!");
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };

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
          onClick={handleButtonClick}
          className="font-oval font-medium shadow-md bg-black text-white py-[0.875rem] px-8  rounded-[6.25rem] hover:text-light eq"
          href={""}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
