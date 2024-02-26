import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import SETTINGS from "../settings";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title = SETTINGS.siteName, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Flex direction="column" minH="100vh">
        <Header />
        <Flex as="section" direction="column" flex="1" mt={'15px'}>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;