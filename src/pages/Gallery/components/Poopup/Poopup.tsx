const Poopup = ({ src, onClose }: { src: string; onClose: () => void }) => {
    return (
      <div className={`fixed inset-0 z-50 ${src === "" ? "hidden" : "flex"} items-center justify-center`}>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}  // Close pop-up on overlay click
        ></div>
  
        {/* Pop-up Content */}
        <div className="z-50 relative border-solid border-white border-[20px] lg:w-[700px] md:w-[500px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          <button
            className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded"
            onClick={onClose}
          >
            Close
          </button>
          <img src={src} alt="Popup Image" className="object-cover w-full h-full" />
        </div>
      </div>
    );
  };
  
  export default Poopup;
  