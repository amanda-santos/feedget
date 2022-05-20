import { ReactElement, useState } from "react";
import {
  FeedbackContent,
  FeedbackSuccess,
  FeedbackType as FeedbackTypeComponent,
} from "./containers";
import { FeedbackType } from "./types";

export const WidgetForm = (): ReactElement => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = (): void => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccess onFeedbackRestart={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeComponent onChange={setFeedbackType} />
          ) : (
            <FeedbackContent
              type={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Made with 💜 by{" "}
        <a href="#" className="underline underline-offset-2">
          Amanda Santos
        </a>
      </footer>
    </div>
  );
};
