"use client";
import { SessionProvider as SessionProviderComponent } from "next-auth/react";
import React, { PropsWithChildren } from "react";

const SessionProvider = ({ children }: PropsWithChildren) => {
  return <SessionProviderComponent>{children}</SessionProviderComponent>;
};

export default SessionProvider;
