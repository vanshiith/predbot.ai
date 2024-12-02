import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps): JSX.Element {
  return (
    <main className="flex-1 flex flex-col">
      {children}
    </main>
  );
}
