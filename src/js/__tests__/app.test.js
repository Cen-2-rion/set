import Team from '../app';

// проверочные данные
const character1 = { name: 'Legolas', class: 'Bowman' };
const character2 = { name: 'Gimli', class: 'Swordsman' };
const character3 = { name: 'Gandalf', class: 'Magician' };

// проверочные тесты
describe('Team', () => {
  const team = new Team();

  test('add a character to the team', () => {
    team.add(character1);
    expect(team.members.size).toBe(1);
  });

  test('duplication should not occur', () => {
    expect(() => team.add(character1)).toThrow('Персонаж уже есть в команде');
  });

  test('add an arbitrary number of characters to the team', () => {
    team.addAll(character1, character2, character3);
    expect(team.members.size).toBe(3);
  });

  test('converting Set to array', () => {
    const membersArray = team.toArray(team.members);
    expect(membersArray).toEqual([character1, character2, character3]);
  });
});
