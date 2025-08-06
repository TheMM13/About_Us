import borderDesktop from "./assets/desktop_border.svg";
import borderMobile from "./assets/mobile_border.svg";
export default function App() {
  return (
    <div className="min-h-screen bg-custom-dark-gradient-tars flex items-center justify-center font-kode text-white p-6">
      
      <div className="relative w-full max-w-4xl aspect-[1228/812] mx-auto">
        <div className="glass-card relative z-2 w-full h-full flex flex-col md:flex-row items-center gap-12 bg-white/2  backdrop-blur-xl rounded-[40px] py-20 px-16 shadow-2xl hover:shadow-3xl">
         <img
    src={borderDesktop}
    alt="Decorative Border"
    className="hidden md:block absolute inset-0 w-[115%] h-auto object-contain pointer-events-none z-0 left-1/2 -translate-x-1/2"
/>

  <img
    src={borderMobile}
    alt="Decorative Border Mobile"
    className="block md:hidden absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
  />   
          <div className="hidden md:block w-20 md:w-60 flex-shrink-0 animate-float">
            <img src="/About_Us/tars-icon.svg" alt="TARS Logo" className="w-full h-auto" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl font-bold mb-4">About Us</h1>
            <p className="text-base leading-relaxed opacity-90">
              Robots are taking over!
              <br/>
              If you ever wanted to know the ins and outs of robotics, or better, make your own robots, then this is the place for you.
              <br/>
              We are an engineering society dedicated to the fields of automation and robotics.  
              We include members from all branches, be it circuital or non-circuital with only one thing in common: curiosity. In order to 
              investigate the many applications and potential that exists in this area, we conduct seminars, guest speakers, and competitions. 
               We empower students to bridge theory and implementation, enabling solutions that merge embedded hardware, machine learning, AI, and automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
