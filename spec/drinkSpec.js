describe("The whatCanIDrink function", function() {

    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Drinking age", function() {

        it("should exist", function() {

            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            var result = whatCanIDrink(-1)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return Drink Toddy", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

        it("should return Drink Coke", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

        it("should return Drink Beer", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });

        it("should return Drink Whisky", function() {
            var result = whatCanIDrink(45)
            expect(result).toBe("Drink Whisky");
        });

        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
        var result = whatCanIDrink(200)
        expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

    });

});