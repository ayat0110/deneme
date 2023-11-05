import random
import string

def generate_password(length):
    if length < 4:
        print("Password length should be at least 4 characters.")
        return

    # Define character sets for each category
    uppercase_letters = string.ascii_uppercase
    lowercase_letters = string.ascii_lowercase
    digits = string.digits
    special_characters = string.punctuation

    # Make sure we have at least one character from each category
    password = (
        random.choice(uppercase_letters) +
        random.choice(lowercase_letters) +
        random.choice(digits) +
        random.choice(special_characters)
    )

    # Fill the remaining password length with random characters
    remaining_length = length - 4
    all_characters = uppercase_letters + lowercase_letters + digits + special_characters
    password += ''.join(random.choice(all_characters) for _ in range(remaining_length))

    # Shuffle the password to make it more random
    password_list = list(password)
    random.shuffle(password_list)
    return ''.join(password_list)

# Get user input for password length
password_length = int(input("Enter the length of the password: "))
strong_password = generate_password(password_length)
print("Generated strong password:", strong_password)