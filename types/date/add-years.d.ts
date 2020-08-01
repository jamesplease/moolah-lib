interface DateObject {
    month: number;
    year: number;
}
export default function addYears(date: DateObject, years: number): {
    year: number;
    month: number;
};
export {};
