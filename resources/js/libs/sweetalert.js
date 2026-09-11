import Swal from 'sweetalert2';

/**
 * Custom SweetAlert Helper with Arunika Brand Theme (#1B544D, #ECAE36)
 */

export const showSuccessAlert = (title = 'Berhasil!', text = 'Data berhasil disimpan.', options = {}) => {
    return Swal.fire({
        icon: 'success',
        title,
        text,
        confirmButtonText: 'Selesai',
        confirmButtonColor: '#1B544D',
        customClass: {
            popup: 'rounded-2xl font-sans border border-[#EAE6DF] shadow-xl',
            confirmButton: 'px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all hover:bg-[#15433E]',
            title: 'text-[#1B544D] font-bold text-xl',
            htmlContainer: 'text-slate-600 text-sm'
        },
        buttonsStyling: true,
        ...options,
    });
};

export const showErrorAlert = (title = 'Gagal!', text = 'Terjadi kesalahan saat menyimpan data.', options = {}) => {
    return Swal.fire({
        icon: 'error',
        title,
        text,
        confirmButtonText: 'Tutup',
        confirmButtonColor: '#E11D48',
        customClass: {
            popup: 'rounded-2xl font-sans border border-[#EAE6DF] shadow-xl',
            confirmButton: 'px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all hover:bg-rose-700',
            title: 'text-rose-600 font-bold text-xl',
            htmlContainer: 'text-slate-600 text-sm'
        },
        buttonsStyling: true,
        ...options,
    });
};

export const showConfirmDialog = async ({
    title = 'Apakah Anda Yakin?',
    text = 'Tindakan ini tidak dapat dibatalkan.',
    confirmButtonText = 'Ya, Hapus!',
    cancelButtonText = 'Batal',
    icon = 'warning',
} = {}) => {
    const result = await Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#E11D48',
        cancelButtonColor: '#64748B',
        confirmButtonText,
        cancelButtonText,
        reverseButtons: true,
        customClass: {
            popup: 'rounded-2xl font-sans border border-[#EAE6DF] shadow-xl',
            confirmButton: 'px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all hover:bg-rose-700 ml-2',
            cancelButton: 'px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-slate-600',
            title: 'text-slate-800 font-bold text-lg',
            htmlContainer: 'text-slate-600 text-sm'
        },
    });

    return result.isConfirmed;
};

export default Swal;
