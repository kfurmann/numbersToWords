/**
 * Created by kihu on 2015-07-22.
 */

function solution(num) {

    var basicNums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'seventeen', 'eighteen', 'nineteen'];
    var tenths = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function toWord(num, ending) {

        var result = '';

        if (num >= 1000000) {
            result = toWord(Math.floor(num / 1000000), 'million') + ' ';
            num = num % 1000000;
        }

        if (num >= 1000) {
            result += toWord(Math.floor(num / 1000), 'thousand') + ' ';
            num = num % 1000;
        }

        if (num >= 100) {
            result += toWord(Math.floor(num / 100), 'hundred') + ' ';
            num = num % 100;
        }

        if(num >= 20){
            result += tenths[Math.floor(num / 10) - 1] + ' ';
            num = num % 10;
        }

        if (num === 0) {
            return result + ' ' + ending;
        }

        if (num < 10) {
            result += basicNums[num - 1];
        } else if (num < 20) {
            result += teens[num - 11];
        }

        return result + ' ' + ending;
    }

    var result = toWord(num, '');

    return result.replace(/  +/g, ' ').trim();
}