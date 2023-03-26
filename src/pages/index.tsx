import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ChatComponent from "@/components/ui/chat/ChatComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Chat IA</title>
        <meta name="description" content="Chat IA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full flex flex-col">
        <ChatComponent />
      </main>
    </>
  );
}
