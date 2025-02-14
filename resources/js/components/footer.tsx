export default function Footer() {
    return (
        <footer className='bg-[#30364c] p-10 flex flex-col items-center gap-6 text-white'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <a
                    href="#"
                    className="flex items-center gap-2 font-medium"
                >
                    <img src="/logo.webp" alt="AURA" className="h-20" />
                </a>
                <p>contact@aura-association.com</p>
            </div>
            <hr className="block w-2/3 border border-solid border-[rgb(58,64,88)]" />
            <ul className='flex uppercase gap-6'>
                <a href="/">
                    <li>Home</li>
                </a>
                <a href="/dashboard">
                    <li>espace membre</li>
                </a>
                <a href={`${import.meta.env.VITE_REACT_APP_URL}/legal/conditions-generales-d-utilisation`}>
                    <li>cgu</li>
                </a>
                <a href={`${import.meta.env.VITE_REACT_APP_URL}/legal/conditions-generales-de-vente`}>
                    <li>cgv</li>
                </a>
            </ul>
            <p>Copyright © 2025 Association AURA. Par Iconic Communication. Tous droits réservés.</p>
        </footer>
    )

}