<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'title' => 'Strategic Finance',
                'excerpt' => 'Turning Financial Insight into Strategic Decisions. Membantu perusahaan menjadikan informasi keuangan sebagai dasar pengambilan keputusan, perencanaan, dan pertumbuhan bisnis.',
                'icon' => '<svg class="w-6 h-6 text-[#1B544D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
                'content' => '
                    <p class="lead"><strong>Strategic Finance</strong> membantu perusahaan menjadikan informasi keuangan sebagai dasar untuk pengambilan keputusan, perencanaan, pengendalian, dan pertumbuhan bisnis secara terukur.</p>
                    <p>Arunika memiliki pengalaman mendalam dalam <em>financial analysis</em>, <em>financial projection</em>, <em>financial modeling</em>, <em>corporate valuation</em>, <em>feasibility study</em>, serta <em>financial business partnering</em>.</p>
                    
                    <h3>Cakupan Layanan</h3>
                    <ul>
                        <li><strong>Financial Advisory:</strong> Analisis dan advisory keuangan untuk membantu manajemen memahami kondisi dan kinerja perusahaan secara holistik.</li>
                        <li><strong>Financial Modeling & Projection:</strong> Membangun financial model untuk memproyeksikan revenue, cost, profit, cash flow, dan berbagai skenario bisnis.</li>
                        <li><strong>Corporate Valuation:</strong> Membantu perusahaan maupun investor memahami nilai ekonomi perusahaan sebagai dasar pengambilan keputusan strategis.</li>
                        <li><strong>Feasibility Study & Investment Analysis:</strong> Mengevaluasi kelayakan finansial suatu proyek atau rencana investasi melalui indikator NPV, IRR, ROI, PI, Payback Period, dan ARR.</li>
                        <li><strong>Financial Business Partner:</strong> Mendampingi manajemen dalam budgeting, cash flow projection, financial analysis, cash control, dan keputusan bisnis harian.</li>
                    </ul>

                    <h3>Manfaat bagi Klien</h3>
                    <ul>
                        <li>Pengambilan keputusan strategis berbasis data kuantitatif yang presisi.</li>
                        <li>Proyeksi keuangan yang lebih terstruktur dan realistis.</li>
                        <li>Peningkatan visibility serta kontrol penuh terhadap cash flow perusahaan.</li>
                        <li>Pemahaman yang lebih komprehensif terhadap profitabilitas dan potensi risiko.</li>
                        <li>Dasar penentuan keputusan yang lebih kuat untuk investasi dan ekspansi bisnis.</li>
                    </ul>
                ',
                'features' => [
                    'Financial Advisory & Analysis',
                    'Financial Modeling & Projection',
                    'Corporate Valuation',
                    'Feasibility Study (NPV, IRR, ROI)',
                    'Financial Business Partnering'
                ],
            ],
            [
                'title' => 'Business Advisory',
                'excerpt' => 'Transforming Businesses for Better Performance. Membantu perusahaan mengidentifikasi persoalan bisnis, memperbaiki proses dan struktur organisasi, serta membangun sistem manajemen terintegrasi.',
                'icon' => '<svg class="w-6 h-6 text-[#1B544D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
                'content' => '
                    <p class="lead"><strong>Business Advisory</strong> membantu perusahaan mengidentifikasi persoalan bisnis, memperbaiki proses dan struktur organisasi, serta membangun sistem manajemen yang mendukung kinerja dan pertumbuhan berkelanjutan.</p>
                    <p>Pengalaman Arunika mencakup <em>business process analysis</em>, <em>organizational structure design</em>, <em>management assistance</em>, <em>financial management</em>, <em>performance analysis</em>, dan <em>cost forecasting</em>.</p>
                    
                    <h3>Cakupan Layanan</h3>
                    <ul>
                        <li><strong>Business Transformation Advisory:</strong> Membantu perusahaan merancang dan menjalankan perubahan yang diperlukan untuk meningkatkan kinerja bisnis secara signifikan.</li>
                        <li><strong>Business Process Analysis:</strong> Menganalisis proses bisnis internal untuk menemukan <em>bottleneck</em>, <em>inefficiency</em>, dan peluang pembenahan operasional.</li>
                        <li><strong>Management Advisory:</strong> Mendampingi manajemen eksekutif dalam menyelesaikan persoalan bisnis kompleks dan menentukan langkah strategis.</li>
                        <li><strong>Organizational & Management Improvement:</strong> Membantu merancang struktur organisasi, pembagian fungsi tugas (jobdesk), serta sistem kerja yang terorganisasi.</li>
                        <li><strong>Business Performance Advisory:</strong> Membantu perusahaan memahami dan meningkatkan kinerja melalui analisis mendalam serta performance management terukur.</li>
                    </ul>

                    <h3>Manfaat bagi Klien</h3>
                    <ul>
                        <li>Struktur organisasi menjadi lebih jelas dan adaptif.</li>
                        <li>Proses bisnis operasional berjalan lebih terarah dan efisien.</li>
                        <li>Pembagian tanggung jawab dan pembagian fungsi kerja yang optimal.</li>
                        <li>Identifikasi dan pemecahan masalah bisnis secara lebih sistematis.</li>
                        <li>Pengambilan keputusan manajemen yang lebih terstruktur dan mendorong <em>continuous improvement</em>.</li>
                    </ul>
                ',
                'features' => [
                    'Business Transformation Advisory',
                    'Business Process & Bottleneck Analysis',
                    'Management & Strategic Advisory',
                    'Organizational & Management Improvement',
                    'Business Performance & KPI Advisory'
                ],
            ],
            [
                'title' => 'Sustainability, Community Development & Social Impact',
                'excerpt' => 'Creating Positive Value for Business, Society & Environment. Memastikan pertumbuhan bisnis menghasilkan nilai ekonomi sekaligus nilai positif bagi masyarakat dan lingkungan.',
                'icon' => '<svg class="w-6 h-6 text-[#1B544D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
                'content' => '
                    <p class="lead">Pilar ini membantu perusahaan memastikan bahwa pertumbuhan bisnis tidak hanya menghasilkan nilai ekonomi, tetapi juga memberikan nilai positif bagi masyarakat, stakeholders, dan lingkungan hidup.</p>
                    <p>Pendekatan ini sejalan dengan prinsip Arunika yang menekankan penciptaan <em>sustainable client value</em> dan <em>positive impact</em>. Kami berpengalaman dalam CSR impact measurement menggunakan pendekatan <strong>Social Return on Investment (SROI)</strong> serta <em>social research</em>.</p>
                    
                    <h3>Cakupan Layanan</h3>
                    <ul>
                        <li><strong>Sustainability Advisory:</strong> Membantu organisasi mengintegrasikan prinsip keberlanjutan (ESG) ke dalam tata kelola dan pengembangan bisnis.</li>
                        <li><strong>CSR Impact Measurement:</strong> Mengukur dampak program CSR agar perusahaan dapat memahami nilai nyata dan hasil yang dihasilkan dari investasi sosialnya.</li>
                        <li><strong>Social Return on Investment (SROI):</strong> Mengukur nilai sosial (social value) yang dihasilkan oleh suatu program secara kuantitatif berbasis metodologi SROI.</li>
                        <li><strong>Community Development:</strong> Mendukung perancangan dan pengembangan program pemberdayaan yang memberikan manfaat berkelanjutan bagi masyarakat lokal.</li>
                        <li><strong>Social Impact Assessment:</strong> Membantu organisasi memahami dan mengevaluasi dampak sosial dari aktivitas operasional atau proyek yang dijalankan.</li>
                        <li><strong>Social Research:</strong> Melakukan riset lapangan untuk memahami dinamika sosial dan menghasilkan <em>insight</em> relevan bagi keputusan strategis.</li>
                    </ul>

                    <h3>Manfaat bagi Klien</h3>
                    <ul>
                        <li>Memahami dan mengukur dampak sosial program CSR secara presisi.</li>
                        <li>Meningkatkan kualitas akuntabilitas dan evaluasi program keberlanjutan.</li>
                        <li>Menghubungkan program sosial perusahaan secara langsung dengan <em>value creation</em>.</li>
                        <li>Mendukung pengambilan keputusan program berbasis bukti (<em>evidence-based decision making</em>).</li>
                        <li>Mendorong terciptanya <em>positive impact</em> yang berdampak jangka panjang dan berkelanjutan.</li>
                    </ul>
                ',
                'features' => [
                    'Sustainability Advisory (ESG Integration)',
                    'Social Return on Investment (SROI)',
                    'CSR Impact Measurement & Evaluation',
                    'Community Development Program Design',
                    'Social Impact Assessment & Research'
                ],
            ],
        ];

        foreach ($services as $index => $item) {
            $slug = Str::slug($item['title']);

            Service::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $item['title'],
                    'slug' => $slug,
                    'icon' => $item['icon'],
                    'thumbnail' => null,
                    'excerpt' => $item['excerpt'],
                    'content' => trim($item['content']),
                    'features' => $item['features'],
                    'status' => 'active',
                    'sort_order' => $index + 1,
                    'seo_title' => $item['title'] . ' - Arunika Global Valuindo',
                    'seo_description' => $item['excerpt'],
                    'seo_keywords' => 'konsultan, arunika, ' . strtolower($item['title']),
                    'og_image' => null,
                ]
            );
        }
    }
}