import React from 'react';
import "./about.scss";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const PDFViewer = () => {
 const pdfURL = '/ReetKhanchandani.pdf';
return (
 <div>
    <h1> Resume </h1>
    <iframe class="resume" src="https://drive.google.com/file/d/1g_kZ7FBJP380wuCDqGYgRB7aipk45Opx/preview" width="640" height="720" allow="autoplay"></iframe>
 </div>
 );
};
export default PDFViewer;