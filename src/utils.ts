export class Utils {
  public static isValidUInt8(value: number) {
    return value == new Uint8Array([value])[0];
  }

  public static repeat(value: any, count: number): any[] {
    const buf = [];
    for (let i = 0; i < count; i++) buf.push(value);
    return buf;
  }

  public static getParityBit(code: string): number {
    let parity = 0;
    const code_r = code.split("").reverse().join("");
    for (let i = 0; i < code_r.length; i++) {
      parity += parseInt(code_r.charAt(i), 10) * Math.pow(3, (i + 1) % 2);
    }
    return ((10 - (parity % 10)) % 10).toString().charCodeAt(0);
  }

  public static check4CPTable() {
    if (!("cptable" in window)) {
      throw (
        "cptable.js and cputils.js files from " +
        "https://github.com/SheetJS/js-codepage" +
        "project are missing"
      );
    }
  }

  public static int32ToArray(number: number): number[] {
    return [
      number & 0xff,
      (number >> 8) & 0xff,
      (number >> 16) & 0xff,
      (number >> 24) & 0xff,
    ];
  }

  public static int16ToArray(number: number): number[] {
    return [number & 0xff, (number >> 8) & 0xff];
  }

  public static codeLengthUInt16(code: string): number[] {
    return this.int16ToArray(code.length);
  }
}
