# Quadratic Equation Solver
This is a console application for solving quadratic equations by Kyrylo *LLumisS* Bukach, IM-11.  
Quadratic equation is an equation of the form: `ax2 + bx + c = 0`.  
Application has two modes of operation:  
1. **Interactive mode** starts when the application does not receive any arguments. Application asks to enter three coefficients: *a* (which is not equals zero), *b*, *c* - all three should be valid real numbers.
2. **Non-interactive mode** starts when the application receives a path to a *.txt* file as an argument. 
# How to install
1. Install Node.js.
2. Clone the repository on your local machine.
3. Go to the cloned folder in your terminal.
4. Install node dependencies using `npm i`.
5. Use the command `node main.js` to activate interactive mode, `node main.js <path-to-file>` to activate non-interactive mode.
# File format
The file must contain three numbers: `a b c` separated by spaces (\s). After `c` newline character (\n) expected. Use dot `.` to separate integer part of the number from decimal.
# Revert-commit
Link: https://github.com/LLumisS/mtsd-lab1/commit/3d15bebcd711b17a3c05e538ba375e2450c3d134
