'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-6 py-8 flex flex-col justify-between w-full xl:max-w-[330px] min-h-[320px] rounded-[14px] cursor-pointer mt-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt="meeting" width={50} height={50} />
      </div>
      
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p className="text-xl font-normal text-black">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;






// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { cn } from '@/lib/utils';
// import styles from './HomeCard.module.css';

// interface HomeCardProps {
//   className?: string;
//   img: string;
//   title: string;
//   description: string;
//   handleClick?: () => void;
// }

// const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className={cn(
//         styles.card,
//         'bg-orange-1 overflow-hidden rounded-[14px]',
//         className
//       )}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onClick={handleClick}
//     >
//       <div className="flex-center glassmorphism size-12 rounded-[10px] mb-4 ml-1 mt-1">
//         <Image src={img} alt="meeting" width={50} height={50} />
//       </div>
      
//       <div className={styles.content}>
//         <h1 className="text-2xl font-bold text-black">{title}</h1>
//         <p className="text-xl font-normal text-black">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeCard;