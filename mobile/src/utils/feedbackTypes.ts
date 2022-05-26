export const feedbackTypes = {
  BUG: {
    title: "Bug",
    image: require("../assets/bug.png"),
  },
  IDEIA: {
    title: "Idea",
    image: require("../assets/idea.png"),
  },
  OTHER: {
    title: "Other",
    image: require("../assets/thought.png"),
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
