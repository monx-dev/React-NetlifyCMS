/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import CMS from 'netlify-cms-app';
import { CmsConfig } from 'netlify-cms-core';
import { OnLoad } from './IdentityWidget';

export interface CmsConfigFixed extends CmsConfig {
  local_backend?: boolean;
  load_config_file?: boolean;
}

export interface NetlifyCMSProps {
  config: CmsConfigFixed;
  onLoad?: OnLoad<typeof CMS>;
}

export const NetlifyCMS = (props: NetlifyCMSProps) => {
  useEffect(() => {
    CMS.init({
      config: props.config,
    });

    if (props.onLoad) return props.onLoad(CMS);
  }, []);
  return <div />;
};
