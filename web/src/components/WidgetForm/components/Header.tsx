import { ReactElement } from "react";
import { CloseButton } from "../../CloseButton";

type HeaderProps = {
  children?: ReactElement;
};

export const Header = ({ children }: HeaderProps): ReactElement => {
  return (
    <header>
      {children}
      <CloseButton />
    </header>
  );
};
