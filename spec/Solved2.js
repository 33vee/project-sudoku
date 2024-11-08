
function solve(board, stroka, colonka, number){
    // тут я проверяю строку на возможность подставить число
    for( let i = 0; i < 9; i +=1){
      if(board[stroka][i] === number){
        return false
      }
    }
    // тут я проверяю колонку на возможность подставить число
    for( let i = 0; i < 9; i +=1){
      if(board[i][colonka] === number){
        return false
      }
    }
    // тут у меня создание проверка внутри квадрат 3х3 с помощью строки и столбца
    const kvadstr = Math.floor(row / 3) * 3;
    const kvadcol = Math.floor(col / 3) * 3;
    for (let a = 0; a < 3; a +=1){
      for (let j = 0; j < 3; j +=1){
        if(board[a + kvadstroka][j + kvadcolonka] === number){
          return false
        }
      }
    }
    return true
  }
  // создание моих индексов и прогон по циклу
  function solved (board){
    for(let stroka = 0; stroka < 9; stroka+=1){ // создание индекс строки
      for(let colonka = 0; colonka < 9; colonka +=1){// создание индекса колонки
        if(board[stroka][colonka] === '-'){ // проверяем совпадение с дефисом
          for(let number = 1; number <= 9; number +=1){// создаем индекс цифры
            if(solve(stroka, colonka, String(number))){
              board[stroka][colonka] = String(number)
              if (solved(board)){
                return true
              }
              board[stroka][colonka]='-'
            }
          }
          return false
        }
      }
    }
    return true
  }