"use client";

import { useRef, useState } from "react";
import { parseCSV } from "@/services/csvParser";

interface UploadBoxProps {
  onCSVParsed: (data: Record<string, string>[]) => void;
  onFileSelected: (file: File) => void;
}
export default function UploadBox({onCSVParsed,onFileSelected}: UploadBoxProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = async (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files?.[0];

  if (!file) return;

  setSelectedFile(file);
 onFileSelected(file);


  try {
    const parsedData = await parseCSV(file);
    onCSVParsed(parsedData);
  } catch (error) {
    console.error("Failed to parse CSV", error);
  }
};

  return (
    <div className="mt-12 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-10 shadow-sm">

      <div className="text-center">

        <div className="text-5xl">📄</div>

        <h2 className="mt-4 text-2xl font-semibold text-slate-800">
          Upload Your CSV File
        </h2>

        <p className="mt-2 text-gray-500">
          Drag & Drop your CSV here or click below.
        </p>

        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          onClick={handleChooseFile}
          className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Choose CSV
        </button>

       

      </div>

    </div>
  );
}