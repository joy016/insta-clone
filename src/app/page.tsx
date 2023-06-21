'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Feed from './component/Feed';
import UsersAccount from './component/UsersAccount';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    // Use the router to navigate to a specific route
    router.push('/main');
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <form className="flex w-96 h-96 flex-col border border-gray-400 items-center py-12">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          width={140}
          height={120}
          alt="Picture of the author"
        />

        <div className="flex flex-col w-3/4 mt-8 justify-center">
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" className="mt-3" />

          <Link
            href="/main"
            className="bg-blue-600 rounded-md mt-4 h-[30px] flex items-center justify-center"
          >
            Dashboard
          </Link>
        </div>
        <a href="/" className="mt-4">
          Forgot password?
        </a>
      </form>
      <div className="flex border border-gray-400 w-96 h-[65px] items-center justify-center mt-[15px]">
        <h3>Don't have an account?</h3>
        <a>Sign up</a>
      </div>
    </div>
  );
}
