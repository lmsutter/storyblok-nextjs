/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import ComponentMap from "../componentMap";
 
/** 2. Initialize it as usual */
storyblokInit({
    accessToken: process.env.SB_ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: 'us',
    },
    components: ComponentMap,
  })
 
export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return children;
}