export type PDFSEOPageConfig = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  shellTitle: string;
  shellDescription: string;
  h1: string;
  pageDescription: string;
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
