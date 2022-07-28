import { ReactNode } from "react";

const ListItem = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <li>
      <span>{heading}</span>
      <p>{children}</p>
    </li>
  );
};
