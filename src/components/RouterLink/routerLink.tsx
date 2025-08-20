import React from "react";

import { Link } from "react-router";

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<"a">;

function RouterLink({ children, href, ...props }: RouterLinkProps) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}

export { RouterLink };
