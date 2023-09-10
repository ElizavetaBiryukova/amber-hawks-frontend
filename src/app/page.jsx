import Navigation from '@/components/UI/navigation/Navigation';
import HomePage from '@/components/pages/Home/HomePage';

export default async function Home() {
  return (
    <>
      <Navigation />
        <div className='container'>
          <main>
            <HomePage />
          </main>
        </div>
    </>
  );
}
