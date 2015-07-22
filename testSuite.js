/**
 * Created by kihu on 2015-07-22.
 */


describe("solution suite", function() {


    it("writes one thousand two hundred thirty four", function() {
        expect(solution(1234)).toBe('one thousand two hundred thirty four');
    });
    it("writes one", function() {
        expect(solution(1)).toBe('one');
    });
    it("writes three", function() {
        expect(solution(3)).toBe('three');
    });
    it("writes twelve", function() {
        expect(solution(12)).toBe('twelve');
    });
    it("writes twenty one", function() {
        expect(solution(21)).toBe('twenty one');
    });
    it("writes one hundred", function() {
        expect(solution(100)).toBe('one hundred');
    });
    it("writes three hundred", function() {
        expect(solution(300)).toBe('three hundred');
    });
    it("writes three hundred twelve", function() {
        expect(solution(312)).toBe('three hundred twelve');
    });
    it("writes one thousand three hundred twelve", function() {
        expect(solution(1312)).toBe('one thousand three hundred twelve');
    });
    it("writes two hundred thousand three hundred twelve", function() {
        expect(solution(200312)).toBe('two hundred thousand three hundred twelve');
    });
    it("writes one million two hundred eighty one thousand three hundred twelve", function() {
        expect(solution(1281312)).toBe('one million two hundred eighty one thousand three hundred twelve');
    });
    it("writes two hundred one thousand one", function() {
        expect(solution(201001)).toBe('two hundred one thousand one');
    });
    it("writes one million", function() {
        expect(solution(1000000)).toBe('one million');
    });

});