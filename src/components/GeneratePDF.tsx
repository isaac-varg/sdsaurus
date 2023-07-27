"use client"
import handlePDF from "@/generator/generatePDF";


function GeneratePDF() {
  
  const handleClick = () => {
    handlePDF();
  }

  return (
    <button onClick={handleClick}>Print</button>
  );
}

export default GeneratePDF;