import { ImportResponse } from "@/types/crm";

interface ImportSummaryProps {
  result: ImportResponse;
}

export default function ImportSummary({
  result,
}: ImportSummaryProps) {
  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold text-slate-800">
        Import Summary
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-lg border p-4">
          <p className="text-sm text-slate-500">
            Total Rows
          </p>

          <p className="mt-2 text-2xl font-bold">
            {result.totalRows}
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-slate-500">
            Imported
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {result.imported}
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-slate-500">
            Skipped
          </p>

          <p className="mt-2 text-2xl font-bold text-red-600">
            {result.skipped}
          </p>
        </div>

      </div>
    </div>
  );
}