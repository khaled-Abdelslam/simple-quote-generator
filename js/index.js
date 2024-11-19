function randomQuote() {
  var quote = [
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“If you tell the truth, you don't have to remember anything.”"
  ];

  var author = [
    "― Frank Zappa", 
    "― Marcus Tullius Cicero",
    "― Mae West",
    "― Mahatma Gandhi",
    "― Mark Twain"

];

  var num = Math.floor(Math.random() * quote.length);

  document.getElementById("quote-p").innerHTML = quote[num];
  document.getElementById("author").innerHTML = author[num];
}



