/**
 * Converts an image File to WebP format using canvas.
 * Returns a new File with .webp extension.
 */
export async function convertToWebP(file: File, quality = 0.82): Promise<File> {
  // If already webp, return as-is
  if (file.type === "image/webp") return file;

  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        URL.revokeObjectURL(url);
        return reject(new Error("No se pudo obtener contexto del canvas"));
      }

      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(url);
          if (!blob) return reject(new Error("Error al convertir a WebP"));

          const baseName = file.name.replace(/\.[^.]+$/, "");
          const webpFile = new File([blob], `${baseName}.webp`, {
            type: "image/webp",
          });
          resolve(webpFile);
        },
        "image/webp",
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Error al cargar la imagen"));
    };

    img.src = url;
  });
}
