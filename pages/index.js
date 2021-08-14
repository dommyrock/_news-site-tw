import Head from "next/head";
import VerticalTimeline from "../components/VerticalTimeline";

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div>
      <Head>
        <title>_ news</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center"> */}
      <main>
        {/* TOOD: css on <div> above and <main> are overriding my old css so i need to figure out how to refactor it to work  */}
        <VerticalTimeline />
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}
