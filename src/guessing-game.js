class GuessingGame {
    constructor() {
        this.ans = null;
        this.min = null;
        this.max = null;

    }
    _search() {
        return Math.round((this.min + this.max) / 2);
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.ans =  this._search();
    }

    guess() {
        if (this.min > this.max) {
            return null;
        } else {
            return this.ans;
        }
    }

    lower() {
        this.max = this.ans;
        this.ans =  this._search();
    }

    greater() {
        this.min = this.ans;
        this.ans = this._search();
    }
}

module.exports = GuessingGame;
