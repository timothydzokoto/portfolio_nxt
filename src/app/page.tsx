import Image from "next/image";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex bg-white text-black dark:text-white dark:bg-base-200 pt-[10vh] w-full min-h-screen flex-col items-center ">
      <Hero />
    </main>
  );
}
