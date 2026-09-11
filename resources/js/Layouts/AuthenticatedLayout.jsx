import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { showSuccessAlert, showErrorAlert } from '@/libs/sweetalert';

export default function AuthenticatedLayout({ header, children }) {
    const { auth, flash } = usePage().props;
    const user = auth?.user || {};
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            showSuccessAlert('Berhasil!', flash.success);
        } else if (flash?.error) {
            showErrorAlert('Gagal!', flash.error);
        } else if (flash?.message) {
            showSuccessAlert('Informasi', flash.message);
        }
    }, [flash]);

    const isCurrentRoute = (routeName) => {
        try {
            return route().current(routeName);
        } catch {
            return false;
        }
    };

    return (

        <div className="min-h-screen bg-[#FAF8F5] text-slate-800 font-sans flex selection:bg-[#ECAE36] selection:text-[#1B544D]">

            {/* Mobile Sidebar Backdrop */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden transition-opacity"
                />
            )}

            {/* Sidebar Navigation */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0E2C27] border-r border-[#1B4F47] flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div>
                    {/* Brand Logo Header */}
                    <div className="h-20 mt-2 flex items-center justify-center">
                        <Link href={route('admin.dashboard')} className="flex items-center gap-3 group">
                            <img
                                src="/images/logo-white.png"
                                alt="Logo Arunika"
                                className="w-24 h-24 object-contain"
                            />
                        </Link>

                        {/* Mobile close button */}
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Menu Links */}
                    <nav className="p-4 space-y-1.5">
                        {/* Dashboard */}
                        <Link
                            href={route('admin.dashboard')}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isCurrentRoute('dashboard') || isCurrentRoute('admin.dashboard')
                                ? 'bg-[#1B544D] text-[#ECAE36] border-l-4 border-[#ECAE36]'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect width="7" height="9" x="3" y="3" rx="1" />
                                <rect width="7" height="5" x="14" y="3" rx="1" />
                                <rect width="7" height="9" x="14" y="12" rx="1" />
                                <rect width="7" height="5" x="3" y="16" rx="1" />
                            </svg>
                            <span>Dashboard</span>
                        </Link>

                        {/* Artikel Blog */}
                        <Link
                            href={route('admin.articles.index')}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isCurrentRoute('admin.articles.*')
                                ? 'bg-[#1B544D] text-[#ECAE36] border-l-4 border-[#ECAE36]'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                            <span>Artikel Blog</span>
                        </Link>

                        {/* Layanan */}
                        <Link
                            href={route('admin.services.index')}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isCurrentRoute('admin.services.*')
                                ? 'bg-[#1B544D] text-[#ECAE36] border-l-4 border-[#ECAE36]'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                            <span>Layanan</span>
                        </Link>

                        {/* Testimoni */}
                        <Link
                            href={route('admin.testimonials.index')}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isCurrentRoute('admin.testimonials.*')
                                ? 'bg-[#1B544D] text-[#ECAE36] border-l-4 border-[#ECAE36]'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            <span>Testimoni Klien</span>
                        </Link>

                        {/* Profil Akun */}
                        <Link
                            href={route('profile.edit')}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isCurrentRoute('profile.edit')
                                ? 'bg-[#1B544D] text-[#ECAE36] border-l-4 border-[#ECAE36]'
                                : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>Profil Akun</span>
                        </Link>

                        {/* Lihat Website */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                            target="_blank"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                            <span>Lihat Website</span>
                            <svg className="w-4 h-4 ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </nav>
                </div>

                {/* Sidebar Bottom: User & Logout */}
                <div className="p-4 border-t border-[#1B4F47] bg-[#0A221E]/60">
                    <div className="flex items-center gap-3 mb-3 px-2">
                        <div className="w-9 h-9 rounded-xl bg-[#1B544D] text-[#ECAE36] font-bold text-sm flex items-center justify-center shrink-0 border border-[#ECAE36]/30">
                            {user.name ? user.name[0].toUpperCase() : 'U'}
                        </div>
                        <div className="overflow-hidden">
                            <div className="text-sm font-bold text-white truncate">{user.name}</div>
                            <div className="text-xs text-slate-400 truncate">{user.email}</div>
                        </div>
                    </div>

                    <Link
                        href={route('admin.logout')}
                        method="post"
                        as="button"
                        className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-colors"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        <span>Keluar (Log Out)</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 lg:pl-64">

                {/* Top Bar */}
                <header className="sticky top-0 z-30 h-16 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE6DF] flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        {/* Mobile Sidebar Toggle Button */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 rounded-xl text-[#1B544D] hover:bg-[#EFECE6] transition-colors"
                            aria-label="Buka Sidebar"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <div className="text-sm font-bold text-[#1B544D]">
                            Portal Admin Arunika
                        </div>
                    </div>

                    {/* Right User Dropdown */}
                    <div className="flex items-center gap-3">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 rounded-xl border border-[#E3DFD7] bg-white px-3.5 py-2 text-xs font-semibold text-[#1B544D] hover:bg-[#FAF8F5] transition-colors"
                                >
                                    <span className="w-6 h-6 rounded-lg bg-[#1B544D] text-[#ECAE36] flex items-center justify-center font-bold text-xs">
                                        {user.name ? user.name[0].toUpperCase() : 'U'}
                                    </span>
                                    <span className="hidden sm:inline text-xs">{user.name}</span>
                                    <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profil Akun
                                </Dropdown.Link>
                                <Dropdown.Link href={route('admin.logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                {/* Page Title / Header if passed */}
                {header && (
                    <div className="bg-white border-b border-[#EAE6DF] px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                )}

                {/* Page Body */}
                <main className="flex-1 bg-[#FAF8F5]">
                    {children}
                </main>

            </div>

        </div>
    );
}