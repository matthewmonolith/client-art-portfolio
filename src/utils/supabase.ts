import { createClient } from "@supabase/supabase-js";

const BUCKET_NAME = "arts-bucket";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_KEY as string
);

// export const fetchImages = async (): Promise<string[] | null> => {
//   const { data, error } = await supabase.storage.from(BUCKET_NAME).list("");

//   if (error) {
//     console.error("Error fetching bucket:", error);
//     return null;
//   }

//   const urls: string[] = data.map((file) => {
//     return supabase.storage.from("arts-bucket").getPublicUrl(file.name).data
//       .publicUrl;
//   });  
//   return urls;
// };

export const fetchImages = async () => {
  const { data, error } = await supabase
  .from('Art')
  .select()

  if (error) {
    console.error("Error fetching image data:", error);
    return null;
  }


  console.log(data);
  

  // const urls: string[] = data.map((file) => {
  //   return supabase.storage.from("arts-bucket").getPublicUrl(file.name).data
  //     .publicUrl;
  // });  
  // return urls;
};