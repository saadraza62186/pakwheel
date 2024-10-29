import Image from "next/image";
import Navbar from "./components/Navbar";
import Heros from "./components/Heros";
import Card from "./components/Card";
import Link from "next/link";

export default function Home() {
  return (
   <>
      <Navbar />
      <Heros />
      <Card />  
   </>
  );
}
