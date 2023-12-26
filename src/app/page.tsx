import Image from "next/image";
import Asider from "@/components/home/Asider";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <Asider />
      <article>具体内容</article>
    </div>
  );
}
