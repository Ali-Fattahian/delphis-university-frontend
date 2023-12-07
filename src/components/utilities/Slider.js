import { useState, useRef, useEffect } from "react";

export default function Slider({ elements }) {
  const indicatorWidthPercent =
    elements.length > 0 ? 100 / elements.length : 100;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) {
      return;
    }

    // Find all the slides inside of the slider
    const slides = sliderCurrent.querySelectorAll("div");
    const slidesArray = Array.from(slides);

    // Wait until a slide is 50% visible, then find it's index in the array of
    // all slides and update the currentSlideIndex
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slidesArray.indexOf(entry.target);
            setCurrentSlideIndex(index);
          }
        });
      },
      {
        root: sliderCurrent,
        threshold: 0.5,
      }
    );
    slides.forEach((slide) => observer.observe(slide));

    return () => slides.forEach((slide) => observer.unobserve(slide));
  }, []);

  return (
    <div className="w-full">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory"
        style={{
          paddingBottom: "15px",
          clipPath: "inset(0 0 15px 0)",
        }}
      >
        {elements.map((e) => {
          return (
            <div
              key={e.key}
              className="w-full flex-shrink-0 snap-start max-w-[300px] mx-3"
            >
              <img src={e.imageURL} alt={e.title} className="object-cover" />
              <div className="p-3 bg-neutral-300 border-[1px]">
                <h5 className="text-vgred hover:underline cursor-pointer text-sm">
                  <a href={`news-center/${e.id}`}>{e.title}</a>
                </h5>
                <small className="mt-3 text-xs">{e.date}</small>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll indicator */}
      <div className="w-full h-0.5 relative bg-gray-300">
        <div
          className="h-0.5 absolute top-0 left-0 bg-gray-500"
          style={{
            width: `${indicatorWidthPercent}%`,
            left: `${indicatorWidthPercent * currentSlideIndex}%`,
            transition: "left 150ms ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
