import React, { useEffect } from 'react';
import identity, { InitOptions } from 'netlify-identity-widget';

export interface IdentityWidgetProps {
  config?: InitOptions;
  onLoad?: (identit: typeof identity) => void;
}

export const IdentityWidget = (props: IdentityWidgetProps) => {
  useEffect(() => {
    (window as any).netlifyIdentity = identity;

    if (props.onLoad) props.onLoad(identity);

    identity.init(props.config);
  }, []);

  return <div />;
};
