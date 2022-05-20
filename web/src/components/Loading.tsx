import { ReactElement } from "react";
import { CircleNotch } from "phosphor-react";

export const Loading = (): ReactElement => {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="h-4 w-4 animate-spin" />
    </div>
  );
};
