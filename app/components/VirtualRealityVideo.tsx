const VirtualRealityVideo = () => {
  return (
    <section className="bg-black sm:px-[150px] px-5 sm:pt-[60px] pt-12 pb-10">
      <h1 className="uppercase sm:tracking-[10px] tracking-[4px] sm:text-2xl text-xs text-gray-1">
        DIE BESTE VR EXPERIENCE
      </h1>
      <h2 className="pt-5 uppercase text-white tracking-widest sm:leading-[72px] sm:text-[54px] text-3xl font-bold">
        Mehr als nur Virtual Reality
      </h2>
      <p className="leading-5 text-sm font-bold pt-[22px] text-white">
        Erlebe das beste VR Erlebnis der Welt jetzt auch in Zurich! 
      </p>
      <p className="py-[28.8px] sm:text-[15px] text-[13px] leading-5 text-white">
        In unseren Zurich  und warten filmreife VR Erlebnisse auf Euch. Dank
        Motion Capture und High-End Technik könnt ihr Euch kabellos auf dem
        Spielfeld bewegen und in Echtzeit miteinander interagieren.
      </p>
      <p className="leading-5 text-sm font-bold sm:pb-[86.8px] pb-10 text-white">
        So habt ihr VR garantiert noch nie erlebt!
      </p>
      <div className="bg-dark-1">
        <video
          className="elementor-video"
          src="https://video.sandboxvr.com/hypevideo_1080p.mp4"
          controls
          muted
          controlsList="nodownload"
        ></video>
      </div>
    </section>
  );
};

export default VirtualRealityVideo;
