const displayText = () => {
  const randomChar = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < 26; i++) {
    randomChar += alphabet[Math.random() * 26 + 1];
  }
  console.log(randomChar);
};

displayText();
