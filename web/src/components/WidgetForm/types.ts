import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

export const FEEDBACK_TYPES = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImageUrl,
      alt: "Image of an insect",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "Image of a bulb",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtImageUrl,
      alt: "Image of a cloud of thoughts",
    },
  },
};

export type FeedbackType = keyof typeof FEEDBACK_TYPES;
