import Image from "next/image";
import FadeInWords from "./components/FadeInWords";

export default function Home() {
  var title = 'Project Yule Log';
  title = title.split(/[\s\u00A0]+/)
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <div>
        <h1>Project Yule Log </h1>
        <FadeInWords text={title} />
       (Yule understand logical engineering, let's officiate games)
       changes 
       
       </div>
       
      </main>
      
    </div>
  );
}
