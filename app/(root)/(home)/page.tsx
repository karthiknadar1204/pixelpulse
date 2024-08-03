import MeetingTypeList from '@/components/MeetingTypeList';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from '@/components/modal';
import { Poppins } from "next/font/google";
import Image from 'next/image';

const poppins = Poppins({
  weight: ["400", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <Modal>
        <ModalTrigger>
          <div className="relative h-[303px] w-full rounded-[20px] overflow-hidden group">
            <Image 
              src='/bg_img.jpeg' 
              layout="fill" 
              objectFit="cover" 
              alt="Background image"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex items-center justify-start group-hover:bg-black/30 transition-all duration-300">
              <div className="hidden group-hover:flex flex-col justify-center items-start text-left px-5 py-8 text-white">
                <h1 className={`text-4xl font-bold lg:text-7xl ${poppins.className}`}>
                  {time}
                </h1>
                <p className={`text-lg font-medium text-sky-1 lg:text-2xl ${poppins.className}`}>
                  {date}
                </p>
              </div>
            </div>
          </div>
        </ModalTrigger>
      </Modal>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
