interface FileInfoProps {
  file: File | null;
  rowCount: number;
  columnCount: number;
}

export default function FileInfo({
  file,
  rowCount,
  columnCount,
}: FileInfoProps) {
  if (!file) return null;

  const fileSize =
    file.size < 1024 * 1024
      ? `${(file.size / 1024).toFixed(2)} KB`
      : `${(file.size / (1024 * 1024)).toFixed(2)} MB`;

  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold text-slate-800">
        Uploaded File Details
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl bg-blue-50 p-4">
          <p className="text-sm text-slate-500">File Name</p>
          <p className="mt-2 truncate font-semibold text-slate-800">
            {file.name}
          </p>
        </div>

        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-sm text-slate-500">Rows</p>
          <p className="mt-2 text-2xl font-bold text-green-700">
            {rowCount}
          </p>
        </div>

        <div className="rounded-xl bg-yellow-50 p-4">
          <p className="text-sm text-slate-500">Columns</p>
          <p className="mt-2 text-2xl font-bold text-yellow-700">
            {columnCount}
          </p>
        </div>

        <div className="rounded-xl bg-purple-50 p-4">
          <p className="text-sm text-slate-500">File Size</p>
          <p className="mt-2 text-2xl font-bold text-purple-700">
            {fileSize}
          </p>
        </div>

      </div>

    </div>
  );
}