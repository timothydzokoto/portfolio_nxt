"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconButton } from "./IconButton";
import Link from "next/link";

export const Socials = () => {
  return (
    <div className="flex gap-2 md:gap-4 items-center justify-center text-2xl md:text-xl">
      <Link href={"/github.com/timothdzokoto"}>
        <IconButton
          icon={<FaGithub />}
          text=""
          style="btn btn-sm btn-accent btn-outline rounded-full text-2xl"
          onclick={() => console.log("Linkedin Clicked")}
        />
      </Link>

      <Link href={"/linkedin.com/in/timothy-dzokoto"}>
        <IconButton
          icon={<FaLinkedin />}
          text=""
          style="btn btn-sm btn-accent btn-outline rounded-full text-2xl"
          onclick={() => console.log("Linkedin Clicked")}
        />
      </Link>

      <Link href={"/linkedin.com/in/timothy-dzokoto"}>
        <IconButton
          icon={<FaYoutube />}
          text=""
          style="btn btn-sm btn-accent btn-outline rounded-full text-2xl"
          onclick={() => console.log("Linkedin Clicked")}
        />
      </Link>

      <Link href={"/linkedin.com/in/timothy-dzokoto"}>
        <IconButton
          icon={<FaTwitter />}
          text=""
          style="btn btn-sm btn-accent btn-outline rounded-full text-2xl"
          onclick={() => console.log("Linkedin Clicked")}
        />
      </Link>
    </div>
  );
};
