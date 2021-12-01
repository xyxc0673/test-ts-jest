import { testEnum } from "./test"

it('workWithEnum', () => {
    expect(testEnum()).toEqual({
        test1: '1',
        test2: '2'
    })
})