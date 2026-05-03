export type PDFSEOPageConfig = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  shellTitle: string;
  shellDescription: string;
  h1: string;
  pageDescription: string;
  content: string[];
  defaultTarget?: string;
  steps: string[];
  worksFor: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const pdfSeoPages: Record<string, PDFSEOPageConfig> = {
  "compress-pdf-20kb": {
    slug: "compress-pdf-20kb",
    title: "Compress PDF to 20KB Online Free (Govt Forms)",
    description:
      "Compress PDF to 20KB online free for government forms, scanned documents, and small upload portals. Best for strict file size rules.",
    keywords: ["compress pdf 20kb", "pdf under 20kb", "compress pdf for govt form"],
    shellTitle: "Compress PDF to 20KB",
    shellDescription:
      "Reduce a scanned PDF near 20KB when a portal has a strict upload limit.",
    h1: "Compress PDF to 20KB Online Free",
    pageDescription:
      "Use this page when a portal demands an extremely small PDF. It is useful for lightweight scanned documents and strict upload rules often seen in online government form workflows.",
    content: [
      "Many SSC, Railway, and government portals set small PDF limits to keep uploads fast and consistent. The issue usually appears at the final step of a form: your scan looks correct, but the portal rejects it because the PDF is above the allowed KB limit.",
      "This tool focuses on scanned PDFs. A typical workflow is to scan one or two pages (ID proof, certificate, or form), then compress it close to the target and confirm that text is still readable. If your PDF contains many pages or high-resolution photos, the tool may only get close to 20KB; in that case, consider splitting the document or using a higher limit page first.",
      "Common issues include unreadable text after aggressive compression and file-size “sticking” above the limit. When that happens, try a slightly higher target such as 50KB and check the exact portal rule before attempting 20KB again.",
    ],
    defaultTarget: "20kb",
    steps: [
      "Upload the scanned or original PDF from your device.",
      "Choose the 20KB target and run compression in the browser.",
      "Preview the file status and download the reduced PDF instantly.",
    ],
    worksFor: ["Govt forms", "Small upload limits", "Scanned PDFs"],
    faqs: [
      {
        question: "How do I compress PDF to 20KB?",
        answer:
          "Upload the file, keep the 20KB preset selected, and run compression. The tool tries to reduce the file as much as possible while preserving readability.",
      },
      {
        question: "Is 20KB suitable for scanned PDFs?",
        answer:
          "It works best for short scanned PDFs and very small documents. Heavier multi-page scans may only get close to the target depending on original quality.",
      },
      {
        question: "Is this free for government form use?",
        answer:
          "Yes, the tool is free and built for form submission scenarios where applicants need a smaller PDF quickly.",
      },
    ],
  },
  "compress-pdf-50kb": {
    slug: "compress-pdf-50kb",
    title: "Compress PDF to 50KB Online Free for Forms",
    description:
      "Compress PDF to 50KB online free for government forms, exam registrations, and document uploads. Fast browser-based compression for scanned PDFs.",
    keywords: ["compress pdf 50kb", "pdf under 50kb", "compress scanned pdf"],
    shellTitle: "Compress PDF to 50KB",
    shellDescription:
      "Shrink a PDF near 50KB for government forms, applications, and registrations.",
    h1: "Compress PDF to 50KB Online Free",
    pageDescription:
      "This page is useful when you need a medium compression target that still keeps scans readable. It works well for scanned certificates, small application documents, and general portal uploads.",
    content: [
      "A 50KB target is a practical middle ground for many online forms. It reduces file size enough to meet strict upload requirements while keeping scanned text readable, which is important for certificates and documents submitted during recruitment or verification.",
      "If you are compressing a scanned PDF for SSC or Railway portals, start here when the upload limit is unclear or when 20KB makes the document too blurry. After compression, zoom into the preview on your device to confirm names, dates, and stamp text remain legible.",
      "If the PDF is still above 50KB, it usually means the scan has heavy noise, too many pages, or very high resolution. Re-scan in grayscale or lower DPI (if possible) and compress again for better results.",
    ],
    defaultTarget: "50kb",
    steps: [
      "Upload the PDF you want to reduce.",
      "Use the 50KB target for a balance between smaller size and better readability.",
      "Download the optimized file after compression finishes.",
    ],
    worksFor: ["Govt forms", "Exam registrations", "Certificate scans"],
    faqs: [
      {
        question: "How can I make a PDF under 50KB?",
        answer:
          "Open the tool, upload your PDF, keep the 50KB target selected, and download the best compressed result.",
      },
      {
        question: "Why is 50KB a common target?",
        answer:
          "Many application portals accept small PDFs but still need enough readability for scanned documents, which makes 50KB a practical target.",
      },
      {
        question: "Does it work on mobile?",
        answer:
          "Yes, the tool is browser-based and designed to stay simple on both mobile and desktop devices.",
      },
    ],
  },
  "compress-pdf-100kb": {
    slug: "compress-pdf-100kb",
    title: "Compress PDF to 100KB Online Free (Govt Forms)",
    description:
      "Reduce PDF file size to 100KB for SSC, Railway, and other government forms. Free online tool for scanned PDFs and document uploads.",
    keywords: ["compress pdf 100kb", "pdf under 100kb", "compress pdf for ssc form"],
    shellTitle: "Compress PDF to 100KB",
    shellDescription:
      "Reduce scanned PDFs near 100KB for SSC, Railway, and other document portals.",
    h1: "Compress PDF to 100KB Online Free",
    pageDescription:
      "Choose this page when you need a more practical size target for scanned documents. It works well for SSC, Railway, and other government form uploads that need a smaller but still readable PDF.",
    content: [
      "100KB is often the best starting point for scanned PDFs because it preserves readability. Many portals accept a 100KB document even when they keep image uploads smaller, so it is a common target for certificates, ID scans, and supporting documents.",
      "If you are compressing for SSC or Railway applications, use this page first and only go down to 50KB or 20KB when the portal explicitly demands it. This reduces the risk of unreadable text that can cause verification issues later.",
      "For multi-page PDFs, focus on keeping the scan clean: crop extra margins before scanning and avoid glossy photos that increase size. Then compress and double-check clarity before uploading.",
    ],
    defaultTarget: "100kb",
    steps: [
      "Upload the original or scanned PDF document.",
      "Use the 100KB target for a cleaner balance of compression and quality.",
      "Download the optimized PDF and try it on your application portal.",
    ],
    worksFor: ["SSC forms", "Railway forms", "Govt document uploads"],
    faqs: [
      {
        question: "How do I compress PDF to 100KB?",
        answer:
          "Upload your document, choose 100KB, and run the compressor. The tool will try to produce the smallest readable result close to that size.",
      },
      {
        question: "Is 100KB good for scanned forms?",
        answer:
          "Yes, 100KB is often more practical for scanned PDFs because it usually preserves readability better than very aggressive targets.",
      },
      {
        question: "Can I use this for govt forms?",
        answer:
          "Yes, the page is designed for government forms, exam applications, and recruitment uploads where a smaller PDF is required.",
      },
    ],
  },
  "compress-pdf-for-ssc-form": {
    slug: "compress-pdf-for-ssc-form",
    title: "Compress PDF for SSC Form Online Free",
    description:
      "Compress PDF for SSC form online free. Reduce scanned PDFs for SSC uploads, applications, and document submission in the browser.",
    keywords: ["compress pdf for ssc form", "ssc pdf compressor", "ssc document upload pdf"],
    shellTitle: "Compress PDF for SSC Form",
    shellDescription:
      "Compress scanned PDFs for SSC uploads and application document submission.",
    h1: "Compress PDF for SSC Form Online Free",
    pageDescription:
      "This page is focused on SSC candidates who need to reduce scanned PDFs before uploading documents. It is a straightforward way to shrink a PDF without installing separate software.",
    content: [
      "SSC application flows often require uploading scanned documents within a limited file size. The most common pain point is reaching the upload step and seeing an error because your scan is larger than the portal limit.",
      "Use this tool for scanned PDFs like certificates, ID proof, or document corrections. Start with the recommended target and verify readability by zooming into key details such as name, roll number, and document dates.",
      "If your PDF is already digitally generated (not scanned), compression may be less effective. For best results, scanned PDFs with clear text and minimal background noise compress more reliably.",
    ],
    defaultTarget: "100kb",
    steps: [
      "Upload the SSC-related PDF you need to submit.",
      "Use the built-in preset to reduce the document near a practical upload size.",
      "Download the result and verify readability before final submission.",
    ],
    worksFor: ["SSC applications", "Recruitment forms", "Scanned documents"],
    faqs: [
      {
        question: "How do I compress PDF for SSC form?",
        answer:
          "Upload the PDF, run compression with the preset target, and download the optimized file. It is best suited for scanned SSC-related documents.",
      },
      {
        question: "What type of PDF works best here?",
        answer:
          "Scanned PDFs usually benefit the most because they can be re-rendered and reduced more aggressively than already compressed digital PDFs.",
      },
      {
        question: "Can this help with strict SSC upload limits?",
        answer:
          "Yes, it is intended for SSC upload workflows where applicants need a lighter PDF quickly.",
      },
    ],
  },
  "compress-pdf-for-railway-form": {
    slug: "compress-pdf-for-railway-form",
    title: "Compress PDF for Railway Form Online Free",
    description:
      "Compress PDF for Railway form online free. Reduce scanned document size for railway recruitment portals and upload-ready PDFs.",
    keywords: ["compress pdf for railway form", "railway pdf compressor", "railway form pdf size"],
    shellTitle: "Compress PDF for Railway Form",
    shellDescription:
      "Prepare lighter PDFs for Railway recruitment and application form uploads.",
    h1: "Compress PDF for Railway Form Online Free",
    pageDescription:
      "This route is tailored for railway application flows where scanned documents need to be smaller before upload. It keeps the process simple and fast for users working from a phone or laptop.",
    content: [
      "Railway recruitment and application portals typically enforce upload limits to keep submissions consistent. Scanned PDFs (certificates, ID proof, or forms) can easily exceed those limits if they are scanned in color or at high resolution.",
      "This page gives you a form-focused workflow: upload the document, compress with a practical target, and download an upload-ready PDF. It is helpful for candidates applying from mobile devices where file-size issues are harder to fix with desktop software.",
      "If the portal rejects the file even after compression, double-check whether it expects an image instead of a PDF. In that case, use the image tools to create a smaller JPG under the required KB limit.",
    ],
    defaultTarget: "100kb",
    steps: [
      "Upload the PDF document needed for your railway form.",
      "Run the compressor with the recommended preset for form-ready output.",
      "Save the compressed PDF and use it for your railway portal upload.",
    ],
    worksFor: ["Railway recruitment", "Govt uploads", "Scanned document forms"],
    faqs: [
      {
        question: "How do I reduce PDF size for railway form?",
        answer:
          "Upload the file and compress it using the recommended preset. The tool is designed for scanned PDFs commonly used in railway form submissions.",
      },
      {
        question: "Why does Railway form PDF size matter?",
        answer:
          "Many recruitment portals enforce strict limits to keep uploads consistent, so reducing file size helps avoid rejection during submission.",
      },
      {
        question: "Does it work for other govt forms too?",
        answer:
          "Yes, it also works for other government-related forms and scanned document uploads that need smaller PDFs.",
      },
    ],
  },
  "compress-percent": {
    slug: "compress-percent",
    title: "Compress PDF by Percent Online Free",
    description:
      "Compress PDF by percent online free using practical preset targets for scanned files and government-form document uploads.",
    keywords: ["compress pdf by percent", "reduce pdf size online", "pdf compressor for forms"],
    shellTitle: "Compress PDF by Percent",
    shellDescription:
      "Use practical PDF compression presets when you want a lighter file without guessing editing steps.",
    h1: "Compress PDF by Percent Online Free",
    pageDescription:
      "If you are looking for a percent-style PDF reducer, this page gives you practical preset targets that make it easier to lower file size without manual editing. It works especially well for scanned PDFs that need to become smaller for form submission.",
    content: [
      "Many users search for “compress PDF by percent” when they want a smaller file but do not know the exact KB limit. For government-form uploads, size limits are usually defined in KB, so this page focuses on practical targets instead of abstract percentages.",
      "If your goal is to reduce size significantly, start with 100KB or 50KB to preserve readability, then move to 20KB only when the portal requires it. This approach avoids wasting time with repeated trial-and-error uploads.",
      "Common issues include blurred scans after heavy compression and PDFs that do not shrink because they are already optimized. Scanned PDFs respond best because the tool can re-render pages into a lighter output.",
    ],
    defaultTarget: "50kb",
    steps: [
      "Upload your PDF and choose a lower target that matches how much reduction you need.",
      "Run browser-based compression and wait for the optimized version.",
      "Download the output and compare the final size with your upload requirement.",
    ],
    worksFor: ["Scanned PDFs", "Govt forms", "General document reduction"],
    faqs: [
      {
        question: "What does compress PDF by percent mean here?",
        answer:
          "Instead of entering an exact percentage, this page uses practical size presets to reduce your PDF in a simple and form-friendly way.",
      },
      {
        question: "Which target should I choose?",
        answer:
          "Use 20KB for very strict limits, 50KB for balanced compression, and 100KB when readability matters more.",
      },
      {
        question: "Is this tool good for scanned PDFs?",
        answer:
          "Yes, scanned PDFs usually respond best because the tool can re-render pages into lighter image-based output.",
      },
    ],
  },
};
