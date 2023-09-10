import TeamPage from "@/components/pages/Team/TeamPage";
import Navigation from '@/components/UI/navigation/Navigation';

export default async function Team() {
    return (
        <>
            <Navigation />
            <div className='container'>
                <main>
                    <TeamPage />
                </main>
            </div>
        </>
    );
}