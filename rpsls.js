// tu wstawcie kod pobierania wyboru od komputera
var computerChoice;

// tu wstaw tablicę opcji
var choiceArray;

// tu wstaw mechanizm gry
var game = function(userChoice, computerChoice) {

}

// tu pobieramy od użytkownika jego wybór
  var buttons = document.getElementsByTagName('button');
  var buttonsCount = buttons.length;
  var userChoice;
  for (var i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        userChoice = this.innerHTML;
        game(userChoice, computerChoice)
    };
  }

  

// pamiętaj o wypisaniu wyboru użytkownika i komputera oraz wyniku gry na stronie we właściwych miejscach

