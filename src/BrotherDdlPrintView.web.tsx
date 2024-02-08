import * as React from 'react';

import { BrotherDdlPrintViewProps } from './BrotherDdlPrint.types';

export default function BrotherDdlPrintView(props: BrotherDdlPrintViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
