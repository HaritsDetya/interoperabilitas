import Image from "next/image";
import "@/styles/globals.css"
import ImportData from "@/components/ImportData";
import ImportDataBack from "@/components/ImportDataBack";
import axios from 'axios';

export default function Home() {
  return (
    <>
      {/* <ImportData/> */}
      <ImportDataBack/>
    </>
  );
}
