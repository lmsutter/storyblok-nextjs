import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react/rsc";

const Page = ({ blok }: {blok: any}) => (
  <main {...storyblokEditable(blok)} className="text-center mt-4">

    {blok?.body?.map((nestedBlok: SbBlokData) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;