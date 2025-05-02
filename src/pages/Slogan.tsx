import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  'วันที่คุณรู้สึก <span class="font-semibold text-5xl">”ท้อแท้”</span>',
  '<span class="font-semibold text-5xl">“เศร้าใจ”</span>',
  'หาทางออกให้ตัวเอง <span class="font-semibold text-5xl">”ไม่ได้”</span>',
  '<span class="font-semibold text-5xl">:(</span>',
  'ให้เราอยู่<br class="md:hidden lg:hidden" /><span class="font-semibold text-5xl">เคียงข้างคุณ :)</span>',
];

export default function Slogan() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (index >= messages.length - 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= messages.length - 1 && intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        return next;
      });
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index]);

  const handleClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLSc6NWZ5u2-6T6lK41xDDPJOtpTsGtlQolbIi2_vLSV4o3tZBw/viewform?usp=header";
  };

  return (
    <div className="flex flex-col h-dvh items-center justify-between">
      {/* TOP: Logo + Message */}
      <div className="flex flex-col items-center gap-14 h-full justify-center">
        <img
          src="/images/logo-slogan.svg"
          alt="Well Slogan"
          className="w-52 md:w-80 h-auto"
        />

        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            className="text-blue font-normal text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            dangerouslySetInnerHTML={{ __html: messages[index] }}
          />
        </AnimatePresence>


        {/* MIDDLE: Button (always show) */}
        <button
          className="bg-btn-primary text-white font-semibold px-8 py-4 rounded-full hover:cursor-pointer"
          onClick={handleClick}
        >
          Sign up on the waitlist
        </button>
      </div>

      <div className="min-h-[30%] w-full md:w-[70%]">
        <AnimatePresence>
          {index === messages.length - 1 && (
            <motion.img
              key="coming-soon"
              className="overflow-hidden w-full h-full object-cover object-top"
              src="/images/coming-soon.svg"
              alt="Coming Soon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
