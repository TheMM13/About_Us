export default function App() {
  return (
    <div className="min-h-screen bg-custom-dark-gradient-tars flex items-center justify-center font-kode text-white p-6">
      <div
        className="w-full max-w-2xl flex flex-col md:flex-row items-center gap-8
                   bg-white/10 border border-white/20 backdrop-blur-lg
                   rounded-[35px] p-8 shadow-2xl hover:shadow-3xl"
      >
        <div className="w-40 md:w-52 flex-shrink-0 animate-float">
          <img src="/tars-icon.svg" alt="TARS Icon" className="w-16 h-16" alt="AI Brain Icon"
            className="w-full h-auto"/>
        </div>
        <div className="flex-1 font-kode text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">TARS is</h1>
          <p className="text-sm leading-relaxed opacity-90">
            The typography system is one of the most foundational parts of any interface design.
            If your users are unable to read your content, you can say goodbye to them immediately.
            That’s why even a rudimentary understanding of typography means you can determine for
            yourself the best fonts for modern UI design.
          </p>
        </div>
      </div>
    </div>
  );
}
