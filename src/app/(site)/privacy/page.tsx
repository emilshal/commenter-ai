import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";

export default function PrivacyPage() {
  const subheading = (text: string) => (
    <div className="mt-5 text-sm font-semibold text-white/85">{text}</div>
  );

  const paragraph = (text: string) => <p className="mt-3">{text}</p>;

  const sections: LegalSection[] = [
    {
      title: "Introduction",
      body: (
        <>
          <p>
            This Privacy Policy describes how we collect, use, disclose, and
            protect information when you access or use our Services. Please read
            it carefully.
          </p>
          {paragraph(
            "If you have questions about this policy, contact us using the details in the “Contact” section.",
          )}
          {paragraph(
            "For the avoidance of doubt, this page is currently a layout-first implementation based on a screenshot. Replace all placeholder text with the client’s final policy.",
          )}
        </>
      ),
    },
    {
      title: "Definitions",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-white/85">“Service”</span> means
            our website and related product experience.
          </li>
          <li>
            <span className="font-semibold text-white/85">“Personal Data”</span>{" "}
            means information that identifies or can identify you.
          </li>
          <li>
            <span className="font-semibold text-white/85">“Processing”</span>{" "}
            means collecting, storing, using, disclosing, or deleting data.
          </li>
          <li>
            <span className="font-semibold text-white/85">“Controller”</span>{" "}
            means the entity that determines the purposes and means of
            Processing.
          </li>
          <li>
            <span className="font-semibold text-white/85">“Processor”</span>{" "}
            means an entity that processes Personal Data on behalf of the
            Controller.
          </li>
        </ul>
      ),
    },
    {
      title: "Information collected and used",
      body: (
        <>
          <p>We collect information in the following ways:</p>
          {subheading("Information you provide")}
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Name, email address, and account credentials</li>
            <li>Billing and transaction details</li>
            <li>Support requests and communications</li>
          </ul>
          {subheading("Information collected automatically")}
          {paragraph(
            "When you use the Service, we may automatically collect technical and usage data, such as IP address, device identifiers, browser type, pages viewed, and timestamps.",
          )}
          {subheading("Information from third parties")}
          {paragraph(
            "We may receive information from third-party services you connect (for example, authentication providers), subject to your settings and their policies.",
          )}
          {subheading("Log files")}
          {paragraph(
            "Our servers may automatically record information (“Log Data”) created by your use of the Service, including IP address, device identifiers, and pages/actions taken.",
          )}
        </>
      ),
    },
    {
      title: "Types of data collected",
      body: (
        <>
          <ul className="list-disc space-y-2 pl-5">
            <li>Account information</li>
            <li>Usage data</li>
            <li>Cookies and similar technologies</li>
            <li>Marketing preferences</li>
            <li>Payment and subscription metadata</li>
          </ul>
          {paragraph(
            "We do not intentionally collect sensitive categories of personal information unless explicitly required to provide the Service and permitted by applicable law.",
          )}
        </>
      ),
    },
    {
      title: "Use of data",
      body: (
        <>
          <p>We use information to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Provide and maintain the Service</li>
            <li>Authenticate users and prevent fraud</li>
            <li>Process payments and manage subscriptions</li>
            <li>Improve performance, reliability, and user experience</li>
            <li>Send service messages and (where permitted) marketing</li>
          </ul>
          {subheading("Legal bases (where applicable)")}
          {paragraph(
            "Where required, we process Personal Data based on contract necessity, legitimate interests, consent, and/or compliance with legal obligations.",
          )}
          {subheading("Legitimate interests")}
          {paragraph(
            "Examples include maintaining security, preventing abuse, and improving the Service. We balance these interests against your rights and expectations.",
          )}
        </>
      ),
    },
    {
      title: "Retention of data",
      body: (
        <>
          <p>
            We retain Personal Data only for as long as necessary to provide the
            Service and for legitimate and essential business purposes, such as
            maintaining performance, complying with legal obligations, resolving
            disputes, and enforcing agreements.
          </p>
          {paragraph(
            "Retention periods depend on the type of data, why we need it, and applicable legal requirements.",
          )}
        </>
      ),
    },
    {
      title: "Cookies and tracking technologies",
      body: (
        <>
          <p>
            We use cookies and similar technologies to operate and improve the
            Service. Cookies are small files stored on your device.
          </p>
          {subheading("Types of cookies")}
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold text-white/85">Necessary:</span>{" "}
              required for core functionality and security.
            </li>
            <li>
              <span className="font-semibold text-white/85">Preferences:</span>{" "}
              remember choices and settings.
            </li>
            <li>
              <span className="font-semibold text-white/85">Analytics:</span>{" "}
              help us understand usage and improve the product.
            </li>
          </ul>
          {subheading("Your choices")}
          {paragraph(
            "Most browsers let you remove or reject cookies. If you block cookies, some features may not function properly.",
          )}
        </>
      ),
    },
    {
      title: "Transfer of data",
      body: (
        <>
          <p>
            Your information may be transferred to—and maintained on—systems
            located outside your jurisdiction where data protection laws may
            differ.
          </p>
          {paragraph(
            "When we transfer data internationally, we use appropriate safeguards as required by law (such as contractual protections).",
          )}
        </>
      ),
    },
    {
      title: "Disclosure of data",
      body: (
        <>
          <p>We may disclose information:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To vendors providing services on our behalf (processors)</li>
            <li>To comply with legal obligations or lawful requests</li>
            <li>To protect rights, safety, and security of users and the Service</li>
            <li>In connection with a merger, acquisition, or asset sale</li>
          </ul>
          {subheading("Business transfers")}
          {paragraph(
            "If we’re involved in a merger, acquisition, financing, or sale of assets, information may be transferred as part of that transaction, subject to appropriate protections.",
          )}
        </>
      ),
    },
    {
      title: "Security of data",
      body: (
        <>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards designed to protect information.
          </p>
          {paragraph(
            "However, no method of transmission or storage is completely secure. You are responsible for maintaining the confidentiality of your credentials and using a strong password.",
          )}
        </>
      ),
    },
    {
      title: "Your rights",
      body: (
        <>
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, or export your data, and to object to or restrict certain
            processing.
          </p>
          <p className="mt-3">
            Contact us to exercise these rights. We may need to verify your
            identity before responding.
          </p>
          {subheading("Marketing preferences")}
          {paragraph(
            "You can opt out of marketing communications at any time by using the unsubscribe link or contacting us.",
          )}
          {subheading("Access, correction, deletion")}
          {paragraph(
            "You may request access to, correction of, or deletion of your Personal Data, subject to applicable law and certain exceptions.",
          )}
        </>
      ),
    },
    {
      title: "Service providers",
      body: (
        <p>
          We use third-party companies to support the Service (e.g., hosting,
          analytics, payment processors). They are authorized to process data
          only as needed to provide their services to us.
        </p>
      ),
    },
    {
      title: "Links to other sites",
      body: (
        <p>
          The Service may contain links to other websites. We are not
          responsible for their content or privacy practices; review their
          policies separately.
        </p>
      ),
    },
    {
      title: "Do Not Track signals",
      body: (
        <p>
          Some browsers offer a “Do Not Track” feature. There is no uniform
          standard for responding to DNT signals, so we do not currently respond
          to them.
        </p>
      ),
    },
    {
      title: "Children’s privacy",
      body: (
        <p>
          The Service is not directed to children under the age required by
          applicable law, and we do not knowingly collect Personal Data from
          children. If you believe a child has provided data to us, contact us
          and we will take appropriate steps.
        </p>
      ),
    },
    {
      title: "GDPR (EEA/UK) rights",
      body: (
        <>
          <p>
            If you are located in the European Economic Area or the United
            Kingdom, you may have rights under the GDPR, including:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>The right to access your Personal Data</li>
            <li>The right to rectify inaccurate data</li>
            <li>The right to erase data in certain circumstances</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          {paragraph(
            "You also have the right to lodge a complaint with your local supervisory authority.",
          )}
        </>
      ),
    },
    {
      title: "CCPA (California) notice",
      body: (
        <>
          <p>
            If you are a California resident, you may have rights under the
            California Consumer Privacy Act (CCPA/CPRA), including the right to
            know, delete, and correct certain Personal Information, and to opt
            out of certain sharing.
          </p>
          {subheading("Categories of personal information")}
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Identifiers (e.g., name, email, IP address)</li>
            <li>Internet or other electronic network activity</li>
            <li>Commercial information (subscription and billing metadata)</li>
          </ul>
          {subheading("Sale or sharing")}
          {paragraph(
            "We do not sell personal information as defined by the CCPA. Replace this statement if the client’s policy differs.",
          )}
        </>
      ),
    },
    {
      title: "Changes to this policy",
      body: (
        <p>
          We may update this Privacy Policy from time to time. We will post the
          updated version and revise the “Last updated” date.
        </p>
      ),
    },
    {
      title: "Contact",
      body: (
        <>
          <p>
            Questions about privacy? Contact us at{" "}
            <span className="font-semibold text-white/85">
              privacy@example.com
            </span>
            .
          </p>
          {paragraph(
            "Replace the email address and company details with the client’s real contact information.",
          )}
        </>
      ),
    },
  ];

  return (
    <LegalPage
      title="Privacy Policy"
      updatedAt="February 4, 2026"
      variant="plain"
      showToc={false}
      sections={sections}
    />
  );
}

export const metadata: Metadata = {
  title: "Privacy Policy",
};
