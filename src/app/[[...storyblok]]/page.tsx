import getStories from '@/sbUtilities/getStories';
import {
  ISbStoriesParams,
  ISbStoryData,
  StoryblokComponent,
  getStoryblokApi,
} from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: { storyblok?: string[] };
}) {
  const res = await getStories();

  let currentStory: ISbStoryData | null = null;

  if (!params.storyblok) {
    currentStory = res.data.stories.find(
      (story: ISbStoryData) => story.name === 'Home',
    );
  }

  res.data.stories.forEach((story: ISbStoryData) => {
    if (currentStory !== null) {
      return;
    }
    if (params.storyblok) {
      if (story.is_startpage) {
        if (params.storyblok.join('/') + '/' === story.full_slug) {
          currentStory = story;
        }
      }
      if (params.storyblok.join('/') === story.full_slug) {
        currentStory = story;
      }
    }
  });

  console.log(params);

  return (
    <main>
      <StoryblokStory story={currentStory} />
    </main>
  );
}

export async function generateStaticParams() {
  // const storyblokApi = getStoryblokApi();
  // const sbParams: ISbStoriesParams = {
  //     version: "draft",
  // }
  // let res  = await storyblokApi.get("cdn/stories/", sbParams, {cache: "no-store"});

  const res = await getStories();

  const sbPages = res.data.stories.map((story: ISbStoryData) => {
    if (story.name === 'Home') {
      return {
        storyblok: [''],
      };
    }
    return {
      storyblok: [...story.full_slug.split('/')],
    };
  });

  // return [ { storyblok: ['']}, { storyblok: ['bio']}]

  return sbPages;
}
