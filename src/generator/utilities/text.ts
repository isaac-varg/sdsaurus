import { store } from "@/redux/store";
import type { jsPDF } from "jspdf";
import { updateY } from "./currentY";

const getMarginPositionRight = () => {
  return store.getState().pdf.marginPositionRight;
};
const getWidthContent = () => {
  return store.getState().pdf.widthContent;
};

// gets the height of text for single lines and multiple lines wrapping to conform to max width
export const getTextHeight = (
  doc: jsPDF,
  text: string,
  maxWidth: number = getWidthContent()
) => {
  const dimensions = doc.getTextDimensions(text, { maxWidth });
  return Math.round(dimensions.h);
};

// gets the rounded width of text
export const getTextWidth = (doc: jsPDF, text: string) => {
  const dimensions = doc.getTextDimensions(text);
  return Math.round(dimensions.w);
};

// gets the starting X position to have text be aligned with the right side of the xPositionEnd. E.g., text to be flushed with right margin if aligned right.
export const getXRightAlign = (
  doc: jsPDF,
  text: string,
  xPositionEnd: number = getMarginPositionRight()
) => {
  const textLength = Math.round(doc.getTextWidth(text));
  const initalX = Math.round(xPositionEnd - textLength);
  return initalX;
};

// updates the current y with respect to the amount of vertical space text occupied
// extra space can be provided
export const updateYFromText = (
  doc: jsPDF,
  text: string,
  extraSpace?: number
) => {
  const textVerticalSpace = getTextHeight(doc, text);
  updateY(textVerticalSpace, extraSpace);
}; 
