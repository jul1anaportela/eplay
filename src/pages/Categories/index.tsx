import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import residentEvil from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: '...',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residentEvil
  },
  {
    id: 2,
    category: 'Ação',
    description: '...',
    title: 'Resident Evil',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: residentEvil
  },
  {
    id: 3,
    category: 'Ação',
    description: '...',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residentEvil
  },
  {
    id: 4,
    category: 'Ação',
    description: '...',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: residentEvil
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: '...',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/04'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: '...',
    title: 'Zelda',
    system: 'Windows',
    infos: ['17/04'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description: '...',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['17/04'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description: '...',
    title: 'Resident Evil',
    system: 'Nintendo Switch',
    infos: ['17/04'],
    image: residentEvil
  }
]

export const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
