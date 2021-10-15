const handler = require("./handler")
// @ponicode
describe("handler.helloWorld", () => {
    test("0", () => {
        let callFunction = () => {
            handler.helloWorld("withdrawal", "DROP TABLE tmp;", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handler.helloWorld("deposit", "UPDATE Projects SET pname = %s WHERE pid = %s", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handler.helloWorld("deposit", "UNLOCK TABLES;", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handler.helloWorld("invoice", "DROP TABLE tmp;", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handler.helloWorld("invoice", "DELETE FROM Projects WHERE pid = %s", () => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            handler.helloWorld(undefined, "", undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
