'use client';

import {
    BookOpen,
    Command,
    GalleryVerticalEnd,
    LayoutDashboard,
    LifeBuoy,
    Send,
} from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavProjectMembers } from '@/components/nav-project-members';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import { ProjectSwitcher } from '@/components/project-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';

const data = {
    projects: [
        {
            logo: Command,
            title: 'Starter',
            subtitle: 'React - Inertia - Laravel',
        },
    ],
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: 'Projects',
            url: '/dashboard',
            icon: GalleryVerticalEnd,
            items: [
                {
                    title: 'Board',
                    url: '/dashboard',
                },
                {
                    title: 'Tasks',
                    url: '/dashboard',
                },
                {
                    title: 'Reports',
                    url: '/dashboard',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '/dashboard',
            icon: BookOpen,
            items: [
                {
                    title: 'Getting Started',
                    url: '/dashboard',
                },
                {
                    title: 'Backend Setup',
                    url: '/dashboard',
                },
                {
                    title: 'Frontend Setup',
                    url: '/dashboard',
                },
                {
                    title: 'Changelog',
                    url: '/dashboard',
                },
            ],
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
        <Sidebar variant="inset" collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <ProjectSwitcher projects={data.projects} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavProjectMembers members={data.projectMembers} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
