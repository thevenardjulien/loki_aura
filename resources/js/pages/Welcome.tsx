import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/ui/header';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Head title="AURA" />

                <div className="flex flex-col h-svh">
                    <Header auth={auth} user={auth.user} />

                    <main className="bg-center bg-blend-overlay bg-fixed; mx-auto w-full grow flex-1">
                        <section className="flex flex-col h-screen items-center justify-center mt-[-150px] gap-4">
                            <p className='text-[clamp(0.1rem,2.15vw,1.46rem)] uppercase title font-regular text-slate-500 dark:text-white w-2/3 text-center'>L’AURA s’explique difficilement mais se constate</p>
                            <h1 className="text-[clamp(1.5rem,5vw,4rem)] leading-none title font-bold text-slate-700 dark:text-white w-full lg:w-2/3 text-center">
                                Pour la promotion de talents Auvergne Rhônalpins
                            </h1>
                        </section>
                        <section className='flex justify-center items-center bg-[url(/pattern_dark--homepage.jpg)] min-h-[400px] bg-cover bg-no-repeat bg-center bg-blend-overlay bg-fixed; mx-auto grow'>
                            <p className='text-[clamp(1rem,2.87vw,2.3rem)] leading-none title font-regular text-white lg:w-3/5 tracking-wide px-10 md:px-0'>AURA est dirigée par un Conseil d'Administration dont les membres représentent les différentes composantes professionnelles et géographiques de la Région Auvergne-Rhône-Alpes.</p>
                        </section>
                        <section className='my-[100px] flex flex-col 2xl:flex-row gap-6 2xl:gap-20 w-3/4 mx-auto'>
                            <div className='flex-1'>
                                <img className='rounded-xl w-full max-h-[600px]' src="/homepage_1.jpg" alt="1" />
                            </div>
                            <div className='flex-1 flex flex-col justify-center gap-4'>
                                <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] title font-bold leading-[1.25]">Organiser et favoriser la rencontre des diverses catégories de décideurs</h2>
                                <p className="text-[clamp(0.875rem,1.75vw,1.25rem)]">Les fondateurs de l'association AURA se sont fixés comme objectifs d'organiser et de favoriser, en toute indépendance, la rencontre de diverses catégories de décideurs, particulièrement soucieux du développement concerté de la Région Auvergne Rhône Alpes et de la prise en compte de son environnement français et étranger, notamment avec les régions amies : Catalogne, Lombardie, Bade- Wurtemberg et bien sûr Genève.
                                    Pour eux cette rencontre passe par le rapprochement des différentes personnalités politiques, culturelles ou religieuses, des hauts fonctionnaires, des dirigeants d'entreprises, des représentants des médias, des professions libérales et du mouvement associatif, portant un intérêt marqué pour le développement de la Région.</p>
                            </div>
                        </section>
                        <section className='my-[100px] flex flex-col 2xl:flex-row-reverse gap-6 2xl:gap-20 w-3/4 mx-auto'>
                            <div className='flex-1'>
                                <img className='rounded-xl w-full max-h-[600px]' src="/homepage_2.jpg" alt="2" />
                            </div>
                            <div className='flex-1 flex flex-col justify-center gap-4'>
                                <h2 className="text-[clamp(1.25rem,2.5vw,2rem)] title font-bold leading-[1.25]">Une association indépendante
                                </h2>
                                <p className="text-[clamp(0.875rem,1.75vw,1.25rem)]">L'association est indépendante des collectivités locales, des entreprises, des partis politiques, ou des structures ayant des objectifs comparables. AURA est totalement financée par les droits d'entrée ou les cotisations de ses membres, les contributions de bienfaiteurs et le paiement par chaque participant de sa quote-part aux différentes manifestations.
                                    Celles-ci se tiennent généralement sous forme de diners mensuels organisés dans l'agglomération lyonnaise.
                                    Sont organisés également des diners dans d'autres villes de la Région, des sorties culturelles ainsi que des voyages découvertes en France ou à l'étranger en vue de favoriser des échanges.
                                    Le premier dîner a eu lieu le 17 mai 1990.</p>
                            </div>
                        </section>
                    </main >
                    <Footer />
                </div >
            </ThemeProvider >
        </>
    );
}
