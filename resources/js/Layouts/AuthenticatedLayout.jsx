import { Link, usePage, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { showSuccessAlert, showErrorAlert } from '@/libs/sweetalert';
import Swal from 'sweetalert2';

export default function AuthenticatedLayout({ header, children }) {
    const { auth, flash } = usePage().props;
    const user = auth?.user || {};
    const [sidebarOpen, setSidebarOpen] = useState(false); 
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false); 

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

    const handleLogout = (e) => {
        if (e) e.preventDefault();

        Swal.fire({
            title: 'Konfirmasi Keluar',
            text: 'Apakah Anda yakin ingin mengakhiri sesi admin ini?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#457D78',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Ya, Keluar',
            cancelButtonText: 'Batal',
            customClass: {
                popup: 'rounded-2xl',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                router.post(route('admin.logout'));
            }
        });
    };

    // Daftar semua navigasi
    const allNavItems = [
        {
            name: 'Dashboard',
            is_superadmin: false,
            href: route('admin.dashboard'),
            active: isCurrentRoute('dashboard') || isCurrentRoute('admin.dashboard'),
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="7" height="9" x="3" y="3" rx="1.5" />
                    <rect width="7" height="5" x="14" y="3" rx="1.5" />
                    <rect width="7" height="9" x="14" y="12" rx="1.5" />
                    <rect width="7" height="5" x="3" y="16" rx="1.5" />
                </svg>
            )
        },
        {
            name: 'Artikel Blog',
            is_superadmin: false,
            href: route('admin.articles.index'),
            active: isCurrentRoute('admin.articles.*'),
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
            )
        },
        {
            name: 'Layanan',
            is_superadmin: false,
            href: route('admin.services.index'),
            active: isCurrentRoute('admin.services.*'),
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                </svg>
            )
        },
        {
            name: 'Testimoni Klien',
            is_superadmin: false,
            href: route('admin.testimonials.index'),
            active: isCurrentRoute('admin.testimonials.*'),
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            )
        },
        {
            name: 'User',
            is_superadmin: true, // Menu ini khusus super admin
            href: route('admin.users.index'),
            active: isCurrentRoute('admin.users.*'),
            icon: (
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            )
        }
    ];

    // Cek apakah user yang login adalah super-admin
    const isSuperAdmin = user.role === 'super-admin' || user.role === 'superadmin';

    // Filter menu: Jika is_superadmin true, pastikan user adalah super admin. Jika false, tampilkan untuk semua.
    const navItems = allNavItems.filter(item => {
        if (item.is_superadmin) {
            return isSuperAdmin;
        }
        return true;
    });

    return (
        <div className="min-h-screen bg-background text-text font-sans flex selection:bg-secondary selection:text-primary">

            {/* Mobile Backdrop */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-primary-dark/40 backdrop-blur-xs lg:hidden transition-opacity"
                />
            )}

            {/* Sidebar Navigation */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 bg-primary-dark text-slate-300 flex flex-col justify-between transition-all duration-300 ease-in-out border-r border-primary/20 ${
                    sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'
                } w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
            >
                <div className="flex flex-col h-full overflow-hidden">
                    {/* Brand Header */}
                    <div className="h-20 flex items-center justify-between px-5 border-b border-white/5 shrink-0">
                        <Link href={route('admin.dashboard')} className="flex items-center gap-3 overflow-hidden group">
                            <img
                                src="/images/logo-white.png"
                                alt="Logo Arunika"
                                className="w-12 h-12 object-contain"
                            />
                            <div className={`leading-tight transition-all duration-200 ${sidebarCollapsed ? 'lg:opacity-0 lg:w-0 lg:hidden' : 'opacity-100'}`}>
                                <span className="block text-md font-bold text-white tracking-wide truncate">ARUNIKA</span>
                                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-medium">PORTAL</span>
                            </div>
                        </Link>

                        {/* Mobile close button */}
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Nav Links (Tampil berdasarkan hasil filter navItems) */}
                    <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto overflow-x-hidden">
                        {!sidebarCollapsed && (
                            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                Menu Utama
                            </div>
                        )}

                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setSidebarOpen(false)}
                                title={sidebarCollapsed ? item.name : ''}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all group relative ${
                                    item.active
                                        ? 'bg-secondary/15 text-secondary font-semibold shadow-xs'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <span className={`${item.active ? 'text-secondary' : 'text-slate-400 group-hover:text-white'} transition-colors shrink-0`}>
                                    {item.icon}
                                </span>
                                <span className={`truncate transition-all duration-200 ${sidebarCollapsed ? 'lg:hidden' : 'block'}`}>
                                    {item.name}
                                </span>
                            </Link>
                        ))}

                        <div className="pt-4 mt-4 border-t border-white/5">
                            {!sidebarCollapsed && (
                                <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                    Eksternal
                                </div>
                            )}
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                                title={sidebarCollapsed ? 'Lihat Website' : ''}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
                            >
                                <svg className="w-5 h-5 shrink-0 text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                                <span className={`flex items-center justify-between w-full truncate transition-all duration-200 ${sidebarCollapsed ? 'lg:hidden' : 'flex'}`}>
                                    <span>Lihat Website</span>
                                    <svg className="w-3.5 h-3.5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </nav>

                    {/* Sidebar Footer / User & Logout */}
                    <div className="p-3 border-t border-white/5 bg-primary-dark/80 shrink-0">
                       {!sidebarCollapsed ? (
                            <div className={`flex items-center justify-between gap-2 p-2 rounded-xl border transition-colors ${
                                isCurrentRoute('profile.edit') 
                                    ? 'bg-white/10 border-white/20' 
                                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                            }`}>
                                <Link
                                    href={route('profile.edit')}
                                    className="flex items-center gap-2.5 overflow-hidden flex-1 text-left"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-secondary text-primary font-bold text-xs flex items-center justify-center shrink-0">
                                        {user.name ? user.name[0].toUpperCase() : 'U'}
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="text-xs font-semibold text-white truncate">{user.name}</div>
                                        <div className="text-[10px] text-slate-400 truncate">{user.email}</div>
                                    </div>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    title="Keluar"
                                    className="p-2 rounded-lg text-accent hover:bg-accent/20 transition-colors shrink-0 cursor-pointer"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-3 py-1">
                                <Link
                                    href={route('profile.edit')}
                                    title={user.name}
                                    className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 transition-all ${
                                        isCurrentRoute('profile.edit')
                                            ? 'bg-secondary text-primary ring-2 ring-white/30'
                                            : 'bg-secondary text-primary hover:opacity-90'
                                    }`}
                                >
                                    {user.name ? user.name[0].toUpperCase() : 'U'}
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    title="Keluar"
                                    className="p-2 rounded-lg text-accent hover:bg-accent/20 transition-colors cursor-pointer"
                                >
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
                
                {/* Top Header Navbar */}
                <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur-md border-b border-[#EAE6DF] flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-2xs">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 rounded-lg text-primary hover:bg-slate-100 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <button
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                            className="hidden lg:flex p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors border border-slate-200/80 shadow-2xs cursor-pointer"
                            title={sidebarCollapsed ? 'Perbesar Sidebar' : 'Kecilkan Sidebar'}
                        >
                            <svg className="w-4 h-4 transition-transform duration-300" style={{ transform: sidebarCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500 tracking-wide uppercase">
                            <span>Arunika Portal</span>
                            <span className="text-slate-300">/</span>
                            <span className="text-primary font-bold">Admin Panel</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50 px-3.5 py-1.5 shadow-2xs">
                            <span className="w-6 h-6 rounded-lg bg-primary text-secondary flex items-center justify-center font-bold text-xs">
                                {user.name ? user.name[0].toUpperCase() : 'U'}
                            </span>
                            <span className="text-xs font-semibold text-slate-700">{user.name}</span>
                        </div>
                    </div>
                </header>

                {header && (
                    <div className="bg-white border-b border-[#EAE6DF] px-4 py-6 sm:px-6 lg:px-8 shadow-2xs">
                        {header}
                    </div>
                )}

                <main className="flex-1 bg-background">
                    {children}
                </main>
            </div>
        </div>
    );
}