/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if(type === "quarter") {
            this.cashTendered += 25;
        } else if (type === "dime"){
            this.cashTendered += 10;
        } else if (type === "nickels"){
            this.cashTendered += 5;
        } else if (type === "pennies"){
            this.cashTendered += 1;
        }    
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (cashTendered === amountDue) {
        return true;
    } else if (cashTendered > amountDue){
        return true;
    } else if (cashTendered < amountDue){
        return false;
    }
    
    giveChange() {
        // TODO return the correct change in the following format...
    let change = cashTendered - amountDue;
        while (change > 0) {
            if ( change > 25)
            quarters ++;
            change = -25;
        } 
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}