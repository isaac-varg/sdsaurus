"use client"
import { store } from "@/redux/store";
import { pdfActions } from "@/redux/pdfSlice";


const StateInitiator = () => {
  
    const widthDocument = 459;
    const marginX = 25;
    const marginPositionLeft = marginX;
    const marginPositionRight = widthDocument - marginX;
    const widthContent = widthDocument - marginX * 2;
    const xPositionSubheader = 40;
    const xPositionSubsection = 40;
    const xPositionDataValue = 200;
    const logoScale = 0.15;

    store.dispatch(pdfActions.setWidthDocument(widthDocument));
    store.dispatch(pdfActions.setWidthContent(widthContent));
    store.dispatch(pdfActions.setMarginX(marginX));
    store.dispatch(pdfActions.setMarginPositionLeft(marginPositionLeft));
    store.dispatch(pdfActions.setMarginPositionRight(marginPositionRight));
    store.dispatch(pdfActions.setXPositionSubheaader(xPositionSubheader));
    store.dispatch(pdfActions.setXPositionSubsection(xPositionSubsection));
    store.dispatch(pdfActions.setXPositionDataValue(xPositionDataValue));
    store.dispatch(pdfActions.setLogoScale(logoScale));
    store.dispatch(pdfActions.setCurrentY(0));




  return false;
};

export default StateInitiator;
