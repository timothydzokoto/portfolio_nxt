"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full md:w-[50%] md:h-[50%] relative order-1 md:order-none mb-8 md:md-0">
      <motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className=" w-[398] h-[398] md:w-[498] md:h-[498] dark:mix-blend-lighten"
        >
          <Image
            src={`/assets/timpic.png`}
            priority
            quality={100}
            fill
            alt="hello_image"
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Circle around hero image */}

      <motion.svg
        className="w-[300px] sl:w-[506] h-[300px] xl:h-[506]"
        fill="transparent"
        viewBox="0 3 586 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r={`250`}
          stroke={`#00ff99`}
          strokeWidth={`4`}
          strokeLinecap={`round`}
          strokeLinejoin={`round`}
          initial={{
            strokeDasharray: "24 10 0 0",
          }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 253 22 22"],
            rotate: [120, 360],
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
