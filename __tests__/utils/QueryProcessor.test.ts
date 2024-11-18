import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"18-10826"
    	));
    });

    test('should return my name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Andrea"
        ));
    });

    test('Should return sum', () => {
        const query = "What is 54 plus 74 ?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "128"
        )); 
    });

    test('Should return multiple', () => {
        const query = "What is 54 multiplied by 4 ?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "216"
        )); 
    });

    test('Should return largest number', () => {
        const query = "Which of the following numbers is the largest: 18, 84, 63?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "84"
        ));
    });

    test('Should return both square and cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 1663, 518, 3057, 1728, 400, 2744, 4096?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "4096"
        ));
    });

    test('Should return prime numbers', () => {
        const query = "Which of the following numbers are primes: 2, 25, 53, 30, 45?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "2, 53"
        ));
    });

});
