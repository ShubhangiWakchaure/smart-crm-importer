import { ImportResponse } from "@/types/crm";

export async function uploadCSV(
  file: File
): Promise<ImportResponse> {

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    "http://localhost:5000/api/import",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}