import { Meal } from "@/types";
import { Card } from "./ui/card";


export default function Repas({ meal }: { meal: Meal }) {
    return (
        <Card className="flex gap-10 p-10 min-w-fit">
            <div>
                <img src={meal.thumbnail} alt={`${meal.name}-thumbnail`} className="h-48 w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold title capitalize">{meal.name}</h3>
                <p className="whitespace-nowrap">{meal.address}</p>
                <p>{new Intl.DateTimeFormat(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false
                }).format(new Date(meal.date))}</p>

                <p>{meal.price} €</p>
                <p>{meal.description}</p>
            </div>
        </Card>
    )
}