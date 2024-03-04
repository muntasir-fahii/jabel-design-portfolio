import { motion, animate, useMotionValue, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";

const top = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-1_nssp9b.jpg",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858643/jabel-design/ex-2_gruqn7.jpg",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-3_wszqce.png",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858647/jabel-design/ex-4_xqfgiv.jpg",
  },
];

const bottom = [
  {
    id: 5,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858646/jabel-design/ex-5_awqxpg.jpg",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858642/jabel-design/ex-6_ptksop.jpg",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858645/jabel-design/ex-7_pbbyhl.jpg",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858645/jabel-design/ex-8_ii0hwa.jpg",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dcgreqowu/image/upload/v1708858644/jabel-design/ex-9_qq0g58.jpg",
  },
];

const Explore = () => {
  const FAST_DURATION = 10;
  const SLOW_DURATION = 75;

  const [durationTop, setDurationTop] = useState(FAST_DURATION);
  const [mustFinishTop, setMustFinishTop] = useState(false);
  const [reRenderTop, setReRenderTop] = useState(false);

  const [durationBottom, setDurationBottom] = useState(FAST_DURATION);
  const [mustFinishBottom, setMustFinishBottom] = useState(false);
  const [reRenderBottom, setReRenderBottom] = useState(false);

  let [ref, { width }] = useMeasure();

  const xTranslationTop = useMotionValue(0);
  const xTranslationBottom = useMotionValue(0);

  useEffect(() => {
    // Top Images
    let controlsTop;
    let finalPositionTop = -width / 6 - 8;

    if (mustFinishTop) {
      controlsTop = animate(
        xTranslationTop,
        [xTranslationTop.get(), finalPositionTop],
        {
          ease: "linear",
          duration:
            durationTop * (1 - xTranslationTop.get() / finalPositionTop),
          onComplete: () => {
            setMustFinishTop(false);
            setReRenderTop(!reRenderTop);
          },
        }
      );
    } else {
      controlsTop = animate(xTranslationTop, [0, finalPositionTop], {
        ease: "linear",
        duration: durationTop,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    // Bottom Images
    let controlsBottom;
    let finalPositionBottom = width / 8 - 8;

    if (mustFinishBottom) {
      controlsBottom = animate(
        xTranslationBottom,
        [xTranslationBottom.get(), finalPositionBottom],
        {
          ease: "linear",
          duration:
            durationBottom *
            (1 - Math.abs(xTranslationBottom.get()) / finalPositionBottom),
          onComplete: () => {
            setMustFinishBottom(false);
            setReRenderBottom(!reRenderBottom);
          },
        }
      );
    } else {
      controlsBottom = animate(
        xTranslationBottom,
        [-finalPositionBottom, finalPositionBottom],
        {
          ease: "linear",
          duration: durationBottom,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        }
      );
    }

    // Cleanup functions for both sets of images
    return () => {
      controlsTop?.stop();
      controlsBottom?.stop();
    };
  }, [
    xTranslationTop,
    xTranslationBottom,
    width,
    durationTop,
    durationBottom,
    mustFinishTop,
    mustFinishBottom,
    reRenderTop,
    reRenderBottom,
  ]);

  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section
      className="sp my-20 h-full w-full
       relative"
    >
      <motion.div
        ref={description}
        animate={isInView ? "open" : "closed"}
        className="border-dark w-full  grid justify-center items-center mx-auto gap-5 md:gap-10"
      >
        <div
          data-aos="zoom-in-down"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="text-center"
        >
          <h2 className="font-sans text-3xl font-bold">
            My visual exploration
          </h2>
        </div>
        <motion.div
          className="flex whitespace-nowrap shrink-0 justify-center gap-3 xl:gap-5 items-center mx-auto overflow-hidden"
          ref={ref}
          style={{ x: xTranslationTop }}
          onHoverStart={() => {
            setMustFinishTop(true), setDurationTop(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinishTop(true), setDurationTop(FAST_DURATION);
          }}
        >
          {[...top, ...top].map((image, index) => (
            <div
              className="xl:w-80 2xl:w-[28rem] xl:h-60 2xl:h-[22rem] rounded-xl sm:rounded-2xl   overflow-hidden"
              key={index}
            >
              <Image
                src={image.img}
                alt={image.id}
                width={500}
                height={500}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="exploration flex whitespace-wrap shrink-0 justify-center gap-3 xl:gap-5 items-center mx-auto overflow-hidden"
          ref={ref}
          style={{ x: xTranslationBottom }}
          onHoverStart={() => {
            setMustFinishBottom(true), setDurationBottom(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinishBottom(true), setDurationBottom(FAST_DURATION);
          }}
        >
          {[...bottom, ...bottom].map((image, index) => (
            <div
              className="xl:w-64 2xl:w-96 xl:h-52 2xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden "
              key={index}
            >
              <Image
                src={image.img}
                alt={image.id}
                width={500}
                height={500}
                priority
                className="h-full w-full object-cover "
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="exploration mx-auto my-5 md:my-0"
        >
          <Link
            className="font-oval font-medium shadow-md bg-dark text-white py-[0.875rem] px-8 rounded-[6.25rem] hover:bg-gray hover:text-dark eq"
            href={"https://dribbble.com/jabelahmed"}
          >
            view more
          </Link>
        </motion.div>
      </motion.div>
      <div className="circle-2 h-72 w-72 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] mx-auto absolute top-44 lg:top-72 xl:top-[30rem] 2xl:top-[40rem] left-12 sm:left-44 md:left-48 lg:left-60 xl:left-[25rem] 2xl:left-[44rem] rounded-full"></div>
    </section>
  );
};

export default Explore;
