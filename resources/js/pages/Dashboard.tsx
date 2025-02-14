import AuthenticatedLayout from '@/layouts/AuthenticatedLayout';
import { Meal, PaginatedData, User } from '@/types';
import { Head } from '@inertiajs/react';
import Repas from '@/components/repas';
import { Accordion, AccordionItem, AccordionHeader, AccordionContent, AccordionTrigger } from '@radix-ui/react-accordion';
import { Pagination } from '@/components/ui/pagination';

export default function Dashboard({ users, meals, mealsPaginated }: { users: User[], meals: Meal[], mealsPaginated: PaginatedData<Meal> }) {
    console.log({ users, meals, mealsPaginated });
    return (
        <AuthenticatedLayout>
            <Head title="Espace Membre : Accueil" />
            <h1 className="text-2xl font-bold title pb-10">Accueil</h1>
            <div className='flex flex-col gap-4'>
                <h2 className="text-xl font-semibold mb-4">Liste des Repas</h2>
                <Accordion type="multiple">
                    {meals && meals.map((meal: Meal) => (
                        <AccordionItem key={meal.id} value={meal.id.toString()}>
                            <AccordionHeader>
                                <AccordionTrigger>
                                    {meal.name}
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <Repas meal={meal} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Pagination links={mealsPaginated.links} />
                <h2 className="text-xl font-semibold mb-4">Liste des Utilisateurs</h2>
                {users && users.map((user) => (
                    <div key={user.id} className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-sidebar-accent">
                                <img
                                    className="h-full w-full rounded-full object-cover"
                                    src={user.profile_photo_url}
                                    alt={user.firstname}
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="text-sm font-semibold">
                                    {user.firstname} {user.lastname}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {user.position?.name} - {user.company?.name}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-muted-foreground">
                                {user.email}
                                <br />
                                {user.phone_pro}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
