import type { BackdropSizes } from "@/types";

export const getPhotoURL = (width: BackdropSizes, url?: string) => `https://image.tmdb.org/t/p/${width}/${url}`;
