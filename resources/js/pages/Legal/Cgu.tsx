import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/ui/header';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Cgu({ auth }: PageProps) {
    return (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <Head title="Conditions générales d'utilisation" />

                <div className="flex flex-col h-svh">
                    <Header auth={auth} user={auth.user} />

                    <main className="bg-center bg-blend-overlay bg-fixed; mx-auto w-full grow flex-1 flex flex-col gap-10 my-[100px] max-w-[80%]">
                        <div className='flex flex-col gap-4'>
                            <p className='text-slate-700'>EN VIGUEUR AU 24 JANV. 2023</p>
                            <h1 className='title text-3xl font-bold'>Conditions générales d'utilisation</h1>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 1 : Les mentions légales</p>
                            <p>L'édition et la direction de la publication du site https://aura-association.com est assurée par l'association club AURA et domicilié au AURA ASSOCIATION BEL AIR CENTER (WTC), Tour Oxygène, 69393 LYON Cedex 03 et qui a pour président Denis RODARIE.
                                <br />
                                Numéro de téléphone est <mark>06 18 66 47 86</mark>
                                <br />
                                Adresse e-mail <mark>contact@aura-association.com</mark></p>
                            <p>L'hébergeur du site https://aura-association.com est la société OVH, dont le siège social est situé au 2 rue Kellermann - 59100 Roubaix - France.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 2 : Accès au site</p>
                            <p>Toute personne peut accéder au Site Internet, dès qu'il dispose d'une connexion Internet et bénéficier ainsi de certaines informations gratuites.
                                L'utilisateur déclare avoir connaissance des risques liées à Internet et reconnait que les échanges de données circulant sur Internet bénéficient d'une fiabilité relative et ne sont donc pas protégés, notamment contre les risques de détournement et de piratages et que les performances techniques du réseau Internet, ainsi que le temps de réponse pour consulter, interroger ou transférer des informations sont variables et aléatoires.
                                L'utilisateur assumera seul tous les frais pouvant être réclamés par l'opérateur mobile liés à l'accès aux services de connexion nécessaires à l'utilisation du Site Internet.
                                Le site https://aura-association.com a pour objet de fournir une information concernant l'ensemble des activités de la société. Aura Association s'efforce de fournir sur le site https://aura-association.com des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                            <p>Toutes les informations indiquées sur le site https://aura-association.com sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site https://aura-association.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
                            <div><p>Le site https://aura-association.com permet à l'Utilisateur un accès gratuit aux services suivants :</p>
                                <ul className='list-disc list-inside'>
                                    <li>S'informer sur les réunions existantes</li>
                                    <li>S'inscrire au repas et activités</li>
                                    <li>Payer sa cotisation</li>
                                    <li>Accéder au catalogue des membres</li>
                                    <li>Suivre les actualités sur le sujet</li>
                                    <li>Prendre contact avec Aura Association</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 3 : Collecte des données</p>
                            <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
                                A l'occasion de l'utilisation du site https://aura-association.com, peuvent êtres recueillis : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site https://aura-association.com, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.</p>
                            <p>Aura Association a adopté une politique stricte en matière de collecte et traitement des données personnelles.</p>
                            <p>Le Site permet aux utilisateurs d'accéder aux offres de Aura Association et de prendre contact avec pour obtenir des informations complémentaires ou solliciter ses services. Les données personnelles collectées ne sont utilisées que dans le but de permettre à Aura Association de répondre à la demande de l'utilisateur ou pour le contacter directement. Ces données ne seront transmises à aucun tiers.</p>
                            <p>L'utilisateur dispose d'un droit d'accès, d'interrogation, de modification, de rectification et de suppression des données à caractère personnel le concernant. Pour exercer ses droits, l'utilisateur doit adresser un courrier à contact@aura-association.com accompagné d'une copie d'un titre d'identité signé à l'adresse suivante : AURA ASSOCIATION BEL AIR CENTER (WTC), Tour Oxygène, 69393 LYON Cedex 03.</p>
                            <p>En tout état de cause Aura Association ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site https://aura-association.com. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site https://aura-association.com l'obligation ou non de fournir ces informations.
                                Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée. Aucune information personnelle de l'utilisateur du site https://aura-association.com n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de https://aura-association.com et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site https://aura-association.com.
                                Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
                                L'utilisateur du site est tenu de respecter les dispositions de la loi n°78-17 relative à l'informatique, aux fichiers et aux libertés du 6 janvier 1978 modifiée, dont la violation est passible de sanctions pénales. Notamment, il doit s'abstenir de toute collecte, de toute utilisation détournée et, d'une manière générale, de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 4 : Propriété intellectuelle</p>
                            <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son...) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
                            <p>Ce contenu ne peut donc être en aucune manière faire l'objet, même partiellement de reproduction, représentation, prêt, échange ou cession, d'extraction totale ou partielle de données et/ou d'un transfert sur un autre support, de modification, adaptation, arrangement ou transformation, autrement que dans les conditions ci-après.</p>
                            <p>L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.
                                Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site Internet constituerait une contrefaçon sanctionnée par l'article L 335-2 et suivants du Code de la propriété intellectuelle.
                                Il est rappelé conformément à l'article L122-5 du Code de propriété intellectuelle que l'Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l'auteur et sa source.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 5 : Responsabilité</p>
                            <p>Les sources des informations diffusées sur le site https://aura-association.com sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
                                Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site https://aura-association.com ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l'utilisation et de l'interprétation de l'information contenue dans ce site.
                                Le site https://aura-association.com ne peut être tenu pour responsable d'éventuels virus qui pourraient infecter l'ordinateur ou tout matériel informatique de l'Internaute, suite à une utilisation, à l'accès, ou au téléchargement provenant de ce site.
                                La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 6 : Liens hypertextes</p>
                            <p>Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site https://aura-association.com. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 7 : Cookies</p>
                            <p>Aura Association ne collecte pas d'informations personnelles relatives à lutilisateur.</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='title text-lg font-semibold'>ARTICLE 8 : Dispositions générales, droit applicable et juridiction compétente</p>
                            <p>Les CGU sont consultables en ligne et peuvent être modifiées à tout moment à la discrétion de l'Editeur sans autre formalité que leur mise en ligne, seule la dernière version sera applicable.
                                Le fait de ne pas revendiquer l'application de l'une des dispositions des CGU ou d'acquiescer à son inexécution, de manière permanente ou temporaire ne peut être interprété comme valant renonciation à ce droit.
                                Si l'une quelconque des clauses des CGU était déclarée nulle, elle serait réputée non écrite mais n'entrainerait pas la nullité de l'ensemble des CGU.
                                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, le Tribunal de Commerce de Lyon sera seul compétent, même en cas de référé, d'appel en garantie ou de pluralité de demandeurs.
                                Pour toute question relative à l'application des présentes CGU, vous pouvez joindre l'éditeur aux coordonnées inscrites à l'ARTICLE 1.</p>
                        </div>
                    </main >
                    <Footer />
                </div >
            </ThemeProvider >
        </>
    );
}
