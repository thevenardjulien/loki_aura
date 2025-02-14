import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/ui/header';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Cgv({ auth }: PageProps) {
    return (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Head title="Conditions générales de ventes" />

                <div className="flex flex-col h-svh">
                    <Header auth={auth} user={auth.user} />

                    <main className="bg-center bg-blend-overlay bg-fixed; mx-auto w-full grow flex-1 flex flex-col gap-10 my-[100px] max-w-[80%]">
                        <div className='flex flex-col gap-4'>
                            <p className='text-slate-700'>EN VIGUEUR AU 24 JANV. 2023</p>
                            <h1 className='title text-3xl font-bold'>Conditions générales de vente</h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n° 1 : Objet</p>
                            <p>Les conditions générales de vente décrites ci-après détaillent les droits et obligations de l'association Aura.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n° 2 : Données personnelles</p>
                            <p>Les données collectées ne sont utilisées que pour pouvoir enregistrer l'adhésion. Elles peuvent être transmises aux établissements bancaires pour exécution du paiement.
                                Conformément à la Loi informatique et Libertés du 6 janvier 1978, un droit d'accès et de rectification est possible en nous contactant via notre adresse email suivante : contact@aura-association.com</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n° 3 : Prix</p>
                            <p>Le montant de l'adhésion, de la cotisation et des repas est celui en vigueur au jour de la prise de commande. Ils sont libellés en euros sont hors taxes, Aura Association n'étant pas assujettie à la TVA.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n° 4 : Modalités de paiement</p>
                            <p>Le prix est payable comptant en totalité au jour des débuts de paiements :</p>
                            <ul className='list-disc list-inside ml-4'>
                                <li>Par carte bancaire en ligne.</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n° 5 : Force majeure</p>
                            <p>La responsabilité de l'association Aura Association ne pourra pas être mise en oeuvre si la non-exécution ou le retard dans l'exécution de l'une de ses obligations décrites dans les présentes conditions générales de vente découle d'un cas de force majeure. À ce titre, la force majeure s'entend de tout événement extérieur, imprévisible et irrésistible au sens de l'article 1218 du Code civil.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n° 6 : Attribution de juridiction</p>
                            <p>Tous les litiges auxquels le présent contrat et les accords qui en découlent pourraient donner lieu, concernanttant leur validité, leur interprétation, leur exécution, leur résolution, leurs conséquences et leurs suites seront soumis au tribunal de Lyon.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n° 7 : Langue du contrat - Droit applicable</p>
                            <p>De convention expresse entre les parties, les présentes Conditions Générales de Vente et les opérations qui en découlent sont régies par le droit français. Elles sont rédigées en langue française. Dans le cas où elles seraient traduites en une ou plusieurs langues, seul le texte français ferait foi en cas de litige.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>Clause n°8 : Droit de rétractation</p>
                            <p>En vertu de l'article L121-20 du Code de la consommation, l'acheteur dispose d'un délai de 3 jours ouvrables à compter de son inscription à un repas pour exercer son droit de rétractation et ainsi procéder à son remboursement sans pénalité, à l'exception des frais Stripe.

                            </p>
                        </div>
                    </main >
                    <Footer />
                </div >
            </ThemeProvider >
        </>
    );
}
