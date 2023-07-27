import { logo } from "p/assets/images/logo";
import { store } from "@/redux/store";
import getBase64ImageDimensions from "../../utilities/getImageDimensions";
import { getCurrentY, updateY } from "@/generator/utilities/currentY";
import type { jsPDF } from "jspdf";

import {
  getTextWidth,
  updateYFromText,
  getXRightAlign,
} from "../../utilities/text";

const generateSection00 = async (doc: jsPDF) => {
  const mpl = store.getState().pdf.marginPositionLeft;
  const mpr = store.getState().pdf.marginPositionRight;
  const logoScale = store.getState().pdf.logoScale;

  let logoDimensions = await getBase64ImageDimensions(logo);

  doc.addImage(
    logo,
    "PNG",
    mpl,
    15,
    logoDimensions.width * logoScale,
    logoDimensions.height * logoScale
  );
  let yModifier = 15 + logoDimensions.height * logoScale;
  updateY(yModifier);

  doc.setLineWidth(2.5);
  doc.line(mpl, getCurrentY() + 5, mpr, getCurrentY() + 5);
  updateY(5);

  doc.setFontSize(9);
  const website = "isaacvargas.dev";
  doc.text(website, getXRightAlign(doc, website), getCurrentY() - 5);
  updateYFromText(doc, website);

  doc.setFont("Inter-Bold").setFontSize(16);
  const documentTitle = "safety data sheet";
  doc.text(
    documentTitle.toUpperCase(),
    getXRightAlign(doc, documentTitle.toUpperCase()),
    getCurrentY() + 10
  );
  updateYFromText(doc, documentTitle, 10);

  doc.setFont("Inter-Regular").setFontSize(10);
  const documentVersion = 1.0;
  const documentRevisionDate = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  doc.text(
    `Version ${documentVersion}`,
    getXRightAlign(doc, `Version ${documentVersion}`),
    getCurrentY()
  );
  updateYFromText(doc, `Version ${documentVersion}`);

  doc.text(
    `Revision Date ${documentRevisionDate}`,
    getXRightAlign(doc, `Revision Date ${documentRevisionDate}`),
    getCurrentY()
  );
  updateYFromText(doc, `Revision Date ${documentRevisionDate}`);

  doc.setLineWidth(1).line(mpl, getCurrentY(), mpr, getCurrentY());
  updateY(10);
};

export default generateSection00;
