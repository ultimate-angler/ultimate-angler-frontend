import DownloadButton from '../components/DownloadButton'
import React from 'react'

export default function PrivacyPolicy() {
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
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F4377]">Privacy Policy</h1>
            <p className="mt-2 text-sm text-gray-600">Last updated: 11.30.2025.</p>

            <p className="mt-6 text-gray-800">
              Thank you for using our app (“the App”). We respect your privacy and want to be
              transparent about how data is handled.
            </p>
            <p className="mt-4 text-gray-800">
              We collect only the minimal information necessary for the App to function and we do
              not process, sell, or use data for advertising or analytics.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">1. Information We Collect</h2>
            <p className="mt-2 text-gray-800">
              We collect only the data required to enable core app functionality. This may include:
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#0F4377]">1.1 Account Information</h3>
            <ul className="mt-2 list-disc pl-6 text-gray-800">
              <li>Email/username/first name/last name</li>
              <li>Password</li>
            </ul>
            <p className="mt-2 text-gray-800">
              This information is used only to allow you to access your account.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#0F4377]">1.2 User-Generated Content</h3>
            <p className="mt-2 text-gray-800">
              If you create posts, comments, or upload images inside the App, we may store this
              content solely to display it within the App.
            </p>
            <p className="mt-2 text-gray-800">
              We do not analyze or process this content for advertising, profiling, or tracking.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-[#0F4377]">
              1.3 Device &amp; Technical Information (Strictly Functional)
            </h3>
            <p className="mt-2 text-gray-800">We may store:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-800">
              <li>Device push token (for sending notifications)</li>
              <li>Basic device information for security and app stability</li>
            </ul>
            <p className="mt-2 text-gray-800">
              This is collected only to deliver app features such as notifications.
            </p>
            <p className="mt-2 text-gray-800">
              We do not track your usage, behavior, or activity for analytics.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">2. Information We Do Not Collect</h2>
            <p className="mt-2 text-gray-800">We do not collect:</p>
            <ul className="mt-2 list-disc pl-6 text-gray-800">
              <li>Location data</li>
              <li>Contacts</li>
              <li>Phone number</li>
              <li>Advertising identifiers</li>
              <li>IP address for tracking</li>
              <li>Cookies or tracking technologies</li>
              <li>Third-party analytics</li>
            </ul>
            <p className="mt-2 text-gray-800">We do not use ads or external data trackers.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">3. How We Use the Information</h2>
            <p className="mt-2 text-gray-800">
              We use collected data exclusively to provide the core functionality of the App, such as:
            </p>
            <ul className="mt-2 list-disc pl-6 text-gray-800">
              <li>Allowing you to log in</li>
              <li>Displaying your posts and profile</li>
              <li>Enabling social features (likes, comments, etc.)</li>
              <li>Delivering push notifications</li>
              <li>Keeping your account secure</li>
            </ul>
            <p className="mt-2 text-gray-800">We do not process your data for marketing or any type of analysis.</p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">4. Data Sharing</h2>
            <p className="mt-2 text-gray-800">
              We do not share, sell, or rent your data to any third parties. Your data is used only
              inside the App and only for essential functionality.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">5. Third-Party Services</h2>
            <ul className="mt-2 list-disc pl-6 text-gray-800">
              <li>The App does not use:</li>
              <li>Third-party analytics</li>
              <li>Advertisement SDKs</li>
              <li>External tracking tools</li>
              <li>Social login providers</li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">6. Children’s Privacy</h2>
            <p className="mt-2 text-gray-800">
              We do not knowingly collect personal data from children under 13. If a child creates an
              account, their information is used only for the immediate functionality of the App and
              is not shared or processed.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">7. Data Security</h2>
            <p className="mt-2 text-gray-800">
              We use standard security practices to protect user data, including encryption, secure
              storage, and modern authentication mechanisms.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">8. Changes to This Policy</h2>
            <p className="mt-2 text-gray-800">
              If we update this Privacy Policy, we will update the “Last updated” date and clearly
              describe the changes.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-[#0F4377]">9. Contact Us</h2>
            <p className="mt-2 text-gray-800">
              If you have any questions or concerns regarding this Privacy Policy, please contact us:
            </p>
            <p className="mt-2 text-gray-800">Email: reelfloridianfishing@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}


