import type { Request, Response } from "express";
import fs from "fs";

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

    // Get uploaded file
    const file = req.file;

    // Parse CSV
    const csvRecords = await parseCSV(file.path);

    console.log(`CSV Records Found: ${csvRecords.length}`);

    
    const batchSize = 50;

    let crmRecords: any[] = [];

    for (
      let i = 0;
      i < csvRecords.length;
      i += batchSize
    ) {

      const batch = csvRecords.slice(i, i + batchSize);

      console.log(
        `Processing batch ${i / batchSize + 1} of ${Math.ceil(csvRecords.length / batchSize)}`
      );

      const result = await mapCRMFields(batch);

      crmRecords.push(...result);

      // Wait 1.5 seconds before next Gemini request
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    // Delete uploaded CSV after processing
    try {
      fs.unlinkSync(file.path);
      console.log("Uploaded CSV deleted.");
    } catch (err) {
      console.error("Failed to delete uploaded file:", err);
    }

    return res.status(200).json({

      success: true,

      totalRows: csvRecords.length,

      imported: crmRecords.length,

      skipped: csvRecords.length - crmRecords.length,

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