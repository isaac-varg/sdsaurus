import { store } from "@/redux/store";
import { setCurrentY } from "@/redux/pdfSlice";


export const getCurrentY = () => {
    return store.getState().pdf.currentY;
}


export const updateY = (modifier: number, extraSpace: number = 0) => {
    const verticalModifier = modifier + extraSpace
    store.dispatch(setCurrentY(verticalModifier));
}

