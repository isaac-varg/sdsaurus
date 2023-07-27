import { store } from "@/redux/store";
import type { jsPDF } from "jspdf";
import { getCurrentY, updateY } from "./currentY";

const getXPositionSubheader = () => {
  return store.getState().pdf.xPositionSubheader;
};

const getXPositionSubsection = () => {
  return store.getState().pdf.xPositionSubsection;
};

const getXPositionDataValue = () => {
  return store.getState().pdf.xPositionDataValue;
};

// adds the section header
// e.g., 2. Harzards Identification
export const addSectionHeader = (
  doc: jsPDF,
  headerText: string,
  x: number,
  y: number
) => {
  doc.setFont("Inter-Bold").setFontSize(12);
  doc.text(headerText, x, y);
  updateY(20);
};

export const addSubSectionTitle = (
  doc: jsPDF,
  subsectionText: string,
  y: number
) => {
  doc.setFont("Inter-SemiBold").setFontSize(12);
  doc.text(subsectionText, getXPositionSubheader(), y);
  updateY(20);
};

export const addDataSet = (
  doc: jsPDF,
  label: string,
  value: string,
  y: number
) => {
  doc.setFont("Inter-SemiBold").setFontSize(10);
  doc.text(label, getXPositionSubsection(), y);

  doc.setFont("Inter-Regular").setFontSize(10);
  doc.text(value, getXPositionDataValue(), y);
  updateY(12)


};
