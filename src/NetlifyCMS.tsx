/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import CMS from 'netlify-cms-app';
import { CmsConfig } from 'netlify-cms-core';

export interface CmsConfigFixed extends CmsConfig {
  local_backend?: boolean;
  load_config_file?: boolean;
}

export interface NetlifyCMSProps {
  config: CmsConfigFixed;
  onLoad?: (cms: typeof CMS) => void;
}

export const NetlifyCMS = (props: NetlifyCMSProps) => {
  useEffect(() => {
    CMS.init({
      config: props.config,
    });

    if (props.onLoad) props.onLoad(CMS);
  }, []);
  return <div />;
};
