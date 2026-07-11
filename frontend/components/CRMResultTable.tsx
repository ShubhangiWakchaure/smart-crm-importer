import { CRMRecord } from "@/types/crm";

interface CRMResultTableProps {
  records: CRMRecord[];
}

export default function CRMResultTable({
  records,
}: CRMResultTableProps) {
  if (!records.length) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "GOOD_LEAD_FOLLOW_UP":
        return "bg-blue-100 text-blue-700";

      case "DID_NOT_CONNECT":
        return "bg-yellow-100 text-yellow-700";

      case "BAD_LEAD":
        return "bg-red-100 text-red-700";

      case "SALE_DONE":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="mt-8 rounded-xl bg-white shadow-lg border">

      <div className="border-b px-6 py-4">

        <h2 className="text-2xl font-bold text-slate-800">
          AI Extracted CRM Records
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          CRM records generated using Gemini AI
        </p>

      </div>

      <div className="max-h-[500px] overflow-auto">

        <table className="min-w-full border-collapse">

          <thead className="sticky top-0 bg-slate-800 text-white">

            <tr>

              <th className="px-5 py-4 text-left">Name</th>

              <th className="px-5 py-4 text-left">Email</th>

              <th className="px-5 py-4 text-left">Mobile</th>

              <th className="px-5 py-4 text-left">Company</th>

              <th className="px-5 py-4 text-left">City</th>

              <th className="px-5 py-4 text-left">Country</th>

              <th className="px-5 py-4 text-left">CRM Status</th>

            </tr>

          </thead>

          <tbody>

            {records.map((record, index) => (

              <tr
                key={index}
                className="border-b hover:bg-slate-50 transition-colors"
              >

                <td className="px-5 py-4 font-medium text-slate-800 whitespace-nowrap">
                  {record.name}
                </td>

                <td className="px-5 py-4 text-slate-700 whitespace-nowrap">
                  {record.email}
                </td>

                <td className="px-5 py-4 text-slate-700 whitespace-nowrap">
                  {record.country_code} {record.mobile_without_country_code}
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {record.company}
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {record.city}
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {record.country}
                </td>

                <td className="px-5 py-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                      record.crm_status
                    )}`}
                  >
                    {record.crm_status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}