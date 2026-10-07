import { Section } from "@/components/ui/Section";
import { TestDriveForm } from "@/components/forms/TestDriveForm";

export const metadata = {
  title: "Test Drive",
  description: "Request a test drive. Client validation, sanitization, and rate-limited server route.",
};

export default function TestDrivePage({ searchParams }) {
  const defaultVehicle = typeof searchParams?.vehicle === "string" ? searchParams.vehicle : "";
  return (
    <Section eyebrow="Drive" title="Request a test drive" className="pt-32">
      <p className="mb-10 max-w-xl text-sm text-metallic">
        Client-side validation and sanitization. The server route is structured for rate limiting and stores no secrets.
      </p>
      <TestDriveForm defaultVehicle={defaultVehicle} />
    </Section>
  );
}
