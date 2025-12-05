import { LayoutGridDemo } from "./components/DetailPage/LayoutGridDemo";
import { FloatingNavDemo } from "./components/FloatingNavDemo";
import PortfolioHeroDemo from "./components/HomePage/PortfolioHeroDemo";
import AppleCardsCarouselDemo from "./components/ProjectPage/AppleCardsCarouselDemo";
import ContactPage from "./components/ContactPage/ContactPage";

import Certificates from "./components/AchievementPage/Certificates";

export default function App() {
  return (
    <><FloatingNavDemo /><PortfolioHeroDemo /><LayoutGridDemo /><AppleCardsCarouselDemo /><Certificates /><ContactPage /></>
  );
}
