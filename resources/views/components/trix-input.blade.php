@props(['id', 'name', 'value' => ''])

<input type="hidden" name="{{ $name }}" id="{{ $id }}_input" value="{{ $value }}">

<trix-toolbar id="{{ $id }}_toolbar"></trix-toolbar>

<trix-editor
    id="{{ $id }}"
    toolbar="{{ $id }}_toolbar"
    input="{{ $id }}_input"
    {{ $attributes->merge(['class' => 'trix-content border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:ring-1 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm']) }}
></trix-editor>

@once
<script>
document.addEventListener("trix-attachment-add", function(event) {
    if (event.attachment.file) {
        uploadTrixAttachment(event.attachment);
    }
});

function uploadTrixAttachment(attachment) {
    let formData = new FormData();
    formData.append("attachment", attachment.file);

    fetch("{{ route('attachments.store') }}", {
        method: "POST",
        headers: {
            "X-CSRF-TOKEN": "{{ csrf_token() }}",
        },
        body: formData,
    })
    .then(response => {
        if (!response.ok) throw new Error("Gagal upload file");
        return response.json();
    })
    .then(data => {
        attachment.setAttributes({
            url: data.image_url,
            href: data.image_url,
        });
    })
    .catch(error => {
        console.error("Upload gagal:", error);
        alert("Gagal upload gambar. Cek console/log server.");
    });
}
</script>
@endonce
