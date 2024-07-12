// класс хранящий данные о персонажах команды в поле типа Set
export default class Team {
  constructor() {
    this.members = new Set();
  }

  /* добавляем выбранного персонажа в команду (объект класса Character), если объект существует
  в команде - дублирования происходить не должно, должна генерироваться ошибка */
  add(Character) {
    if (!this.members.has(Character)) {
      this.members.add(Character);
    } else {
      throw new Error('Персонаж уже есть в команде');
    }
  }

  // добавляем произвольное количество персонажей в команду
  addAll(...Character) {
    Character.forEach((character) => this.members.add(character));
  }

  // производим конвертацию Set в массив
  toArray() {
    return Array.from(this.members);
  }
}
