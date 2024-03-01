import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const animateSplitText = (targetSelector) => {
  let mySplitText = new SplitText(targetSelector, { type: "chars" });
  let chars = mySplitText.chars;

  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.5,
  });
};

export default animateSplitText;
