import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Averis collects, uses, and protects information provided through our website, communication channels, and marketing activities.",
  alternates: {
    canonical: "/privacy-policy"
  },
  openGraph: {
    title: "Privacy Policy | Averis",
    description:
      "Learn how Averis collects, uses, and protects information provided through our website, communication channels, and marketing activities.",
    url: "/privacy-policy",
    siteName: "Averis",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Averis",
    description:
      "Learn how Averis collects, uses, and protects information provided through our website, communication channels, and marketing activities."
  }
};

const privacySections = [
  {
    title: "Information We Collect",
    lead: "We may collect information through:",
    columns: [
      {
        items: [
          "direct communication",
          "contact forms",
          "website interactions",
          "marketing and promotional activities",
          "partner and advertising collaborations",
          "publicly available sources"
        ]
      },
      {
        title: "This information may include:",
        items: ["name", "email address", "communication preferences", "message content", "interaction data"]
      }
    ]
  },
  {
    title: "How We Use Information",
    lead: "We may use collected information to:",
    columns: [
      {
        items: [
          "respond to inquiries",
          "provide information about our services",
          "maintain communication with users and partners",
          "improve website functionality and user experience",
          "analyze engagement and website performance",
          "share relevant updates, offers, and promotional communications"
        ]
      }
    ]
  },
  {
    title: "Communications",
    paragraphs: [
      "Recipients may opt out of promotional or marketing-related communications at any time by following unsubscribe instructions or contacting us directly."
    ]
  },
  {
    title: "Cookies & Analytics",
    paragraphs: [
      "Our website may use cookies and analytics tools to improve website functionality and better understand visitor interactions."
    ]
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "We may use third-party providers for website hosting, analytics, communication systems, and related business services."
    ]
  },
  {
    title: "Data Protection",
    paragraphs: [
      "We process personal information in accordance with applicable data protection laws, including GDPR where applicable."
    ]
  },
  {
    title: "Your Rights",
    paragraphs: ["You may request access, correction, or deletion of your personal information by contacting us directly."]
  },
  {
    title: "Contact",
    contact: true
  }
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      variant="privacy"
      intro={[
        "At Averis, we respect your privacy and are committed to protecting your personal information.",
        "This Privacy Policy explains how we collect, use, and protect information provided through our website, communication channels, and marketing activities."
      ]}
      sections={privacySections}
    />
  );
}
