"use client";

import { useState } from "react";

import Header from "@/components/Header";
import UploadBox from "@/components/UploadBox";
import FileInfo from "@/components/FileInfo";
import PreviewTable from "@/components/PreviewTable";
import ConfirmImport from "@/components/ConfirmImport";
import ImportSummary from "@/components/ImportSummary";
import CRMResultTable from "@/components/CRMResultTable";
import { uploadCSV } from "@/services/api";

import { CSVRow } from "@/types/csv";
import { ImportResponse } from "@/types/crm";

export default function Home() {
  const [csvData, setCsvData] = useState<CSVRow[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [importResult, setImportResult] =
    useState<ImportResponse | null>(null);

  const handleImport = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);

      const result = await uploadCSV(selectedFile);

      console.log(result);

      setImportResult(result);

    } catch (error) {
      console.error(error);

      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <Header />

        <UploadBox
          onCSVParsed={setCsvData}
          onFileSelected={setSelectedFile}
        />

        <FileInfo
          file={selectedFile}
          rowCount={csvData.length}
          columnCount={
            csvData.length > 0
              ? Object.keys(csvData[0]).length
              : 0
          }
        />

        <PreviewTable data={csvData} />

        {selectedFile && csvData.length > 0 && (
          <ConfirmImport
            fileName={selectedFile.name}
            totalRows={csvData.length}
            totalColumns={Object.keys(csvData[0]).length}
            onConfirm={handleImport}
            loading={loading}
          />
        )}
            {importResult && (
      <ImportSummary
        result={importResult}
      />
    )}
        {importResult && (
      <CRMResultTable
        records={importResult.records}
      />
    )}

      </div>
    </main>
  );
}