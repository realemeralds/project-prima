import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/IndexFooter";
import Problems from "../components/Problems";
import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";
import BotPanel from "../components/BotPanel";

const Home = () => {
  return (
    <>
      <Navbar menuVisible={true} />
      <Header />
      <Problems />
      <Canvas />
      <Footer />
      <BotPanel />
    </>
  );
};

export default Home;
