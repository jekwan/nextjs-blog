import Head from "next/head";
import globals from "../lib/globals";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{globals.title}</title>
      </Head>
      <section>
        <p>안녕하세요. 프론트엔드 개발자 김제관입니다. 새롭게 배운 지식들을 정리하고 공유합니다.</p>
      </section>
    </>
  );
}
