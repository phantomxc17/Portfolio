import React from 'react';

const DownloadCV = () => {
    const handleDownload = () => {
        // URL ke file PDF CV yang ingin di-download
        const fileUrl = '/cv.pdf';

        // Membuat elemen anchor (link) baru
        const anchor = document.createElement('a');
        anchor.href = fileUrl;

        // Memberikan nama file yang akan di-download
        anchor.download = 'My_CV.pdf';

        // Menambahkan elemen tersebut ke body dan mengkliknya secara otomatis
        document.body.appendChild(anchor);
        anchor.click();

        // Menghapus elemen anchor setelah selesai
        document.body.removeChild(anchor);
    };

    return (
        <div>
            <h1>Download My CV</h1>
            <button onClick={handleDownload}>Download CV</button>
        </div>
    );
};

export default DownloadCV;
