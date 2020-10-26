import React from 'react';
import { NetlifyCMS, NetlifyCMSProps } from './NetlifyCMS';
import { IdentityWidgetProps, IdentityWidget } from './IdentityWidget';

interface AdminTemplateProps {
  cms: NetlifyCMSProps;
  identity: IdentityWidgetProps;
}

export default function AdminTemplate(props: AdminTemplateProps) {
  return (
    <>
      <IdentityWidget {...props.identity} />
      <NetlifyCMS {...props.cms} />
    </>
  );
}
