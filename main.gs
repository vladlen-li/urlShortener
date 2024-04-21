function generateShortURL(longURL) {
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var shortURL = '';
  for (var i = 0; i < 6; i++) {
    shortURL += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  shortURL += '.us'
  return shortURL;
}

// Function to generate short URL and store it in the spreadsheet
function generateAndStoreShortURL(longURL) {
  var sheet = SpreadsheetApp.openById("1qTF_yRrJ_DD12bPBjbG4_5FyqIvSHwv0VM_AX1vYc9I");
  var shortURL = generateShortURL(longURL);
  sheet.appendRow([longURL, shortURL]);
  return shortURL;
}

// Function to open the long URL associated with the short URL
function openLongURL(shortURL) {
  var sheet = SpreadsheetApp.openById("1qTF_yRrJ_DD12bPBjbG4_5FyqIvSHwv0VM_AX1vYc9I");
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    if (data[i][1] === shortURL) {
      var longURL = data[i][0];
      return longURL;
    }
  }
  return null;
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}