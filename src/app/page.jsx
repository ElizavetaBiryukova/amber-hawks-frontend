import Footer from '@/components/UI/footer/Footer';
import styles from './page.module.css'
import Navigation from '@/components/UI/navigation/Navigation';
import HomePage from '@/components/pages/Home/HomePage';

export default async function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Navigation />
        <div className={styles.container}>
          <main>
            <HomePage />
          </main>
        </div>
      </div>
    </>
  );
}