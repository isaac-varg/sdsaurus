import { jsPDF } from "jspdf";
import { store } from "@/redux/store";
import { pdfActions, setCurrentY } from "@/redux/pdfSlice";
import generateSection00 from "./sections/section00/header";
import generateSection01 from "./sections/section01/content";

import "p/assets/fonts/Inter-Light-normal";
import "p/assets/fonts/Inter-Regular-normal";
import "p/assets/fonts/Inter-Medium-normal"
import "p/assets/fonts/Inter-SemiBold-normal"
import "p/assets/fonts/Inter-Bold-normal";


// generates the pdf
const handlePDF = async () => {

  const sds = new jsPDF("p", "px", "letter", false);

  sds.setFont("Inter-Light", "normal", "normal");
  await generateSection00(sds);
  await generateSection01(sds);

  store.dispatch(pdfActions.resetCurrentY());

  sds.save("mypdf.pdf");
};

export default handlePDF;
