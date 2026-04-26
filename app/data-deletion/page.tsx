import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion - Jiya",
  description: "Request to export or delete your data from Jiya.",
};

export default function DataDeletionPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Data Deletion</h1>
      <p className="text-[var(--text-secondary)] mb-8">
        Under Google Play policy, you can request to export or delete your data.
      </p>

      <form
        action="/api/data-deletion-request"
        method="POST"
        className="space-y-6"
      >
        <div className="space-y-4">
          <label className="block text-sm font-medium">
            What would you like to do?
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-4 border border-[var(--border)] rounded-lg cursor-pointer hover:bg-[var(--bg-card)]">
              <input
                type="radio"
                name="requestType"
                value="export"
                required
                className="w-4 h-4"
              />
              <div>
                <p className="font-medium">Export my data</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Download a copy of my profile data (name, email, phone)
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 border border-[var(--border)] rounded-lg cursor-pointer hover:bg-[var(--bg-card)]">
              <input
                type="radio"
                name="requestType"
                value="delete"
                required
                className="w-4 h-4"
              />
              <div>
                <p className="font-medium">Delete my account</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Permanently delete my account and all associated data
                </p>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
          >
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your registered email"
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium mb-2"
          >
            Reason (optional)
          </label>
          <textarea
            id="reason"
            name="reason"
            rows={3}
            placeholder="Tell us why you're requesting this..."
            className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Submit Request
        </button>
      </form>
    </main>
  );
}