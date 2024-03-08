import BrotherPrint from "./BrotherPrintModule";

export function startSearchWiFiPrinter(): string {
  console.log('startSearchWiFiPrinter')
  return BrotherPrint.startSearchWiFiPrinter();
}

export function startSearchBluetoothPrinter() {
  console.log('startSearchBluetoothPrinter')
  return BrotherPrint.startSearchBluetoothPrinter();
}

export function printTD_4550(
  modelName: string,
  ipAddress: string,
  serialNumber: string,
  printerType: string,
  strFilePath: string,
) {
  return BrotherPrint.printTD_4550(
    modelName,
    ipAddress,
    serialNumber,
    printerType,
    strFilePath,
  );
}
export function printRJ_4230B(
  modelName: string,
  ipAddress: string,
  serialNumber: string,
  printerType: string,
  strFilePath: string,
) {
  return BrotherPrint.printRJ_4230B(
    modelName,
    ipAddress,
    serialNumber,
    printerType,
    strFilePath,
  );
}
