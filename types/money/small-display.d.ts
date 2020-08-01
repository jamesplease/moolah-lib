export declare type SmallDisplayMagnitude = 'short' | 'medium';
export interface SmallUnitValue {
    value: number;
    magnitude: string;
    prefix: string;
}
export default function smallDisplay(value: number, magnitude?: SmallDisplayMagnitude): SmallUnitValue;
