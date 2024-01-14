const VirtualRealityVideo = () => {
  return (
    <section className="bg-black sm:px-[150px] pt-[60px] pb-10">
        <h1 className="uppercase tracking-[10px] text-2xl text-gray-1">
          DIE BESTE VR EXPERIENCE
        </h1>
        <h2 className="pt-5 uppercase text-white tracking-widest leading-[72px] text-[54px] font-bold">
          Mehr als nur Virtual Reality
        </h2>
        <p className="leading-5 text-sm font-bold sm:pt-[22px]">
          Erlebe das beste VR Erlebnis der Welt jetzt auch in Deutschland!
        </p>
        <p className="py-[28.8px] text-[15px] leading-5">
          In unseren hessischen Standorten in Alsfeld  und Wiesbaden warten
          filmreife VR Erlebnisse auf Euch. Dank Motion Capture und High-End
          Technik könnt ihr Euch kabellos auf dem Spielfeld bewegen und in
          Echtzeit miteinander interagieren.
        </p>
        <p className="leading-5 text-sm font-bold sm:pb-[86.8px]">
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
  )
}

export default VirtualRealityVideo;
