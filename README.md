# 💻 Algorithms - Playing with passphrases

## Table of Contents
- [Introduction](#introduction)
- [The Task](#the-task)
- [Features](#features)
- [Installation](#installation)
- [Contact](#contact)

## 📖 Introduction
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One of them is the task algorithm.

## 🎯 The Task
Given a text in capital letters, which may include digits and non-alphabetic characters:

1. **Circular Shift of Letters**: Shift each letter by a given number but the transformed letter must be a letter (e.g., shifting 'Z' by 2 results in 'B').

2. **Digit Complement**: Replace each digit by its complement to 9.

3. **Preserve Non-Alphabetic Characters**: Non-alphabetic and non-digit characters remain unchanged.

4. **Positional Case Conversion**: Downcase each letter in odd position, upcase each letter in even position (the first character is in position 0).

5. **Reverse the Result**: Reverse the entire resulting string.


**🔍 For Example:**

if the input text is "BORN IN 2015!", and the circular shift number is 1:

1 + 2 + 3 -> "CPSO JO 7984!"

4 -> "CpSo jO 7984!"

5 -> "!4897 Oj oSpC"

```bash
playPass("BORN IN 2015!", 1) // should return "!4897 Oj oSpC"
```

## ✨ Features
- Handles texts containing capital letters, digits, and non-alphabetic characters.
- Ensures circular shifting of letters to maintain alphabetic sequence.
- Converts digits to their complementary values to 9 for encryption purposes.
- Adjusts letter casing based on their position in the transformed string.
- Reverses the final transformed string to enhance security and uniqueness.


## 📥 Installation
To use the Morse code decoder, simply clone this repository and include the function in your project.

```bash
git clone https://github.com/achiyat/Algorithms-playing-with-passphrases.git
```
## 📞 Contact
📧 Email - [achiya308@gmail.com](mailto:achiya308@gmail.com)

🔗 linkedin - [https://www.linkedin.com/in/achiya-tzuriel/](https://www.linkedin.com/in/achiya-tzuriel/)

🔗 Project Link: [https://github.com/achiyat/Algorithms-playing-with-passphrases](https://github.com/achiyat/Algorithms-playing-with-passphrases)

Thanks for visiting my GitHub profile! 😊
Achiya Tzuriel 
