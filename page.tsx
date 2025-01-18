import ChooseYourCause from "@/components/ChooseYourCause";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";
import MainArticle from "@/components/MainArticle";
import Navbar from "@/components/Navbar";
import NewsShowcase from "@/components/News";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <MainArticle />
      <Projects />
      <ChooseYourCause />
      <Donation />
      <NewsShowcase />
    </div>
  );
}
