export interface LinearScaleOptions {
    domain: [number, number];
    range: [number, number];
    value: number;
}
export default function linearScale({ domain, range, value }?: LinearScaleOptions): number;
