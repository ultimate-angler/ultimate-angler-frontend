import DownloadButton from '../components/DownloadButton'
import React from 'react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#F3F4F8] to-[#FDFDFD]">
      <DownloadButton />
      <div className="px-6 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <a
              href="/"
              className="inline-block px-4 py-2 text-white bg-gradient-to-r from-[#0F4377] to-[#2883B3] rounded-xl"
            >
              Back to Home
            </a>
          </div>
          <div className="rounded-2xl bg-[#F3F4F8] shadow-md p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F4377]">Terms and Conditions</h1>
            <p className="mt-2 text-sm text-gray-600">Last updated: 11.30.2025.</p>

            <p className="mt-6 text-gray-800">
              Please read these Terms and Conditions ("Terms") carefully before using our app ("the App"). By using the App, you agree to be bound by these Terms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">1. Eligibility</h2>
            <p className="mt-2 text-gray-800">
              You must be at least 16 years old (or the minimum age required in your jurisdiction) to use the App.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">2. Accounts</h2>
            <p className="mt-2 text-gray-800">You are responsible for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
              <li>Maintaining the security of your account</li>
              <li>All activity that occurs under your account</li>
            </ul>
            <p className="mt-2 text-gray-800">We may suspend or terminate accounts that violate these Terms.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">3. User-Generated Content</h2>
            <p className="mt-2 text-gray-800">
              The App may allow users to upload, post, or share content such as text, images, or other media ("User Content").
            </p>
            <p className="mt-2 text-gray-800">
              You retain ownership of your User Content, but you grant us a limited license to host, display, and distribute it solely for operating and improving the App.
            </p>
            <p className="mt-2 text-gray-800">You are solely responsible for the content you post.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">4. Prohibited Content &amp; Conduct</h2>
            <p className="mt-2 text-gray-800">You may not upload, post, or share content that includes or promotes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
              <li>Harassment, threats, hate speech, or bullying</li>
              <li>Violence, abuse, or exploitation</li>
              <li>Sexual or pornographic material</li>
              <li>Content involving minors in any inappropriate way</li>
              <li>Spam, scams, or misleading information</li>
              <li>Illegal activities or content that violates applicable laws</li>
              <li>Content that infringes intellectual property or privacy rights</li>
            </ul>
            <p className="mt-2 text-gray-800">There is zero tolerance for abusive or objectionable content.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">5. Reporting &amp; Moderation</h2>
            <p className="mt-2 text-gray-800">Users may report content or users they believe violate these Terms.</p>
            <p className="mt-2 text-gray-800">We reserve the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
              <li>Review reported content</li>
              <li>Remove content without prior notice</li>
              <li>Restrict, suspend, or permanently ban users</li>
            </ul>
            <p className="mt-2 text-gray-800">We aim to act on valid reports within 24 hours.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">6. Blocking Users</h2>
            <p className="mt-2 text-gray-800">
              The App may provide tools that allow users to block other users. Blocking removes the blocked user's content from your view and may notify us for moderation review.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">7. Enforcement</h2>
            <p className="mt-2 text-gray-800">Violations of these Terms may result in:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-800">
              <li>Content removal</li>
              <li>Temporary suspension</li>
              <li>Permanent account termination</li>
            </ul>
            <p className="mt-2 text-gray-800">Serious or repeated violations may lead to immediate removal without warning.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">8. Intellectual Property</h2>
            <p className="mt-2 text-gray-800">
              The App, including its design, branding, and features, is owned by Tyler Baruch and protected by applicable intellectual property laws.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">9. Disclaimer &amp; Limitation of Liability</h2>
            <p className="mt-2 text-gray-800">The App is provided "as is" and "as available."</p>
            <p className="mt-2 text-gray-800">
              User Content is created and shared by users. While we take reasonable steps to moderate content and enforce these Terms, we are not responsible for the accuracy, legality, or conduct of User Content or user interactions.
            </p>
            <p className="mt-2 text-gray-800">
              To the maximum extent permitted by law, we disclaim liability for any damages arising from use of the App.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">10. Termination</h2>
            <p className="mt-2 text-gray-800">You may stop using the App at any time.</p>
            <p className="mt-2 text-gray-800">We may terminate or suspend access if you violate these Terms.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">11. Apple EULA</h2>
            <p className="mt-2 text-gray-800">
              These Terms are in addition to Apple's Standard End User License Agreement (EULA), which governs your use of the App where applicable.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">12. Changes to These Terms</h2>
            <p className="mt-2 text-gray-800">We may update these Terms from time to time.</p>
            <p className="mt-2 text-gray-800">
              If changes are material, users may be required to accept the updated Terms before continuing to use the App.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">13. Contact</h2>
            <p className="mt-2 text-gray-800">
              If you have questions or wish to report content, contact us at:{' '}
              <a className="underline text-[#0F4377] hover:text-[#2883B3]" href="mailto:reelfloridianfishing@gmail.com">
                reelfloridianfishing@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
