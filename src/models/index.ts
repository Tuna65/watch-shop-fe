import React from "react";

export type TRouterList = {
  path: string;
  component: any;
};

export type Option = {
  label: string | React.ReactNode;
  value: string | number;
};

export type TPath = {
  name: string;
  path: string;
};

export type TPagination = {
  page: number;
  size: number;
};
