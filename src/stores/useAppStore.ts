import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recepiSlice";

export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...createRecipesSlice(...a)
}))