import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to BrotherDdlPrint.web.ts
// and on native platforms to BrotherDdlPrint.ts
import BrotherDdlPrintModule from './BrotherDdlPrintModule';
import BrotherDdlPrintView from './BrotherDdlPrintView';
import { ChangeEventPayload, BrotherDdlPrintViewProps } from './BrotherDdlPrint.types';

// Get the native constant value.
export const PI = BrotherDdlPrintModule.PI;

export function hello(): string {
  return BrotherDdlPrintModule.hello();
}

export async function setValueAsync(value: string) {
  return await BrotherDdlPrintModule.setValueAsync(value);
}

const emitter = new EventEmitter(BrotherDdlPrintModule ?? NativeModulesProxy.BrotherDdlPrint);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { BrotherDdlPrintView, BrotherDdlPrintViewProps, ChangeEventPayload };
