import Image from "next/image";
import Spinner from "./components/Spinner/Spinner";

export default function Home() {
  return (
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1>Project Yule Log </h1>
        (Yule understand logical engineering, let's officiate games)
        changes 
        
        </div>
        <Spinner />
        </main>
        
      </div>
  );
}
