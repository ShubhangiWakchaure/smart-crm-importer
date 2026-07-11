import Papa from "papaparse";

export const parseCSV = (
  file: File
): Promise<Record<string, string>[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        resolve(results.data as Record<string, string>[]);
      },

      error: (error) => {
        reject(error);
      },
    });
  });
};