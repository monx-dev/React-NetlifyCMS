import React, { useEffect } from 'react';
import identity, { InitOptions } from 'netlify-identity-widget';

export type OnLoad<T> = (item: T) => void | (() => void | undefined);

export type Identity = typeof identity;

export interface IdentityWidgetProps {
  config: InitOptions;
  onLoad?: OnLoad<Identity>;
}

export const IdentityWidget = (props: IdentityWidgetProps) => {
  useEffect(() => {
    (window as any).netlifyIdentity = identity;

    const unmountFn = props.onLoad ? props.onLoad(identity) : undefined;

    identity.init(props.config);

    return unmountFn;
  }, []);

  return <div />;
};
