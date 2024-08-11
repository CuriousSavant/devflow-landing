'use client'

import {
  Container,
} from "@chakra-ui/react";

import Navbar from '../components/navbar';
import Hero from '../components/hero'
import Features from '../components/features'
import Testimonials from '../components/Testimonials'
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Container maxW={{ base: "100%", md:"1200px" }} fontFamily="body">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </Container>
    </>
  );
}

