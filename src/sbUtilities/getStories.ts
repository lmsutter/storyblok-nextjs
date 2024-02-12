import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react";

export default async function getStories() {
    const storyblokApi = getStoryblokApi();
    const sbParams: ISbStoriesParams = {
        version: "draft",
    }
    let res  = await storyblokApi.get("cdn/stories/", sbParams, {cache: "no-store"});

    return res;
}
