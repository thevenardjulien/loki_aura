'use client';

import {
    AudioWaveform,
    BookOpen,
    Command,
    GalleryVerticalEnd,
    LayoutDashboard,
    LifeBuoy,
    Send,
} from 'lucide-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavTeamMembers } from '@/components/nav-team-members';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';

const data = {
    teams: [
        {
            name: 'Acme Inc',
            logo: GalleryVerticalEnd,
            plan: 'Enterprise',
        },
        {
            name: 'Acme Corp.',
            logo: AudioWaveform,
            plan: 'Startup',
        },
        {
            name: 'Evil Corp.',
            logo: Command,
            plan: 'Free',
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
            url: '/projects',
            icon: GalleryVerticalEnd,
            items: [
                {
                    title: 'Board',
                    url: '/projects/board',
                },
                {
                    title: 'Tasks',
                    url: '/projects/tasks',
                },
                {
                    title: 'Reports',
                    url: '/projects/reports',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '/documentation',
            icon: BookOpen,
            items: [
                {
                    title: 'Getting Started',
                    url: '/documentation/getting-started',
                },
                {
                    title: 'Backend Setup',
                    url: '/documentation/backend-setup',
                },
                {
                    title: 'Frontend Setup',
                    url: '/documentation/frontend-setup',
                },
                {
                    title: 'Changelog',
                    url: '/documentation/changelog',
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: 'Support',
            url: '/support',
            icon: LifeBuoy,
        },
        {
            title: 'Feedback',
            url: '/feedback',
            icon: Send,
        },
    ],
    team_members: [
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
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavTeamMembers teamMembers={data.team_members} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
