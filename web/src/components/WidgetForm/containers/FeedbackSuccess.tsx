import { ReactElement } from "react";

import { Header } from "../components";
import successImageUrl from "../../../assets/success.svg";

type FeedbackSuccessProps = {
  onFeedbackRestart: () => void;
};

export const FeedbackSuccess = ({
  onFeedbackRestart,
}: FeedbackSuccessProps): ReactElement => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="Success" />

        <span className="text-xl mt-2">We appreciate the feedback!</span>

        <button
          onClick={onFeedbackRestart}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500"
        >
          Send another one
        </button>
      </div>
    </>
  );
};
