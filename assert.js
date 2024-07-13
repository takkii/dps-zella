var assert = require('node:assert').strict;
var UnitTest = /** @class */ (function () {
    function UnitTest() {
        this.OneDay = new Date();
        this.OneYear = this.OneDay.getFullYear();
        this.anything_month = this.OneDay.getMonth();
        this.OneMonth = this.anything_month + 1;
        this.anyDays = this.OneDay.getDate();
        this.WeekDay = this.OneDay.getDay();
    }
    UnitTest.prototype.test = function () {
        try {
            if (this.OneYear % 4 == 0 && this.OneYear % 100 != 0 || this.OneYear % 400 == 0) {
                if (this.OneMonth == 2 && this.anyDays == 29) {
                    this.calc = ((365 * this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                        this.OneYear / 400 + (306 * (this.OneMonth + 1)) / 10 + this.anyDays) - 426) % 7;
                }
                else if (this.OneMonth == (2 && 4 && 6 && 9)) {
                    this.calc = ((365 * this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                        this.OneYear / 400 + (306 * (this.OneMonth + 1)) / 10 + this.anyDays) - 428) % 6;
                }
                else {
                    this.calc = ((365 * this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                        this.OneYear / 400 + (306 * (this.OneMonth + 1)) / 10 + this.anyDays) - 428) % 7;
                }
            }
            else {
                this.calc = (this.OneYear + this.OneYear / 4 - this.OneYear / 100 +
                    this.OneYear / 400 + (13 * this.OneMonth + 8) / 5 + this.anyDays) % 7;
            }
            this.fl_calc = Math.floor(this.calc);
            assert.equal(this.fl_calc, this.WeekDay, 'cl_wk is equals to WeekDay');
            console.log('assertion check, done ✅');
        }
        catch (err) {
            console.log('------------ Assertion Error ------------');
            console.log(err);
            console.log('------------ Stack Trace ------------');
            console.log(err.stack);
        }
    };
    return UnitTest;
}());
var unit = new UnitTest();
unit.test();
