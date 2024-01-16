import Banner from "./components/Banner";
import Explore from "./components/Explore";
import GreatesOutdoors from "./components/GreatesOutdoors";
import Live from "./components/Live";
import GreatesOutdoorsImg from "@/public/pexels-photo-355770.jpeg";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatesOutdoors
          img={GreatesOutdoorsImg}
          title="The Greatest Outdoors"
          desc="Wishlists curated by Airbnb"
          linkText="Git Inspired"
        />
      </main>
      <Footer />
    </>
  );
}
