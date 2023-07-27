import { getCurrentY, updateY } from "@/generator/utilities/currentY";
import { addDataSet, addSectionHeader, addSubSectionTitle } from "@/generator/utilities/section"
import { updateYFromText } from "@/generator/utilities/text";
import { store } from "@/redux/store";
import type { jsPDF} from "jspdf"

const generateSection01 = async (doc: jsPDF) => {
  const mpl = store.getState().pdf.marginPositionLeft;

    const headerTitle = '1. Product and Company Identification'.toUpperCase();
    addSectionHeader(doc, headerTitle, mpl, getCurrentY());
   

    let subheadingText = "Product Identifiders";
    addSubSectionTitle(doc, subheadingText, getCurrentY());

    const productIdentifiers = [
        {
            label: 'Product Name',
            value: 'Tyrannosaurus Tender Touch Lotion'
        },
        {
            label: 'Product Code',
            value: 'BASE1005'
        },
        {
            label: 'Brand',
            value: 'SDSaurus'
        }
    ];

    productIdentifiers.forEach((o) => {
        addDataSet(doc, o.label, o.value, getCurrentY())
    });


}

export default generateSection01;