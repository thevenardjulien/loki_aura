'use client';

import { Atom, LayoutDashboard, LifeBuoy, Send } from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
// import { NavProjectMembers } from '@/components/nav-project-members';
// import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
// import { ProjectSwitcher } from '@/components/project-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    // SidebarHeader,
} from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';

const data = {
    projects: [
        {
            logo: Atom,
            title: 'Starter',
            subtitle: 'React - Inertia - Laravel',
        },
    ],
    navMain: [
        {
            title: 'HomePage',
            url: '/',
            icon: LayoutDashboard,
        },
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboard,
        },
        {
            title: 'Repas',
            url: '/repas',
            icon: LayoutDashboard,
        },
        {
            title: 'Espace infos',
            url: '/feed',
            icon: LayoutDashboard,
        },
        {
            title: 'Annuaire',
            url: '/members',
            icon: LayoutDashboard,
        },
        {
            title: 'Gestion admin',
            url: '/admin',
            icon: LayoutDashboard,
        },
        {
            title: 'Mon compte',
            url: '/admin',
            icon: LayoutDashboard,
        },
    ],
    navSecondary: [
        {
            title: 'Support',
            url: '/dashboard',
            icon: LifeBuoy,
        },
        {
            title: 'Feedback',
            url: '/dashboard',
            icon: Send,
        },
    ],
    projectMembers: [
        {
            name: 'Tylor Otwell',
            url: '#',
            isConnected: true,
        },
        {
            name: 'Jonathan Reinink',
            url: '#',
            isConnected: false,
        },
        {
            name: 'Adam Wathan',
            url: '#',
            isConnected: false,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = usePage().props.auth.user;

    return (
        <Sidebar variant="inset" collapsible="icon" {...props}>
            {/* <SidebarHeader>
                <ProjectSwitcher projects={data.projects} />
            </SidebarHeader> */}
            <SidebarContent>
                <img src="/logo.webp" alt="AURA" className="h-auto w-2/3 max-w-full mx-auto" />
                <NavMain items={data.navMain} />
                {/* <NavProjectMembers members={data.projectMembers} /> */}
                {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
