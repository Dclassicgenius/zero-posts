"use client";

import { store } from "@/storeon/store";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { StoreContext } from "storeon/react";

const Provider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session?: Session;
}) => {
  return (
    <StoreContext.Provider value={store}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </StoreContext.Provider>
  );
};

export default Provider;
