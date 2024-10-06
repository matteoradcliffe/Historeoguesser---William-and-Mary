[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Oqa8vj80)
# Lab-05

## Got Change?

### Lab overview and learning outcomes 

In this lab you will gather input from the user and complete a function to convert a dollar amount to change - the minimum number of coins for that dollar value.   

- Demonstrate gathering user input
- Create a Python dictionary with key, value pairs
- Calculate values using floor division and modulus in Python
- Demonstrate Python type casting
- Iterate through a dictionary
- Explain the Python conditional statement:

    ```python
    if __name__=="__main__":
    ```
## Lab Instructions

### Setting up your Linux Directory

Log onto any lab machine.  On the desktop, right click your mouse and select to open a terminal window. A box should appear on the screen with a prompt and cursor. 

Here are a few key commands to navigate the Linux file system:

- cd ~ (This navigates to your home directory).
- cd .. (This navigates one directory level up).
- mkdir labs (makes a directory at the current level called 'labs').
- rmdir labs (remove the directory named 'labs').
- ls (list the contents of your directory - yes, that is a lower-case L)
- ls-al (list the contents of your directory in more detail)

Execute commands to complete the following:

    - Navigate to your home directory.
    - List the contents of that directory.
    - Make a new directory called labs, if you did not previously.
    - Navigate into the new labs directory.
    - List the contents of that directory.
    - Make a new directory from that position called lab05.
    - List the contents of the directory to verify you have the new directory.
    - Navigate into the lab05 directory, and verify the contents are empty.
    - This is where you should download your lab Python files from GitHub classroom.


### Python Programming 
Notice in the files portion of your screen, you have three files: README.md (this file), change.py, and test_change.py.  For this assignment, you will only modify change.py. You should not modify any other file or this may cause your tests to fail.  

Download both change.py and test_change.py to your lab05 directory. 

#### There are two main ways to download the code for the lab.
1. From the main repository page, use the green code button to select download a zip of all the lab files.
2. You can navigate to a particular file and select the download icon to download each individual Python file (.py file).  I recommend this method.

#### Use any text editor or VS Code to update the make_change function in change.py. 
The function make_change(amount) expects a dollar amount as a float in the format #.## where # represents any digit.  The function returns a completed dictionary with four key, values pairs: 'quarters', 'dimes', 'nickels', and 'pennies'. In the function, you will calculate the minimum number of coins for that dollar amount using type casting, floor division, and modulus.

```python
# Floor division returns the quotient
# Modulus returns the remainder
# Try using them at the Python interpreter prompt
9 // 4 = 2
9 %  4 = 1 
```
Notice in this lab that your main program portion of the code begins with an interesting conditional statement:

```python
if __name__=="__main__":
```
This conditional statement commonly begins the main program portion of a script or program.  It checks whether the current program is being run as the main program or if it is being imported as a module for use by another program. By using  this conditional, you can specify code that should only be executed when the file is run as the main program, and not when it is imported for use by another program. The purpose of introducing this here is so we can use our make_change function in other programs (and tests) without asking for the user input that you will implement in main. 

    - Complete the make_change function as described.
    - In main, prompt the user to input the dollar amount. 
    - Type cast the input to a float and call the make_chage function.
    - The make_change function will return your completed dictionary.
    - In main, iterate through the returned dictionary to print out the solution.
    - For extra practice (not required) consider including the user prompt in a flagged while loop with a terminating condition.
    - From the directory containing the updated file and test file, type the command to run the tests: pytest

If your code is correct, you should PASS 4/4 tests. 

#### Upload / replace or update your modified file in GitHub Classroom:

    The plus button (+) next to the green code button will allow you to create a new file or upload a file.

    You can modify the current Python file in GitHub, or just upload your completed version.

    Select your uploaded file in GitHub Classroom and choose to edit the file (using the pencil icon).  Modify the initial comment line at the top to force a new Commit. 
    
    Commit the change, and your program will be submitted.
    
    You can verify the test results from the Actions tab by selecting the last Update message.
    
    The autograder should give you credit for completing the lab. For this lab, you should pass 4/4 tests.


#### Lab grading is very simple:

    +1 point for attending and completing the in-person lab.
    
    +1/2 point for successfully committing updated code to your lab's GitHub repository.
    
    +1/2 point when your code passes over 75% of the tests for that week. 

