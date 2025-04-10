import { createClient } from "@supabase/supabase-js";
import type { Art, ImageData } from "./types";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string
);

export const fetchImages = async (): Promise<ImageData[] | null> => {
  const { data, error } = await supabase.from("Art").select();

  if (error) {
    console.error("Error fetching image data:", error);
    return null;
  }

  const imageData: ImageData[] = data.map((image: Art) => ({
    id: image.id,
    image: image.image,
    is_doodle: image.is_doodle,
    tags: image.tags,
  }));

  return imageData;
};
