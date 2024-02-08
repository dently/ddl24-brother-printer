import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { BrotherDdlPrintViewProps } from './BrotherDdlPrint.types';

const NativeView: React.ComponentType<BrotherDdlPrintViewProps> =
  requireNativeViewManager('BrotherDdlPrint');

export default function BrotherDdlPrintView(props: BrotherDdlPrintViewProps) {
  return <NativeView {...props} />;
}
