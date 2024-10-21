"use client";

import PropTypes from "prop-types";
import React from "react";
import SimpleLayout from "../../../layout/SimpleLayout";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../../lib/queryClient";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/theme";

export default function Layout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SimpleLayout>{children}</SimpleLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

Layout.propTypes = { children: PropTypes.node };
