import Announcement from "../../components/AtomicDesign/molecules/Announcement";
import Footer from "../../components/AtomicDesign/molecules/Footer";
import Header from "../../components/AtomicDesign/molecules/Header";
import CatalogStore from "../../components/AtomicDesign/organisms/CatalogStore";
import { ContainerHome } from "./styles";

export default function HomePage() {
  return (
    <ContainerHome>
      <Announcement />
      <Header />
      <CatalogStore />
      <Footer />
    </ContainerHome>
  );
}
