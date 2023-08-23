import Image from 'next/image';
import styles from './components/home/homePage.module.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className={styles.homeContainer}><HomePage/></section>
    </main>
  );
}
