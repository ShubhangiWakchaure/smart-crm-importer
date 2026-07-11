interface ConfirmImportProps {
  fileName: string;
  totalRows: number;
  totalColumns: number;
  onConfirm: () => void;
  loading: boolean;
}

export default function ConfirmImport({
  fileName,
  totalRows,
  totalColumns,
  onConfirm,
  loading,
}: ConfirmImportProps) {
  return (
    <div className="mt-8 rounded-2xl bg-white border border-slate-200 shadow-md p-8">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Ready to Import
        </h2>

        <p className="mt-2 text-slate-500">
          Your CSV has been parsed successfully. Review the information below
          and click <span className="font-semibold">Confirm Import</span> to
          start AI processing.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-4">

        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-medium text-blue-600">
            📄 File Name
          </p>

          <p className="mt-3 break-words text-sm font-semibold text-slate-800">
            {fileName}
          </p>
        </div>

        <div className="rounded-xl border border-green-100 bg-green-50 p-5 text-center">
          <p className="text-sm font-medium text-green-600">
            📊 Total Rows
          </p>

          <p className="mt-3 text-3xl font-bold text-green-700">
            {totalRows}
          </p>
        </div>

        <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-5 text-center">
          <p className="text-sm font-medium text-yellow-700">
            📋 Columns
          </p>

          <p className="mt-3 text-3xl font-bold text-yellow-700">
            {totalColumns}
          </p>
        </div>

        <div className="rounded-xl border border-purple-100 bg-purple-50 p-5 text-center">
          <p className="text-sm font-medium text-purple-700">
            🤖 AI Status
          </p>

          <p className="mt-3 font-semibold text-purple-700">
            Ready
          </p>
        </div>

      </div>

      <div className="mt-10 flex justify-center">

        <button
          onClick={onConfirm}
          disabled={loading}
          className="rounded-xl bg-emerald-600 px-10 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700 disabled:bg-gray-400"
        >
          {loading ? "Importing..." : "Confirm Import"}
        </button>

      </div>

    </div>
  );
}