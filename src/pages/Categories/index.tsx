import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    description:
      'Resident Evil 4 é um jogo de ação e aventura desenvolvido e publicado pela Capcom. É o quarto título principal da série Resident Evil.',
    image: resident,
    category: 'Ação',
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows 10/11'
  },
  {
    id: 2,
    title: 'Diablo',
    description:
      'Diablo é um jogo de RPG de ação desenvolvido e publicado pela Blizzard Entertainment. É o primeiro título da série Diablo.',
    image: diablo,
    category: 'Ação',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS5'
  },
  {
    id: 3,
    title: 'Star Wars Jedi: Survivor',
    description:
      'Star Wars Jedi: Survivor é um jogo de ação e aventura desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts.',
    image: starWars,
    category: 'Ação',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS5'
  },
  {
    id: 4,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo de ação e aventura desenvolvido e publicado pela Nintendo.',
    image: zelda,
    category: 'Aventura',
    infos: ['10%', 'R$ 250,00'],
    system: 'Nintendo Switch'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Resident Evil 4',
    description:
      'Resident Evil 4 é um jogo de ação e aventura desenvolvido e publicado pela Capcom. É o quarto título principal da série Resident Evil.',
    image: resident,
    category: 'Ação',
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows 10/11'
  },
  {
    id: 6,
    title: 'Diablo',
    description:
      'Diablo é um jogo de RPG de ação desenvolvido e publicado pela Blizzard Entertainment. É o primeiro título da série Diablo.',
    image: diablo,
    category: 'Ação',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS5'
  },
  {
    id: 7,
    title: 'Star Wars Jedi: Survivor',
    description:
      'Star Wars Jedi: Survivor é um jogo de ação e aventura desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts.',
    image: starWars,
    category: 'Ação',
    infos: ['10%', 'R$ 250,00'],
    system: 'PS5'
  },
  {
    id: 8,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo de ação e aventura desenvolvido e publicado pela Nintendo.',
    image: zelda,
    category: 'Aventura',
    infos: ['10%', 'R$ 250,00'],
    system: 'Nintendo Switch'
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
