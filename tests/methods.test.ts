import { isEmail, isPasswordLow, isPasswordMedium, isPasswordStrong, isUrl } from "../src"


// Email test
describe("Email", () => {   
    it("Testing email with email string", () => {
        expect(isEmail("test@test.com")).toEqual(true)
    })

    it("Testing email with non-email string", () => {
        expect(isEmail("test")).toEqual(false)
    })
})



// Url test
describe("Url", () => {   
    it("Testing Url with Url string", () => {
        expect(isUrl("http://example.com/")).toEqual(true)
    })

    it("Testing Url with non-Url string", () => {
        expect(isUrl("test")).toEqual(false)
    })
})



// Passwords testing

// Low level
describe("Password low", () => {   
    it("Testing low password with low password", () => {
        expect(isPasswordLow("a_123456")).toEqual(true)
    })

    it("Testing low with no low password string", () => {
        expect(isPasswordLow("123456")).toEqual(false)
    })
})

// Medium level
describe("Password Medium", () => {   
    it("Testing Medium password with Medium password", () => {
        expect(isPasswordMedium("123456Ab")).toEqual(true)
    })

    it("Testing medium with no medium password", () => {
        expect(isPasswordMedium("123456")).toEqual(false)
    })
})

// Strong level
describe("Password Strong", () => {   
    it("Testing Strong password with Strong password", () => {
        expect(isPasswordStrong("123456_Abc")).toEqual(true)
    })

    it("Testing strong password with no strong password string", () => {
        expect(isPasswordStrong("123456")).toEqual(false)
    })
})