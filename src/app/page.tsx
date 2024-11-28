import { Hero } from "./Component/Hero";
import { Courses } from "./Component/Courses";
import Whatwedo from "./Component/Whatwedo";
import Interested from "./Component/interested";
import Footer from "./Footer/Footer";
/**
 * This is the main Home page component of the application.
 * It renders the Hero and Couses components.
 *
 * @returns {JSX.Element} - The JSX representation of the Home page.
 */
export default function Home() {
  
  return (
    <div className="flex flex-col min-h-fit ">
      <Hero />
      <Courses />
      <Whatwedo />
      <Interested />
      <Footer />
    </div>
  );
}
