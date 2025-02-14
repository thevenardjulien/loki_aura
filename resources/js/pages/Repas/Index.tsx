import Repas from "@/components/repas";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Meal, PaginatedData } from "@/types";
import { Head, Link } from "@inertiajs/react";

interface Props {
    meals: PaginatedData<Meal>;
}

export default function Index({ meals }: Props) {
    console.log('meals: ', meals);
    return (
        <AuthenticatedLayout>
            <Head title="Espace Membre : Repas" />
            <h1 className="text-2xl font-bold title pb-10">Repas</h1>
            <Link href={route('repas.create')} className="flex items-center gap-2 text-center">
                <Button>Ajouter un repas</Button>
            </Link>
            <div className="py-10">
                <h2 className="text-xl font-semibold title mb-6">Repas à venir</h2>
                {meals.data && meals.data.map((meal) => (
                    <div key={meal.id} className="my-10"><Repas meal={meal} /></div>
                ))}
            </div>
            <Pagination links={meals.links} />
        </AuthenticatedLayout>
    );
}
