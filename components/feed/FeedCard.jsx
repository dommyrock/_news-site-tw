import React from "react";
import PropTypes from "prop-types";
let contentType = "";
const FeedCard = ({ profile_photo, feedText, feedImg, post_timestamp_text, likes, comments, shares }) => {
  if (feedText && feedImg) contentType = "both";
  else if (feedImg) contentType = "img";
  else if (feedText) contentType = "text";

  return (
    <div class="max-w-xl mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
      <div class="py-2 flex flex-row items-center justify-between">
        <div class="flex flex-row items-center">
          <a href="#" class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
            <img class="rounded-full h-8 w-8 object-cover" src={profile_photo} alt="profile photo" />
            <p class="ml-2 text-base font-medium">Jon Doe</p>
          </a>
        </div>
        <div class="flex flex-row items-center">
          <p class="text-xs font-semibold text-gray-500">{post_timestamp_text}</p>
        </div>
      </div>
      {contentType === "both" && (
        <>
          <div class="mt-2">
            <img class="object-cover w-full rounded-lg" src={feedImg} alt="" />
            {/* Likes section */}
            <div class="py-2 flex flex-row items-center">
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <span class="ml-1">{likes}</span>
              </button>
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span class="ml-1">{comments}</span>
              </button>
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span class="ml-1">{shares}</span>
              </button>
            </div>
          </div>
          <div class="py-2">
            <p class="leading-snug">{feedText}</p>
          </div>
        </>
      )}
      {contentType === "img" && (
        <>
          <div class="mt-2">
            <img class="object-cover w-full rounded-lg" src={feedImg} alt="" />
            {/* Llike section */}
            <div class="py-2 flex flex-row items-center">
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <span class="ml-1">{likes}</span>
              </button>
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span class="ml-1">{comments}</span>
              </button>
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span class="ml-1">{shares}</span>
              </button>
            </div>
          </div>
        </>
      )}
      {contentType === "text" && (
        <>
          {/* Text contaier */}
          <div class="py-2">
            <p class="leading-snug">{feedText}</p>
          </div>
          {/* Like section */}
          <div>
            <div class="py-2 flex flex-row items-center">
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <span class="ml-1">{likes}</span>
              </button>
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span class="ml-1">{comments}</span>
              </button>
              <button class="flex flex-row items-center focus:outline-none focus:shadow-outline rounded-lg ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span class="ml-1">{shares}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

FeedCard.propTypes = {
  feedText: PropTypes.string,
  feedImg: PropTypes.string,
  profile_photo: PropTypes.string,
};

export default FeedCard;
