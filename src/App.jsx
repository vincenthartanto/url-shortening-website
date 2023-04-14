import Navigationbar from "./Components/Navigationbar";
import "./App.css";
import Header from "./Components/Header";
import ShortenLink from "./Components/ShortenLink";
import IconBrand from "./assets/icon-brand-recognition.svg";
import AdvanceDescription from "./Components/AdvanceDescription";
import DetailtedRecordsIcon from "./assets/icon-detailed-records.svg";
import FullyCustomizableIcon from "./assets/icon-fully-customizable.svg";
import Footer from "./Components/Footer";
import useWindow from "./Hooks/useWindow";
function App() {
  const window = useWindow();
  return (
    <div className="w-full h-full flex flex-col justify-bet">
      <Navigationbar></Navigationbar>
      <Header></Header>
      <main className="flex flex-col justify-center items-center w-full p-8 space-y-24">
        <div className="text-center space-y-4 md:mb-[10rem]">
          <h1 className="font-bold text-2xl">Advanced Statistics</h1>
          <p className="text-grey">
            Track how your link are performing across the web with our advanced
            static dashboard
          </p>
        </div>
        <div className="relative h-full w-full">
          {window.width < 768 ? (
            <div className="w-1 bg-blue absolute  h-full left-[50%] -z-10 -translate-x-1/2"></div>
          ) : (
            <div className="h-1 bg-blue absolute  w-[80%]  -z-10 top-1/2 -translate-y-1/2"></div>
          )}

          <div className="space-y-12 flex flex-col md:flex-row item-center justify-center md:space-x-4 md:space-y-0 h-full w-full">
            <div className="md:relative md:bottom-12">
              <AdvanceDescription
                title={"Brand Recognition"}
                description={`  Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links instil confidence in your content.`}
                img={IconBrand}
              ></AdvanceDescription>
            </div>
            <div>
              <AdvanceDescription
                title={"Detailed Records"}
                description={` Gain insights into who is clicking your links. Knowing when and where people enggage with your content helps inform better.`}
                img={DetailtedRecordsIcon}
              ></AdvanceDescription>
            </div>
            <div className="md:relative md:top-12">
              <AdvanceDescription
                title={"Fully Customizable"}
                description={`Improved brand awareness and content discoverabiolity throuhg customizable links, supercharging audience engagement.`}
                img={FullyCustomizableIcon}
              ></AdvanceDescription>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
