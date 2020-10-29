import React from 'react';
import { NetlifyCMS, NetlifyCMSProps } from './NetlifyCMS';
import { IdentityWidgetProps, IdentityWidget } from './IdentityWidget';

interface TemplateProps {
  cms: NetlifyCMSProps;
  identity?: IdentityWidgetProps;
}

export default function Template(props: TemplateProps) {
  return (
    <>
      <NetlifyCMS {...props.cms} />
      <IdentityWidget {...props.identity} />
    </>
  );
}
