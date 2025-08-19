import Navbar from "@/components/Navbar";
// import {AuroraBackgroundDemo} from "@/components/AuroraBackgroundDemo"
import {BackgroundBeamsWithCollisionDemo} from "@/components/BackgroundBeamsWithCollisionDemo.jsx"
import {BackgroundBoxesDemo} from "@/components/BackgroundBoxesDemo.jsx";
import {CardHoverEffectDemo} from "@/components/CardHoverEffectDemo.jsx";
import {CompareDemo} from "@/components/CompareDemo.jsx"
import {FloatingDockDemo} from "@/components/FloatingDockDemo.jsx";
import {GlobeDemo} from "@/components/GlobeDemo.jsx"
import {StickyScrollRevealDemo} from "@/components/StickyScrollRevealDemo.jsx";
import {TextGenerateEffectDemo} from "@/components/TextGenerateEffectDemo.jsx"
import { TimelineDemo } from "@/components/TimelineDemo";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo.jsx";
export default function Home() {
  return (
   <div>
    <Navbar />
    <WavyBackgroundDemo/>
    {/* <AuroraBackgroundDemo /> */}
    <BackgroundBeamsWithCollisionDemo />
    <BackgroundBoxesDemo />
    <CardHoverEffectDemo />
    <CompareDemo />
    <TextGenerateEffectDemo/>
    <GlobeDemo />
    <StickyScrollRevealDemo/>
    <TimelineDemo/>
    <FloatingDockDemo />
   </div>

  );
}
