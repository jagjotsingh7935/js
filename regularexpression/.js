function extractPhoneNumbers(text) {
    // Regular expression to match phone numbers in the format ###-###-####
    const phoneNumberPattern = /\b\d{3}-\d{3}-\d{4}\b/g;

    // Find all matches in the text
    const phoneNumbers = text.match(phoneNumberPattern);

    // If no phone numbers are found, return an empty array
    return phoneNumbers || [];
}

// Example usage
const text = "Contact us at 123-456-7890 or 987-654-3210 for more information. You can also reach out to our office at 555-123-4567.";
const phoneNumbers = extractPhoneNumbers(text);
console.log(phoneNumbers); // Output: ['123-456-7890', '987-654-3210', '555-123-4567']
