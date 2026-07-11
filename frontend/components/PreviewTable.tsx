"use client";

import { useState } from "react";
import { CSVRow } from "@/types/csv";

interface PreviewTableProps {
  data: CSVRow[];
}

export default function PreviewTable({ data }: PreviewTableProps) {
  const [visibleRows, setVisibleRows] = useState(10);

  if (data.length === 0) return null;

  const headers = Object.keys(data[0]);

  const displayedRows = data.slice(0, visibleRows);

  const handleLoadMore = () => {
    setVisibleRows((prev) => Math.min(prev + 10, data.length));
  };

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800">
          CSV Preview
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {data.length} Records
        </span>
      </div>

      <div className="max-h-[500px] overflow-auto rounded-xl border">

        <table className="min-w-full border-collapse">

          <thead className="sticky top-0 bg-slate-100">

            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border-b px-4 py-3 text-left text-sm font-semibold text-slate-700"
                >
                  {header}
                </th>
              ))}
            </tr>

          </thead>

          <tbody>

            {displayedRows.map((row, index) => (

              <tr
                key={index}
                className="odd:bg-white even:bg-slate-50 hover:bg-blue-50"
              >
                {headers.map((header) => (
                  <td
                    key={header}
                    className="border-b px-4 py-3 text-sm text-slate-700"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="mt-5 flex items-center justify-between">

        <p className="text-sm text-slate-500">
          Showing {displayedRows.length} of {data.length} records
        </p>

        {visibleRows < data.length && (
          <button
            onClick={handleLoadMore}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Load More
          </button>
        )}

      </div>

    </div>
  );
}