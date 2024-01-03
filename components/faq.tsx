import React from "react";

// TODO : MOVE PLAINTEXT TO CONSTANT.TS

const Faq = () => {
  return (
    <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
      <details
        className="group p-6 [&_summary::-webkit-details-marker]:hidden"
        open>
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">
            What does SeerIntelligence offer?
          </h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          We offer company-wide security scans and several projects via a SaaS
          system, you can ask for demos via book@SeerIntelligence.com
        </p>
      </details>

      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">
            Is SeerIntelligence a non-profit?
          </h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          The answer to that is a bit more complicated, we offer for-profit
          systems and services, but we do also have non-profit and opensource
          tools and media, for now nearly all of our income is spent on internal
          development and research.
        </p>
      </details>

      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">
            Can I pay using cryptocurrency?
          </h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Absolutely! We offer XMR and Bitcoin Lightning wallets for your
          privacy needs.
        </p>
      </details>

      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">Do you have KYC?</h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          Absolutely not! We do not ask for, or store any company information,
          you could be completely nameless, as long as you can prove that you
          own the domain that you're asking to be audited.
        </p>
      </details>
    </div>
  );
};

export default Faq;
