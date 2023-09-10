import HomePage from '@/components/pages/Home/HomePage';

export default async function Home() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <main>
          <HomePage />
          <h2>Футбольная команда</h2>
        </main>
      </div>
    </div>
  );
}
