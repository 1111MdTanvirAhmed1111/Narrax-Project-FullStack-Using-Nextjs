

export const metaObj= {
  // Basic Metadata
  title: "Narrax - Story Battles for Writers and Creators",
  description:
    "Narrax is a next-gen social platform where writers and creators compete in thrilling 1v1 story battles across genres like horror, romance, thriller, and more. Audiences vote to crown the winner based on emotional impact and storytelling prowess.",
  keywords: [
    "storytelling platform",
    "story battles",
    "creative writing",
    "writing competition",
    "social storytelling",
    "horror stories",
    "romance stories",
    "thriller stories",
    "mystery stories",
    "writers community",
  ],
  authors: [{ name: "Narrax Team", url: "https://www.narrax.com" }],
  creator: "Narrax",
  publisher: "Narrax",

  // Open Graph (OG) Metadata for Social Sharing (Facebook, LinkedIn, Instagram, etc.)
  openGraph: {
    title: "Narrax - Where Stories Compete and Emotions Win",
    description:
      "Join Narrax, the ultimate platform for writers and creators to battle head-to-head with stories in genres like horror, romance, and mystery. Audiences vote to decide the winner!",
    url: "https://www.narrax.com",
    siteName: "Narrax",
    images: [
      {
        url: "https://www.narrax.com/narrax.jpg",
        width: 1200,
        height: 630,
        alt: "Narrax Story Battle Platform Logo",
      },
    ],
    locale: "en_US",
    type: "website",
    determiner: "the",
    countryName: "United States",
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Narrax - Story Battles for Creative Minds",
    description:
      "Compete in 1v1 story battles on Narrax! Share your tales in horror, romance, or thriller, and let the audience vote for the winner.",
    creator: "@NarraxOfficial",
    site: "@NarraxOfficial",
    images: [
      {
        url: "https://www.narrax.com/narrax.jpg",
        alt: "Narrax Story Battle Platform Logo",
      },
    ],
  },

  // Additional Social Media Metadata (Facebook-specific and others)
  facebook: {
    appId: "YOUR_FACEBOOK_APP_ID", // Replace with actual Facebook App ID
  },

  // Additional Metadata for Other Platforms
  metadataBase: new URL("https://www.narrax.com"),
  alternates: {
    canonical: "https://www.narrax.com",
    languages: {
      "en-US": "https://www.narrax.com/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/narrax.jpg",
    shortcut: "/narrax.jpg",
    apple: "/narrax.jpg",
    other: [
      {
        rel: "icon",
        url: "/narrax.jpg",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/narrax.jpg",
        sizes: "16x16",
      },
    ],
  },

  applicationName: "Narrax",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
export const viewportObj = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    
  themeColor: "#ffffff",
  }