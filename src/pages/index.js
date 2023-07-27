import RootLayout from "@/components/layout/RootLayout";
import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";

const HomePage = () => {
  return (
    <div >
      <Head>
        <title>Next home page</title>
        <meta name="home page" description="this page is created by next js"></meta>
      </Head>
      <h1>Hello world</h1>
      <Button type="primary">
        <Link href={'/about'}>About</Link>
      </Button>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}