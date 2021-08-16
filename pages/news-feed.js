import React, { useEffect } from "react";
import FeedCard from "../components/feed/FeedCard";

var data = [
  {
    profile_photo:
      "https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
    feedText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ratione dicta deleniti, quas distinctio,
              veniam quo rem eveniet aliquid repudiandae fuga asperiores reiciendis tenetur? Eius quidem impedit et
              soluta accusamus.`,
    feedImg:
      "https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80",
    post_timestamp_text: "2 days ago",
    likes: 456,
    comments: 34,
    shares: 5,
  },
  {
    profile_photo:
      "https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
    feedImg:
      "https://images.unsplash.com/photo-1586398710270-760041494553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80",
    post_timestamp_text: "5 days ago",
    likes: 456,
    comments: 34,
    shares: 5,
  },
  {
    profile_photo:
      "https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
    feedText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ratione dicta deleniti, quas distinctio,
              veniam quo rem eveniet aliquid repudiandae fuga asperiores reiciendis tenetur? Eius quidem impedit et
              soluta accusamus.`,
    post_timestamp_text: "7 days ago",
    likes: 456,
    comments: 34,
    shares: 5,
  },
];
export default function NewsFeed() {
  useEffect(() => {
    //fetch data here
  }, []);

  return (
    <div class="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
      {data.map((post) => (
        <FeedCard {...post} />
      ))}
    </div>
  );
}
