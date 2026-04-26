# Data Deletion Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a data deletion request page to comply with Google Play policy, allowing users to request either data export or account deletion.

**Architecture:** New page at `/app/data-deletion/page.tsx` with form submission to API endpoint `/api/data-deletion-request`. Links added to footer and navbar.

**Tech Stack:** Next.js, React, Tailwind CSS

---

### Task 1: Create Data Deletion Page

**Files:**
- Create: `app/data-deletion/page.tsx`

- [ ] **Step 1: Create the data deletion page**

```tsx
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
```

- [ ] **Step 2: Test page renders**

Run: `npm run dev` and navigate to `/data-deletion`
Expected: Page loads with form

- [ ] **Step 3: Commit**

```bash
git add app/data-deletion/page.tsx
git commit -m "feat: add data deletion request page"
```

---

### Task 2: Create API Endpoint

**Files:**
- Create: `app/api/data-deletion-request/route.ts`

- [ ] **Step 1: Create the API route**

```ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { requestType, email, reason } = body;

    if (!email || !requestType) {
      return NextResponse.json(
        { error: "Email and request type are required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const requestTypeLabel = requestType === "export" ? "Data Export" : "Account Deletion";

    const emailContent = `
New Data ${requestTypeLabel} Request

Timestamp: ${timestamp}
Email: ${email}
Request Type: ${requestTypeLabel}
Reason: ${reason || "Not provided"}
    `.trim();

    console.log("Data Deletion Request:", emailContent);

    return NextResponse.json(
      { message: "Request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Test API endpoint**

Run: `curl -X POST http://localhost:3000/api/data-deletion-request -H "Content-Type: application/json" -d '{"email":"test@example.com","requestType":"export","reason":"testing"}'`
Expected: Returns success message

- [ ] **Step 3: Commit**

```bash
git add app/api/data-deletion-request/route.ts
git commit -m "feat: add data deletion request API endpoint"
```

---

### Task 3: Add Footer Link

**Files:**
- Modify: `components/footer.tsx`

- [ ] **Step 1: Add Data Deletion link to footer**

Add after the Privacy link (around line 29):

```tsx
<a
  href="/data-deletion"
  className="text-sm text-[var(--text-secondary)] hover:text-[var(--color-primary)]"
>
  Data Deletion
</a>
```

- [ ] **Step 2: Commit**

```bash
git add components/footer.tsx
git commit -m "feat: add data deletion link to footer"
```

---

### Task 4: Add Navbar Link

**Files:**
- Modify: `components/navbar.tsx`

- [ ] **Step 1: Add Data Deletion link to navbar**

Add after the Twitter link (around line 20):

```tsx
<a
  href="/data-deletion"
  className="text-[var(--text-primary)] hover:text-[var(--color-primary)]"
>
  Data
</a>
```

- [ ] **Step 2: Commit**

```bash
git add components/navbar.tsx
git commit -m "feat: add data deletion link to navbar"
```

---

### Task 5: Test Complete Flow

- [ ] **Step 1: Verify all links work**

Navigate to homepage, click Data Deletion link in footer and navbar
Expected: Both navigate to `/data-deletion`

- [ ] **Step 2: Submit form and verify**

Fill out form with test email and submit
Expected: Success message displayed

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete data deletion page implementation"
```