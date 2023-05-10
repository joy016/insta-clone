import Image from 'next/image';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { TbCirclePlus } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';

const Header = () => {
  return (
    <>
      <div className="bg-white sticky border shadow-md ">
        <div className=" h-24 flex justify-between items-center max-w-6xl mx-4 xl:mx-auto">
          {/* Left */}
          <div className="relative hidden lg:inline-grid cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
              width={96}
              height={96}
              alt="Picture of the author"
            />
          </div>
          <div className="relative lg:hidden cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>

          {/* Middle */}
          <div className="bg-red-100 relative">
            <div className="h-5 absolute top-3 left-2">
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="search"
              className="pl-10 rounded-md focus: border-solid border-2 border-indigo-600"
            />
          </div>

          {/* Right */}
          <div className="cursor-pointer flex items-center space-x-4 ">
            <div>
              <AiFillHome className="hidden md:block h-6 w-6 hover:scale-125 transition-tranform duration-200 ease-out" />
            </div>

            <TbCirclePlus className="h-6 w-6 hover:scale-125 transition-tranform duration-200 ease-out" />
            <CgProfile className="h-10 w-6 hover:scale-125 transition-tranform duration-200 ease-out" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
