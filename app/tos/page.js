import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://authorless.pro
// - Name: ShipFast
// - Contact information: support@authorless.pro
// - Description: AUthorless posting forum that allows ideas to thrive
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://authorless.pro/privacy-policy
// - Governing Law: USA
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`
**Terms of Service**

Effective Date: November 9, 2023

**Welcome to Authorless!**

Authorless is an online posting forum that encourages open and anonymous discussions, providing a platform for ideas to thrive. By accessing or using Authorless, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.

**1. Description of Authorless**

Authorless is an online platform designed to foster open and anonymous discussions, allowing users to engage in creative and intellectual discourse.

**2. Non-Personal Data Collection**

We may collect non-personal data through the use of web cookies. For more details on our data collection, usage, and protection practices, please refer to our [Privacy Policy](https://authorless.pro/privacy-policy).

**3. Governing Law**

These Terms are governed by the laws of the United States of America.

**4. Updates to the Terms**

We may update these Terms periodically. Users will be informed of any updates via email. It is your responsibility to review the revised Terms and continue using Authorless only if you agree to the latest version.

**5. Ban Policy**

The owner of Authorless reserves the right to ban any user from the platform for any reason whatsoever, without refund. This action may be taken to maintain the integrity of the community and ensure a positive experience for all users.

**Contact Us**

If you have any questions or concerns about these Terms or Authorless, please don't hesitate to contact us at support@authorless.pro.

Thank you for using Authorless!

---

`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
