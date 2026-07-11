import { ImportResponse } from "@/types/crm";

export async function uploadCSV(
  file: File
): Promise<ImportResponse> {

  const formData = new FormData();

  formData.append("file", file);

 const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/import`,
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