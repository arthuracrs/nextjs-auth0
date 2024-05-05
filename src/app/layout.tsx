import "../styles/styles.css";
import React, { PropsWithChildren } from "react";
import { PageLayout } from "@/components/page-layout";
import { PreloadResources } from "@/app/preload-resources";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRoute'
const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <PreloadResources />
      <body>
        <UserProvider>
          <PageLayout>{children}</PageLayout>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
