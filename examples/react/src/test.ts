import { BarInterface, BarEnum } from "@foo/bar"

export const testEnum = () => {
    const a: BarInterface = {
        test1: '1',
        test2: '2'
    }
    const b: BarEnum = BarEnum.test1
    console.log("test", a, b)
    return a
}