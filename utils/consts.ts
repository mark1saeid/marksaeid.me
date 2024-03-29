export const ORIGIN = process.env.NEXT_PUBLIC_HOST || process.env.NEXT_PUBLIC_VERCEL_URL || ("marksaeid.me" as const);
export const PROTOCOL = process.env.NODE_ENV === "production" ? "https" : "http";
export const HOST = `${PROTOCOL}://${ORIGIN}` as const;

export const SEPARATOR = " • ";

export const SITE_TITLE = "Mark Saeid";
export const SITE_TITLE_TEMPLATE = `%s ${SEPARATOR} ${SITE_TITLE}`;
export const SHORT_DESCRIPTION = "My personal website";
export const DEFAULT_DESCRIPTION =
  "Hi, I'm Mark - software engineer, freelancer, blogger, new technologies enthusiast, enjoy my website!";

export const DEFAULT_IMAGE_URL = `/img/banner.png`;

export const SOCIALS = [
  {
    name: "facebook",
    color: "#94ccff",
    link: `https://facebook.com/${process.env.NEXT_PUBLIC_FB_USERNAME}`,
  },
  {
    name: "instagram",
    color: "#94ccff",
    link: `https://instagram.com/${process.env.NEXT_PUBLIC_IG_USERNAME}`,
  },
  {
    name: "twitter",
    color: "#94ccff",
    link: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`,
  },
  {
    name: "linkedin",
    color: "#2867B2",
    link: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`,
  },
  {
    name: "github",
    color: "#333",
    link: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  },
  {
    name: "rss",
    color: "#ee802f",
    link: "/feed",
  },
] as const;

export const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
