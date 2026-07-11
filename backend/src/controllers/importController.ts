import type { Request, Response } from "express";

import { parseCSV } from "../services/csvService.js";
import { mapCRMFields } from "../services/geminiService.js";

export const importCSV = async (
  req: Request,
  res: Response
) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No CSV uploaded",
      });
    }

    // For development, process only first 5 records
    const csvRecords = (await parseCSV(req.file.path)).slice(0, 5);

    console.log(`CSV Records Found: ${csvRecords.length}`);

    const batchSize = 5;

    let crmRecords: any[] = [];

    for (
      let i = 0;
      i < csvRecords.length;
      i += batchSize
    ) {

      const batch = csvRecords.slice(
        i,
        i + batchSize
      );

      console.log(
        `Processing batch ${i / batchSize + 1}`
      );

      const result = await mapCRMFields(batch);

      crmRecords.push(...result);

    }

    return res.status(200).json({

      success: true,

      totalRows: csvRecords.length,

      imported: crmRecords.length,

      skipped:
        csvRecords.length - crmRecords.length,

      records: crmRecords,

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "AI Import Failed",

    });

  }
};