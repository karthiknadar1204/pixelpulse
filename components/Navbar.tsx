import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import MobileNav from './MobileNav';
import { TypewriterEffect } from './TypewriterEffect';
import { Architects_Daughter } from "next/font/google";

const ArchitectsDaughter = Architects_Daughter({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <TypewriterEffect
          words={[{ text: 'PixelPulse', className: 'text-white' }]}
          className={`text-[26px] font-extrabold max-sm:hidden ${ArchitectsDaughter.className}`}
          cursorClassName="bg-blue-500"
        />
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" /> 
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
