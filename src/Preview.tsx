import React, { ComponentType } from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

interface PreviewProps {
  get: (keys: string[]) => any;
}

export const Preview = (Component: ComponentType<PreviewProps>) => {
  const Preview = ({ entry }: PreviewTemplateComponentProps) => {
    const get = (keys: string[]) => entry.getIn(['data', ...keys]);

    return <Component get={get} />;
  };

  return Preview;
};
