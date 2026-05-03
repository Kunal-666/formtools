import React from "react";

type JsonLdProps = {
  data: unknown;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a raw string, not an object.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

