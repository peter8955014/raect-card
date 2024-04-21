import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { squareData } from '@/store/data';

interface Square {
  id: number;
  src: string;
}

const shuffle = (array: Square[]): Square[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="img-box"
      style={{ backgroundImage: `url(${sq.src})` }}
    ></motion.div>
  ));
};

const Autumn: React.FC = () => {
  const timeoutRef = useRef<number | null>(null)
  const [squares, setSquares] = useState<JSX.Element[]>([])

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000) as unknown as number
  };

  return (
    <div className='autumn-box'>
      <div className='shuffleGrid'>
        {squares.map((sq) => sq)}
      </div>
    </div>
  )
}

export default Autumn