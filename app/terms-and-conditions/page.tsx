import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the rules, limitations, and conditions related to the use of the Averis website and services.",
  alternates: {
    canonical: "/terms-and-conditions"
  },
  openGraph: {
    title: "Terms & Conditions | Averis",
    description:
      "Review the rules, limitations, and conditions related to the use of the Averis website and services.",
    url: "/terms-and-conditions",
    siteName: "Averis",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Averis",
    description:
      "Review the rules, limitations, and conditions related to the use of the Averis website and services."
  }
};

const termsSections = [
  {
    title: "Website Purpose",
    paragraphs: [
      "This website provides information about Averis and its marketing, customer engagement, communication, and promotional services."
    ]
  },
  {
    title: "Acceptable Use",
    paragraphs: [
      "Users agree not to misuse the website, attempt unauthorized access, interfere with website functionality, or engage in activities that may violate applicable laws or regulations."
    ]
  },
  {
    title: "Intellectual Property",
    paragraphs: ["All website content, branding, graphics, and materials are owned by Averis unless otherwise stated."]
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "This website may contain links or integrations with third-party services. We are not responsible for external content, services, or policies."
    ]
  },
  {
    title: "Limitation of Liability",
    paragraphs: ["Averis shall not be liable for indirect, incidental, or consequential damages related to website use."]
  },
  {
    title: "Communications",
    paragraphs: [
      "By interacting with this website or contacting Averis, users acknowledge that they may receive relevant service-related or promotional communications in accordance with our Privacy Policy."
    ]
  },
  {
    title: "Privacy",
    paragraphs: ["Use of this website is also governed by our Privacy Policy."]
  },
  {
    title: "Changes",
    paragraphs: ["We may update these Terms & Conditions from time to time without prior notice."]
  },
  {
    title: "Governing Law",
    paragraphs: ["These Terms shall be governed in accordance with the laws of England and Wales."]
  },
  {
    title: "Contact",
    contact: true
  }
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      variant="terms"
      intro={[
        "By accessing this website, you agree to these Terms & Conditions.",
        "These Terms explain the rules, limitations, and conditions related to the use of the Averis website and services."
      ]}
      sections={termsSections}
    />
  );
}
