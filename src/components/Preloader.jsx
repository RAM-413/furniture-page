import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  return (
    <div>
      {loder ? (
        <section
          style={{ zIndex: "100" }}
          className="bg-[#010223] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center flex-col text-center">
            <div class="loader">
              <section class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </section>

              <p class="text-[40px] text-white">loading...</p>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Preloader;
