"use client";

// import BookCard from "./BookCard";

// interface BookModalProps {
//   showModal: boolean;
//   onClose: () => void;
// }

// const BookModal: React.FC<BookModalProps> = ({ showModal, onClose }) => {
//   return (
//     <>
//       {showModal && (
//         <div
//           id="default-modal"
//           tabIndex={-1}
//           aria-hidden="true"
//           className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black/75 bg-opacity-50"
//         >
//           <div className="relative p-4 sm:w-[800px] max-h-full">
//             <div className="relative bg-white sm:px-16">
//               <h1 className="text-aquagreen text-center text-[25px] uppercase pt-8">
//                 WO MÖCHTEST DU BUCHEN?
//               </h1>
//               <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 pb-10 pt-10 sm:px-0 px-12">
//                 <BookCard
//                   title="Alsfeld"
//                   description="
//                   Next Level Erlebnisse
//                   Im Grund 3
//                   36304 Alsfeld"
//                   img="toys2.png"
//                   price="3"
//                 />
//                 <BookCard
//                   title="Alsfeld"
//                   description="
//                   Lili Shopping Center
// Bahnhofsplatz 3
// 65189 Wiesbaden"
//                   img="toys.jpeg"
//                   price="3"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BookModal;

import React, { useEffect, useRef } from 'react';
import BookCard from './BookCard';

interface BookModalProps {
  showModal: boolean;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ showModal, onClose }) => {
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalOverlayRef.current &&
        !modalOverlayRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (showModal) {
      // Attach the event listener when the modal is shown
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, onClose]);

  return (
    <>
      {showModal && (
        <div
          ref={modalOverlayRef}
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-black/75 bg-opacity-50"
        >
          <div className="relative p-4 sm:w-[800px] max-h-full">
            <div className="relative bg-white sm:px-16">
              <h1 className="text-aquagreen text-center text-[25px] uppercase pt-8">
                WO MÖCHTEST DU BUCHEN?
              </h1>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 pb-10 pt-10 sm:px-0 px-12">
                <BookCard
                  title="Alsfeld"
                  description="
                  Next Level Erlebnisse
                  Im Grund 3
                  36304 Alsfeld"
                  img="toys2.png"
                  price="3"
                />
                <BookCard
                  title="Alsfeld"
                  description="
                  Lili Shopping Center
                  Bahnhofsplatz 3
                  65189 Wiesbaden"
                  img="toys.jpeg"
                  price="3"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookModal;

