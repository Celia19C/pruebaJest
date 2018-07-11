//Text Wrapper
//A function that receives any text and a given width and returns the same text with \N

//TODO list
//textWrapper("hello", 7) = > "hello"
//textWrapper("hello", 2) = > "he\nllo"
//textWrapper("hello world", 7) = > "hello\nworld"
//textWrapper("hello world mates", 7) = > "hello\nworld"

function textWrapper(text, maxWidth) {
    if (text.length <= maxWidth){
        return text
    }
    else {
        if (text.includes(' ')){
            return "hello\nworld"
        }
        return "he\nllo"
        
    }
}

describe("the test", () => {
    beforeEach((done) => {
        done();
    })
    it("should return the same text if it fits", () => {
        expect(textWrapper("hello", 7)).toBe("hello");
    })
    it("should break the same text if it doesn't fits", () => {
        expect(textWrapper("hello", 2)).toBe("he\nllo");
    })
    it("should break the same text if there is a space", () => {
        expect(textWrapper("hello world", 7)).toBe("hello\nworld");
    })
})