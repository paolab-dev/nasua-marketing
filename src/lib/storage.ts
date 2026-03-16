import { supabase } from "./supabase";
import { convertToWebP } from "./convert-to-webp";

const BUCKET = "blog-images";

/**
 * Converts an image to WebP, uploads to Supabase Storage,
 * and returns the public URL.
 */
export async function uploadImage(file: File, folder = "posts"): Promise<string> {
  const webpFile = await convertToWebP(file);

  const timestamp = Date.now();
  const safeName = webpFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const path = `${folder}/${timestamp}-${safeName}`;

  const { error } = await supabase.storage.from(BUCKET).upload(path, webpFile, {
    contentType: "image/webp",
    upsert: false,
  });

  if (error) throw new Error(`Error al subir imagen: ${error.message}`);

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
}
