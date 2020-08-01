declare type PennerEquation = (k: number) => number;
interface Penner {
    [Key: string]: PennerEquation;
}
declare const equation: Penner;
export default equation;
