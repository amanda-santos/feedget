import { ArrowLeft } from "phosphor-react";
import { ReactElement, useState } from "react";

import { ScreenshotButton } from "./../components/ScreenshotButton";
import { CloseButton } from "../../CloseButton";

import { FeedbackType, FEEDBACK_TYPES } from "../types";

type FeedbackContentProps = {
  type: FeedbackType;
  onFeedbackRestart: () => void;
};

export const FeedbackContent = ({
  type,
  onFeedbackRestart,
}: FeedbackContentProps): ReactElement => {
  const [screenshot, setScreenshot] = useState<null | string>(null);
  const feedbackTypeInfo = FEEDBACK_TYPES[type];

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestart}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent"
          placeholder="Tell us what is happening..."
        />

        <footer className="flex mt-2 gap-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshot={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Send feedback
          </button>
        </footer>
      </form>
    </>
  );
};