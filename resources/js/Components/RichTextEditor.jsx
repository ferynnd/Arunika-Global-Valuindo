
import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';

export default function RichTextEditor({
    value = '',
    onChange,
    placeholder = 'Tulis isi artikel yang menarik di sini...',
    error = null,
}) {
    const imageInputRef = useRef(null);
    const editorRef = useRef(null);

    const [isUploading, setIsUploading] = useState(false);

    /*
    |--------------------------------------------------------------------------
    | Upload Image
    |--------------------------------------------------------------------------
    */

    const handleImageUpload = useCallback(async (file) => {
        const editor = editorRef.current;

        if (!editor || !file) {
            return;
        }

        // Validasi tipe file
        const allowedTypes = [
            'image/jpeg',
            'image/png',
            'image/jpg',
            'image/gif',
            'image/webp',
        ];

        if (!allowedTypes.includes(file.type)) {
            alert(
                'Format file tidak didukung.\n\n' +
                'Gunakan: JPG, PNG, GIF, atau WebP.'
            );
            return;
        }

        // Validasi ukuran maksimal 5MB
        if (file.size > 5 * 1024 * 1024) {
            alert('Ukuran gambar terlalu besar. Maksimal 5MB.');
            return;
        }

        // Jangan upload dua gambar sekaligus
        if (isUploading) {
            return;
        }

        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append('image', file);

            // CSRF Token
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute('content');

            if (!csrfToken) {
                throw new Error(
                    'CSRF token tidak ditemukan. Silakan refresh halaman.'
                );
            }

            // URL upload menggunakan Ziggy
            let uploadUrl;

            try {
                uploadUrl = route('admin.upload-image');
            } catch (error) {
                console.warn(
                    'Ziggy route tidak tersedia, menggunakan fallback URL.'
                );

                const pathParts = window.location.pathname
                    .split('/')
                    .filter(Boolean);

                const adminSegment =
                    pathParts[0] || 'secure-panel-arunika';

                uploadUrl = `/${adminSegment}/upload-image`;
            }

            console.log('Uploading image to:', uploadUrl);

            const response = await fetch(uploadUrl, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: formData,
            });

            /*
            |--------------------------------------------------------------------------
            | Ambil response sebagai text terlebih dahulu.
            | Ini mencegah error:
            | Unexpected token '<', "<!DOCTYPE..."
            |--------------------------------------------------------------------------
            */

            const responseText = await response.text();

            console.log('Upload status:', response.status);
            console.log('Upload response:', responseText);

            if (!response.ok) {
                let message = `Upload gagal (HTTP ${response.status})`;

                // Coba membaca response JSON
                try {
                    const errorData = JSON.parse(responseText);

                    message =
                        errorData.message ||
                        errorData.error ||
                        message;

                    // Laravel validation error
                    if (
                        response.status === 422 &&
                        errorData.errors
                    ) {
                        const validationMessages = Object.values(
                            errorData.errors
                        )
                            .flat()
                            .join('\n');

                        if (validationMessages) {
                            message = validationMessages;
                        }
                    }
                } catch {
                    /*
                    |--------------------------------------------------------------------------
                    | Response bukan JSON.
                    | Biasanya HTML dari Laravel error page.
                    |--------------------------------------------------------------------------
                    */

                    if (response.status === 419) {
                        message =
                            'CSRF token expired. Silakan refresh halaman.';
                    } else if (response.status === 401) {
                        message =
                            'Sesi login telah berakhir. Silakan login kembali.';
                    } else if (response.status === 403) {
                        message =
                            'Anda tidak memiliki izin untuk mengupload gambar.';
                    } else if (response.status === 404) {
                        message =
                            'Endpoint upload gambar tidak ditemukan.';
                    } else if (response.status === 413) {
                        message =
                            'Ukuran gambar terlalu besar.';
                    } else if (response.status === 422) {
                        message =
                            'File gambar tidak valid.';
                    } else if (response.status >= 500) {
                        message =
                            'Terjadi error pada server Laravel saat mengupload gambar. Silakan cek storage/logs/laravel.log.';
                    }
                }

                throw new Error(message);
            }

            /*
            |--------------------------------------------------------------------------
            | Response harus JSON
            |--------------------------------------------------------------------------
            */

            let data;

            try {
                data = JSON.parse(responseText);
            } catch {
                console.error(
                    'Server mengembalikan response bukan JSON:',
                    responseText
                );

                throw new Error(
                    'Server tidak mengembalikan response JSON. Cek Laravel log.'
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Pastikan URL gambar tersedia
            |--------------------------------------------------------------------------
            */

            if (!data.url) {
                console.error('Response server:', data);

                throw new Error(
                    'Upload berhasil tetapi URL gambar tidak ditemukan.'
                );
            }

            /*
            |--------------------------------------------------------------------------
            | Masukkan gambar ke Tiptap
            |--------------------------------------------------------------------------
            */

            editor
                .chain()
                .focus()
                .setImage({
                    src: data.url,
                })
                .run();

        } catch (err) {
            console.error('Upload gambar gagal:', err);

            alert(
                'Gagal mengupload gambar:\n\n' +
                err.message
            );
        } finally {
            setIsUploading(false);

            // Reset input supaya file yang sama bisa dipilih lagi
            if (imageInputRef.current) {
                imageInputRef.current.value = '';
            }
        }
    }, [isUploading]);

    /*
    |--------------------------------------------------------------------------
    | Tiptap Editor
    |--------------------------------------------------------------------------
    */

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),

            Underline,

            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-indigo-600 underline font-medium hover:text-indigo-800 transition-colors',
                },
            }),

            Image.configure({
                HTMLAttributes: {
                    class: 'max-w-full rounded-xl my-4 border border-slate-200 shadow-sm',
                },
            }),

            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),

            Placeholder.configure({
                placeholder,
            }),
        ],

        content: value || '',

        onCreate: ({ editor }) => {
            editorRef.current = editor;
        },

        onUpdate: ({ editor }) => {
            if (onChange) {
                onChange(
                    editor.isEmpty
                        ? ''
                        : editor.getHTML()
                );
            }
        },

        editorProps: {
            attributes: {
                class:
                    'tiptap prose max-w-none focus:outline-none min-h-[300px] p-4 text-slate-800 text-sm sm:text-base leading-relaxed',
            },

            /*
            |--------------------------------------------------------------------------
            | CTRL + V / Paste
            |--------------------------------------------------------------------------
            */

            handlePaste: (view, event) => {
                const clipboardData = event.clipboardData;

                if (!clipboardData) {
                    return false;
                }

                const items = clipboardData.items;

                if (!items) {
                    return false;
                }

                /*
                |--------------------------------------------------------------------------
                | Cari image dari clipboard
                |--------------------------------------------------------------------------
                */

                for (let i = 0; i < items.length; i++) {
                    const item = items[i];

                    if (
                        item.kind === 'file' &&
                        item.type.startsWith('image/')
                    ) {
                        const file = item.getAsFile();

                        if (file) {
                            handleImageUpload(file);

                            // Mencegah Tiptap memasukkan image sebagai
                            // data/base64 atau melakukan paste default
                            event.preventDefault();

                            return true;
                        }
                    }
                }

                /*
                |--------------------------------------------------------------------------
                | Kalau bukan gambar, biarkan Tiptap menangani
                | paste teks seperti biasa.
                |--------------------------------------------------------------------------
                */

                return false;
            },

            /*
            |--------------------------------------------------------------------------
            | DRAG & DROP IMAGE
            |--------------------------------------------------------------------------
            */

            handleDrop: (view, event) => {
                const files = event.dataTransfer?.files;

                if (!files || files.length === 0) {
                    return false;
                }

                for (let i = 0; i < files.length; i++) {
                    const file = files[i];

                    if (file.type.startsWith('image/')) {
                        handleImageUpload(file);

                        event.preventDefault();

                        return true;
                    }
                }

                return false;
            },
        },
    });

    /*
    |--------------------------------------------------------------------------
    | Keep editor ref synchronized
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        editorRef.current = editor;
    }, [editor]);

    /*
    |--------------------------------------------------------------------------
    | Synchronize external value
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!editor) {
            return;
        }

        const currentHTML = editor.getHTML();
        const incomingValue = value || '';

        if (
            incomingValue !== currentHTML &&
            (!editor.isFocused || incomingValue === '')
        ) {
            editor.commands.setContent(
                incomingValue,
                false
            );
        }
    }, [value, editor]);

    /*
    |--------------------------------------------------------------------------
    | Link
    |--------------------------------------------------------------------------
    */

    const setLink = useCallback(() => {
        if (!editor) {
            return;
        }

        const previousUrl =
            editor.getAttributes('link').href || '';

        const url = window.prompt(
            'Masukkan URL tautan (contoh: https://example.com):',
            previousUrl
        );

        if (url === null) {
            return;
        }

        if (url.trim() === '') {
            editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .unsetLink()
                .run();

            return;
        }

        editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .setLink({
                href: url.trim(),
            })
            .run();
    }, [editor]);

    /*
    |--------------------------------------------------------------------------
    | Image URL
    |--------------------------------------------------------------------------
    */

    const addImageFromUrl = useCallback(() => {
        if (!editor) {
            return;
        }

        const url = window.prompt(
            'Masukkan URL gambar (contoh: https://images.unsplash.com/...)'
        );

        if (url && url.trim() !== '') {
            editor
                .chain()
                .focus()
                .setImage({
                    src: url.trim(),
                })
                .run();
        }
    }, [editor]);

    /*
    |--------------------------------------------------------------------------
    | File Picker
    |--------------------------------------------------------------------------
    */

    const openImageFilePicker = useCallback(() => {
        if (imageInputRef.current) {
            imageInputRef.current.click();
        }
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Loading
    |--------------------------------------------------------------------------
    */

    if (!editor) {
        return (
            <div className="w-full h-72 rounded-xl border border-slate-300 bg-slate-50 flex items-center justify-center text-slate-400 text-sm">
                Memuat Rich Text Editor...
            </div>
        );
    }

    /*
    |--------------------------------------------------------------------------
    | Statistics
    |--------------------------------------------------------------------------
    */

    const text = editor.getText();

    const wordCount = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    const charCount = text.length;

    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <div
            className={`rounded-xl border transition-all ${error
                    ? 'border-rose-400 ring-1 ring-rose-400'
                    : 'border-slate-300 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500'
                } bg-white shadow-xs overflow-hidden`}
        >

            {/* =========================================================
                TOOLBAR
            ========================================================= */}

            <div className="bg-slate-50 border-b border-slate-200/80 p-2 flex flex-wrap items-center gap-1 text-slate-700 select-none">

                {/* Undo / Redo */}
                <div className="flex items-center gap-0.5 pr-1 border-r border-slate-200">

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().undo().run()
                        }
                        disabled={!editor.can().undo()}
                        title="Undo (Ctrl+Z)"
                        className="p-1.5 rounded-lg hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-600"
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M9 14L4 9l5-5" />
                            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().redo().run()
                        }
                        disabled={!editor.can().redo()}
                        title="Redo (Ctrl+Y)"
                        className="p-1.5 rounded-lg hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-600"
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M15 14l5-5-5-5" />
                            <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
                        </svg>
                    </button>

                </div>

                {/* Headings */}
                <div className="flex items-center gap-0.5 px-1 border-r border-slate-200">

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().setParagraph().run()
                        }
                        title="Normal Text (Paragraf)"
                        className={`px-2 py-1 rounded-lg text-xs font-semibold transition-colors ${editor.isActive('paragraph') &&
                                !editor.isActive('heading')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        P
                    </button>

                    {[1, 2, 3].map((level) => (
                        <button
                            key={level}
                            type="button"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level })
                                    .run()
                            }
                            title={`Heading ${level}`}
                            className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors ${editor.isActive('heading', { level })
                                    ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                    : 'text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            H{level}
                        </button>
                    ))}

                </div>

                {/* Inline Formatting */}
                <div className="flex items-center gap-0.5 px-1 border-r border-slate-200">

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleBold().run()
                        }
                        title="Tebal (Ctrl+B)"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('bold')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs font-bold'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleItalic().run()
                        }
                        title="Miring (Ctrl+I)"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('italic')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs italic'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="19" y1="4" x2="10" y2="4" />
                            <line x1="14" y1="20" x2="5" y2="20" />
                            <line x1="15" y1="4" x2="9" y2="20" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleUnderline().run()
                        }
                        title="Garis Bawah (Ctrl+U)"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('underline')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs underline'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
                            <line x1="4" y1="21" x2="20" y2="21" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleStrike().run()
                        }
                        title="Coret"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('strike')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs line-through'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M16 4H9a3 3 0 0 0-2.83 4" />
                            <path d="M14 12a4 4 0 0 1 0 8H6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleCode().run()
                        }
                        title="Inline Code"
                        className={`p-1.5 rounded-lg transition-colors font-mono text-xs ${editor.isActive('code')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs font-bold'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        &lt;/&gt;
                    </button>

                </div>

                {/* Alignment */}
                <div className="flex items-center gap-0.5 px-1 border-r border-slate-200">

                    {[
                        ['left', 'Rata Kiri'],
                        ['center', 'Rata Tengah'],
                        ['right', 'Rata Kanan'],
                        ['justify', 'Justify'],
                    ].map(([align, title]) => (
                        <button
                            key={align}
                            type="button"
                            onClick={() =>
                                editor
                                    .chain()
                                    .focus()
                                    .setTextAlign(align)
                                    .run()
                            }
                            title={title}
                            className={`p-1.5 rounded-lg transition-colors ${editor.isActive({
                                textAlign: align,
                            })
                                    ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                    : 'text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                {align === 'left' && (
                                    <>
                                        <line x1="17" y1="10" x2="3" y2="10" />
                                        <line x1="21" y1="6" x2="3" y2="6" />
                                        <line x1="21" y1="14" x2="3" y2="14" />
                                        <line x1="17" y1="18" x2="3" y2="18" />
                                    </>
                                )}

                                {align === 'center' && (
                                    <>
                                        <line x1="18" y1="10" x2="6" y2="10" />
                                        <line x1="21" y1="6" x2="3" y2="6" />
                                        <line x1="21" y1="14" x2="3" y2="14" />
                                        <line x1="18" y1="18" x2="6" y2="18" />
                                    </>
                                )}

                                {align === 'right' && (
                                    <>
                                        <line x1="21" y1="10" x2="7" y2="10" />
                                        <line x1="21" y1="6" x2="3" y2="6" />
                                        <line x1="21" y1="14" x2="3" y2="14" />
                                        <line x1="21" y1="18" x2="7" y2="18" />
                                    </>
                                )}

                                {align === 'justify' && (
                                    <>
                                        <line x1="21" y1="6" x2="3" y2="6" />
                                        <line x1="21" y1="10" x2="3" y2="10" />
                                        <line x1="21" y1="14" x2="3" y2="14" />
                                        <line x1="21" y1="18" x2="3" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>
                    ))}

                </div>

                {/* Lists */}
                <div className="flex items-center gap-0.5 px-1 border-r border-slate-200">

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                        title="Daftar Poin"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('bulletList')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="9" y1="6" x2="20" y2="6" />
                            <line x1="9" y1="12" x2="20" y2="12" />
                            <line x1="9" y1="18" x2="20" y2="18" />
                            <circle cx="4" cy="6" r="2" fill="currentColor" />
                            <circle cx="4" cy="12" r="2" fill="currentColor" />
                            <circle cx="4" cy="18" r="2" fill="currentColor" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                        title="Daftar Angka"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('orderedList')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="10" y1="6" x2="21" y2="6" />
                            <line x1="10" y1="12" x2="21" y2="12" />
                            <line x1="10" y1="18" x2="21" y2="18" />
                            <path d="M4 6h1v4" />
                            <path d="M4 10h2" />
                            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                        </svg>
                    </button>

                </div>

                {/* Blocks */}
                <div className="flex items-center gap-0.5 px-1 border-r border-slate-200">

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleBlockquote().run()
                        }
                        title="Kutipan"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('blockquote')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().toggleCodeBlock().run()
                        }
                        title="Blok Kode"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('codeBlock')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect
                                width="18"
                                height="18"
                                x="3"
                                y="3"
                                rx="2"
                            />
                            <path d="m10 10-2 2 2 2" />
                            <path d="m14 14 2-2-2-2" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            editor.chain().focus().setHorizontalRule().run()
                        }
                        title="Garis Pemisah"
                        className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <line x1="3" y1="12" x2="21" y2="12" />
                        </svg>
                    </button>

                </div>

                {/* Media & Links */}
                <div className="flex items-center gap-0.5 px-1 border-r border-slate-200">

                    {/* Link */}
                    <button
                        type="button"
                        onClick={setLink}
                        title="Sisipkan/Ubah Link"
                        className={`p-1.5 rounded-lg transition-colors ${editor.isActive('link')
                                ? 'bg-indigo-100 text-indigo-700 shadow-xs'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                    </button>

                    {/* Upload */}
                    <button
                        type="button"
                        onClick={openImageFilePicker}
                        disabled={isUploading}
                        title="Upload Gambar dari Komputer"
                        className={`p-1.5 rounded-lg transition-colors ${isUploading
                                ? 'opacity-60 cursor-not-allowed bg-indigo-50 text-indigo-400'
                                : 'text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        {isUploading ? (
                            <svg
                                className="w-4 h-4 animate-spin"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                        ) : (
                            <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                    ry="2"
                                />
                                <circle cx="9" cy="9" r="2" />
                                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                            </svg>
                        )}
                    </button>

                    {/* Image URL */}
                    <button
                        type="button"
                        onClick={addImageFromUrl}
                        title="Sisipkan Gambar dari URL"
                        className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0-7.07 7.07l1.71-1.71" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </button>

                    {/* Hidden input */}
                    <input
                        ref={imageInputRef}
                        type="file"
                        accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
                        className="hidden"
                        onChange={(event) => {
                            const file =
                                event.target.files?.[0];

                            if (file) {
                                handleImageUpload(file);
                            }
                        }}
                    />

                </div>

                {/* Clear Format */}
                <div className="flex items-center gap-0.5 pl-1">

                    <button
                        type="button"
                        onClick={() =>
                            editor
                                .chain()
                                .focus()
                                .unsetAllMarks()
                                .clearNodes()
                                .run()
                        }
                        title="Hapus Pemformatan"
                        className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200 hover:text-rose-600 transition-colors"
                    >
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 .75 2 2v2" />
                        </svg>
                    </button>

                </div>

            </div>

            {/* =========================================================
                EDITOR
            ========================================================= */}

            <div className="bg-white min-h-[300px] cursor-text">
                <EditorContent editor={editor} />
            </div>

            {/* =========================================================
                FOOTER
            ========================================================= */}

            <div className="bg-slate-50 border-t border-slate-100 px-4 py-2 flex items-center justify-between text-xs text-slate-400">

                <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                        Rich Text Editor (TipTap)
                    </span>
                </div>

                <div className="flex items-center gap-3 font-medium">
                    <span>{wordCount} kata</span>
                    <span>•</span>
                    <span>{charCount} karakter</span>
                </div>

            </div>

        </div>
    );
}

