/** @format */

import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "../sections/footer";
import Navbar from "../sections/navbar";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";

const MainLayout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navbar path={router.asPath} />
      <Box as="main">
        <Head>
          <link rel="shortcut icon" href="/images/fav.png" />
        </Head>
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
