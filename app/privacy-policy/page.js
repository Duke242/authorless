import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`**Authorless Terms of Service**

*Effective Date: November 8, 2023*

These Terms of Service ("Terms") govern your use of the Authorless website located at https://authorless.pro (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Website.

**1. Description of Authorless**

Authorless is a social forum that allows users to post content without revealing their authorship. The Website provides a platform for users to interact and share content anonymously.

**2. User Data Collection**

Authorless collects certain user data to provide its services, including your name, email address, and payment information as needed. This data is collected in accordance with our Privacy Policy, which can be found at https://authorless.pro/privacy-policy.

**3. Non-Personal Data Collection**

Authorless may use web cookies to collect non-personal data, such as browsing and usage information, to improve the Website's functionality and user experience.

**4. Governing Law**

These Terms are governed by and construed in accordance with the laws of the United States of America.

**5. Updates to the Terms**

Authorless may update these Terms from time to time. Users will be notified of any changes via email or through a notice on the Website. It is your responsibility to review the updated Terms, and continued use of the Website after any changes indicates your acceptance of the updated Terms.

If you have any questions or concerns regarding these Terms, please contact us at support@authorless.pro.

By using the Authorless Website, you agree to these Terms and our Privacy Policy. Please read both documents carefully.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
