import { ReactElement } from "react";
import { Header } from "../components";
import { FeedbackType as Type, FEEDBACK_TYPES } from "../types";

type FeedbackTypeProps = {
  onChange: (type: Type) => void;
};

/*
[
  ['BUG', {...}],
  ['IDEA', {...}],
  ['OTHER', {...}],
]
*/

export const FeedbackType = ({ onChange }: FeedbackTypeProps): ReactElement => {
  return (
    <>
      <Header>
        <span className="text-xl leading-6">Leave your feedback</span>
      </Header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(FEEDBACK_TYPES).map(([key, value]) => (
          <button
            type="button"
            key={key}
            onClick={() => onChange(key as Type)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
