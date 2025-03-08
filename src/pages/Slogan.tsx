import { useState, useEffect } from "react";

const messages = [
  'วันที่คุณรู้สึก <span class="font-semibold text-5xl">”ท้อแท้”</span>',
  '<span class="font-semibold text-5xl">“เศร้าใจ”</span>',
  'หาทางออกให้ตัวเอง <span class="font-semibold text-5xl">”ไม่ได้”</span>',
  '<span class="font-semibold text-5xl">:(</span>',
  'ให้เราอยู่<br class="md:hidden lg:hidden" /><span class="font-semibold text-5xl">เคียงข้างคุณ :)</span>',
];

export default function Slogan() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (index < messages.length - 1) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % messages.length);
          setFade(true);
        }, 1000); // Fade out duration
      }, 4000); // Overall cycle duration

      return () => clearInterval(interval);
    }
  }, [index]);

  const handleClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc6NWZ5u2-6T6lK41xDDPJOtpTsGtlQolbIi2_vLSV4o3tZBw/viewform?usp=header";
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-16">
        <img
          src="/images/logo-slogan.svg"
          alt="Well Slogan"
          className="w-52 md:w-80 h-auto mt-40 md:mt-52"
        />

        <p className="text-lg font-normal text-blue slogan w-full text-center">
          <span
            className={`transition-opacity duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
            dangerouslySetInnerHTML={{ __html: messages[index] }}
          />
        </p>

        <button
          className="bg-btn-primary text-white font-semibold px-8 py-4 rounded-full hover:cursor-pointer"
          onClick={handleClick}
        >Sign up on the waitlist</button>
      </div>

      <img
        className={`transition-opacity duration-1000 ease-in-out ${fade && index === messages.length - 1 ? "opacity-100" : "opacity-0"} object-contain`}
        src="/images/coming-soon.svg"
        alt="Coming Soon"
      />
    </>
  );
}
