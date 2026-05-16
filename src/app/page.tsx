import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { FeatureCard } from "@/components/FeatureCard";
import { metrics, processes } from "@/data/mockData";

const features = [
  {
    title: "Responsive Dashboard",
    description:
      "Modern interface designed to help users monitor processes, document status, and operational priorities.",
  },
  {
    title: "Document Upload Workflow",
    description:
      "User-friendly flow for organizing client documents and preparing them for analysis.",
  },
  {
    title: "AI-Assisted Analysis",
    description:
      "Portfolio-safe concept of automation-assisted review. Proprietary validation logic remains private.",
  },
  {
    title: "Process Management",
    description:
      "Structured client and case tracking with visual status indicators and clean information architecture.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-8 md:px-8">
      <Header />

      <section className="mt-8 grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="mt-10">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Product Features
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Built for clarity, speed, and workflow organization
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            This showcase demonstrates the product interface and technical
            positioning without exposing private business rules, real databases,
            OCR validation logic, or internal automation.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Process Preview
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Mock process management table
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Process Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((process) => (
                <tr key={process.client} className="border-t border-slate-200">
                  <td className="px-4 py-4 font-medium text-slate-950">
                    {process.client}
                  </td>
                  <td className="px-4 py-4 text-slate-600">{process.type}</td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {process.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-600">{process.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
        <h2 className="text-2xl font-bold">Important portfolio note</h2>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
          This public project is a showcase version created for portfolio and
          recruitment purposes. Sensitive business logic, OCR workflows,
          proprietary legal-tech rules, real user data, API keys, databases, and
          production infrastructure are intentionally omitted.
        </p>
      </section>
    </main>
  );
}
