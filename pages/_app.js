import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Space News</title>
      </Head>
      <main className={"dark"}>
        {/* <Auth.UserContextProvider supabaseClient={supabase}> when im done with base app add auth , or use other provider/like next auth gh/goog/fb....*/}
        <Component {...pageProps} />
        {/* </Auth.UserContextProvider> */}
      </main>
    </>
  );
}
