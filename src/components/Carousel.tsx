import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { carouselData } from "@/store/data";


const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
}

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState<number>(0)
  const dragX = useMotionValue(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === carouselData.length - 1) {
            return 0
          }
          return pv + 1
        });
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
  }, [dragX])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < carouselData.length - 1) {
      setImgIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }

  return (
    <div className="nav-box">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="nav-box_content"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  )
}
export default Carousel

const Images: React.FC<{ imgIndex: number }> = ({ imgIndex }) => {
  return (
    <>
      {carouselData.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="imge-box"
          />
        )
      })}
    </>
  )
}

const Dots: React.FC<{ imgIndex: number, setImgIndex: React.Dispatch<React.SetStateAction<number>> }> = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="dot-box">
      {carouselData.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`btn ${idx === imgIndex ? "active" : ""}`}
          />
        )
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="grad_left" />
      <div className="grad_right" />
    </>
  )
}