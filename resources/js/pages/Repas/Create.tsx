import { Button } from "@/components/ui/button";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { User } from "@/types";
import { useState } from 'react';

export default function Create({ owner }: { owner: User }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        address: '',
        price: 0,
        date: new Date(),
        description: '',
        status: 'à venir',
        owner: owner ? owner.id : null,
        max_capacity: 0,
        table_quantity: 0,
        seats_per_table: 0,
    });

    const [selectedStatus, setSelectedStatus] = useState(data.status);

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();

        console.log(data);

        post(route('repas.store'), {
            onFinish: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Espace Membre : Création de Repas" />
            <h1 className="text-2xl font-bold title pb-10">Création de repas</h1>
            <form onSubmit={submit} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="name" className="block text-sm font-medium">Nom du repas</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.name && <div className="text-sm text-red-600">{errors.name}</div>}
                    </div>
                    <div>
                        <Label htmlFor="address" className="block text-sm font-medium">Adresse</Label>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.address && <div className="text-sm text-red-600">{errors.address}</div>}
                    </div>
                    <div>
                        <Label htmlFor="price" className="block text-sm font-medium">Prix</Label>
                        <Input
                            type="number"
                            name="price"
                            id="price"
                            value={data.price}
                            onChange={(e) => {
                                if (Number(e.target.value) < 0) {
                                    setData('price', 0);
                                } else {
                                    setData('price', parseInt(e.target.value, 10));
                                }
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.price && <div className="text-sm text-red-600">{errors.price}</div>}
                    </div>
                    <div>
                        <Label htmlFor="date" className="block text-sm font-medium">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="date"
                            value={Number(data.date) || ''}
                            onChange={(e) => {
                                const date = e.target.value;
                                if (new Date(date) < new Date()) {
                                    setData('date', '');
                                    errors.date = 'La date ne peut pas être inférieure à la date du jour.';
                                } else {
                                    setData('date', date);
                                    errors.date = '';
                                }
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.date && <div className="text-sm text-red-600">{errors.date}</div>}
                    </div>
                    <div>
                        <Label htmlFor="description" className="block text-sm font-medium">Description</Label>
                        <Input
                            type="text"
                            name="description"
                            id="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.description && <div className="text-sm text-red-600">{errors.description}</div>}
                    </div>
                    <div>
                        <Label htmlFor="status" className="block text-sm font-medium">Statut</Label>
                        <select
                            name="status"
                            value="à venir"
                            onChange={(e) => {
                                setData('status', e.target.value);
                                setSelectedStatus(e.target.value);
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
                        >
                            <option value="à venir" selected>À venir</option>
                        </select>
                        {errors.status && <div className="text-sm text-red-600">{errors.status}</div>}
                    </div>
                    <div>
                        <Label htmlFor="max_capacity" className="block text-sm font-medium">Capacité maximale</Label>
                        <Input
                            type="number"
                            name="max_capacity"
                            id="max_capacity"
                            value={data.max_capacity}
                            onChange={(e) => setData('max_capacity', parseInt(e.target.value, 10))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.max_capacity && <div className="text-sm text-red-600">{errors.max_capacity}</div>}
                    </div>
                    <div>
                        <Label htmlFor="table_quantity" className="block text-sm font-medium">Nombre de tables</Label>
                        <Input
                            type="number"
                            name="table_quantity"
                            id="table_quantity"
                            value={data.table_quantity}
                            onChange={(e) => setData('table_quantity', parseInt(e.target.value, 10))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.table_quantity && <div className="text-sm text-red-600">{errors.table_quantity}</div>}
                    </div>
                    <div>
                        <Label htmlFor="seats_per_table" className="block text-sm font-medium">Places par table</Label>
                        <Input
                            type="number"
                            name="seats_per_table"
                            id="seats_per_table"
                            value={data.seats_per_table}
                            onChange={(e) => setData('seats_per_table', parseInt(e.target.value, 10))}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.seats_per_table && <div className="text-sm text-red-600">{errors.seats_per_table}</div>}
                    </div>
                </div>
                <Button type="submit" className="btn btn-primary mt-6 w-full" disabled={processing}>Créer le repas</Button>
            </form>
        </AuthenticatedLayout>
    )
}