export default function App() {
  return (
    <div className="min-h-screen bg-custom-dark-gradient-tars flex items-center justify-center font-kode text-white p-6">
      
      <div className="relative w-full max-w-6xl min-h-[550px]">
        <div className="glass-card relative z-2 w-full h-full flex flex-col md:flex-row items-center gap-12 bg-white/5 border border-white/20 backdrop-blur-xl rounded-[40px] py-20 px-16 shadow-2xl hover:shadow-3xl">
         <img
    src="/About_Us/desktop_border.svg"
    alt="decorative border"
    className="hidden md:block absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
  />
          <img
    src="/About_Us/mobile_border.svg"
    alt="mobile border"
    className="block md:hidden absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
  />
           
          <div className="hidden md:block w-50 md:w-80 flex-shrink-0 animate-float">
            <img src="/About_Us/tars-icon.svg" alt="TARS Logo" className="w-full h-auto" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-8xl font-bold mb-6">About Us</h1>
            <p className="text-base leading-relaxed opacity-90">
              Robots are taking over!
              <br />
              If you ever wanted to know the ins and outs of robotics, or better, make your own robots, then this is the place for you.
              <br />
              We are an engineering society dedicated to the fields of automation and robotics.  
              We include members from all branches, be it circuital or non-circuital with only one thing in common: curiosity. In order to 
              investigate the many applications and potential that exists in this area, we conduct seminars, guest speakers, and competitions. 
              By providing hands-on experience and guidance, we encourage robotics not just as a hobby but also as a career opportunity for all 
              tech-enthusiasts. We empower students to bridge theory and implementation, enabling solutions that merge embedded hardware, machine learning, AI, and automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
