import Navbar from "@/components/Navbar";
// import {AuroraBackgroundDemo} from "@/components/AuroraBackgroundDemo"
import {BackgroundBeamsWithCollisionDemo} from "@/components/BackgroundBeamsWithCollisionDemo.jsx"
import {BackgroundBoxesDemo} from "@/components/BackgroundBoxesDemo.jsx";
// import {CardHoverEffectDemo} from "@/components/CardHoverEffectDemo.jsx";
import {CompareDemo} from "@/components/CompareDemo.jsx"
// import FloatingDockDemo from "@/components/FloatingDockDemo.jsx"; // Fixed import
import {GlobeDemo} from "@/components/GlobeDemo.jsx"
import {StickyScrollRevealDemo} from "@/components/StickyScrollRevealDemo.jsx";
import {InfiniteMovingCardsDemo} from "@/components/InfiniteMovingCardsDemo"
// import {TextGenerateEffectDemo} from "@/components/TextGenerateEffectDemo.jsx"
// import { TimelineDemo } from "@/components/TimelineDemo";
// import {MovingBorderDemo} from "@/components/MovingBorderDemo.jsx;
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo.jsx";

export default function Home() {
  return (
   <div>
    <Navbar />
    <WavyBackgroundDemo/>
    {/* <AuroraBackgroundDemo /> */}
    <BackgroundBeamsWithCollisionDemo />
    <BackgroundBoxesDemo />
    {/* <MovingBorderDemo /> essential*/}
    {/* <CardHoverEffectDemo /> */}
    <CompareDemo />
    {/* <TextGenerateEffectDemo/> */}
    <GlobeDemo />
    <StickyScrollRevealDemo/>
    <InfiniteMovingCardsDemo />
    {/* <TimelineDemo/> */}
    {/* <FloatingDockDemo /> */}
   </div>
  );
}


// import Navbar from "@/components/Navbar";
// // import {AuroraBackgroundDemo} from "@/components/AuroraBackgroundDemo"
// import {BackgroundBeamsWithCollisionDemo} from "@/components/BackgroundBeamsWithCollisionDemo.jsx"
// import {BackgroundBoxesDemo} from "@/components/BackgroundBoxesDemo.jsx";
// // import {CardHoverEffectDemo} from "@/components/CardHoverEffectDemo.jsx";
// import {CompareDemo} from "@/components/CompareDemo.jsx"
// import {FloatingDockDemo} from "@/components/FloatingDockDemo.jsx";
// import {GlobeDemo} from "@/components/GlobeDemo.jsx"
// import {StickyScrollRevealDemo} from "@/components/StickyScrollRevealDemo.jsx";
// import {InfiniteMovingCardsDemo} from "@/components/InfiniteMovingCardsDemo"
// // import {TextGenerateEffectDemo} from "@/components/TextGenerateEffectDemo.jsx"
// // import { TimelineDemo } from "@/components/TimelineDemo";
// // import {MovingBorderDemo} from "@/components/MovingBorderDemo.jsx;
// import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo.jsx";
// export default function Home() {
//   return (
//    <div>
//     <Navbar />
//     <WavyBackgroundDemo/>
//     {/* <AuroraBackgroundDemo /> */}
//     <BackgroundBeamsWithCollisionDemo />
//     <BackgroundBoxesDemo />
//     {/* <MovingBorderDemo /> essential*/}
//     {/* <CardHoverEffectDemo /> */}
//     <CompareDemo />
//     {/* <TextGenerateEffectDemo/> */}
//     <GlobeDemo />
//     <StickyScrollRevealDemo/>
//     <InfiniteMovingCardsDemo />
//     {/* <TimelineDemo/> */}
//     <FloatingDockDemo />
//    </div>

//   );
// }
