import { useState } from "react";
import Modal from "react-modal";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

Modal.setAppElement("#root");

interface YtVideoProps{
    videoId:string;
}

const  YtVideoPopup:React.FC<YtVideoProps> = ({videoId})=> {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = ()=> setIsOpen(true);
    const closeModal = ()=> setIsOpen(false);
  return (
    <div>
        <button onClick={openModal} className="primary-button flex flex-row justify-between">
            Watch Video
            <MdOutlineSlowMotionVideo className=" text-[22px] ml-3 mt-[-2px] md:mt-0" />
        </button>
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black/70 z-9999"
        overlayClassName="fixed inset-0 bg-black/70"
        style={{ overlay: { zIndex: 1000 } }}
        >
            <div className="relative bg-white shadow-lg w-full max-w-3xl p-4">
                <button onClick={closeModal} className="absolute top-[-30px] right-2 text-[16px] md:text-xl text-gray-400 cursor-pointer">
                    CLOSE X
                </button>
                <div className="video-blk aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        frameBorder="0"
                        title="Youtube Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default YtVideoPopup;