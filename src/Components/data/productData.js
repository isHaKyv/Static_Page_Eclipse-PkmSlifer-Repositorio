import obsidian_flames from "../images/obsidian_flames.png";
import boosterpack_ob from "../images/booster_packs_ob.png";
import yigiohboosyer from "../images/yugioh_booster.png";
import yugiohlegend from "../images/yugi_lenged_collec.png";
import FerroPala from "../images/ETB_FERRPALA.png";
import FerroSala from "../images/ETB_SALA.png";
import AtDS from "../images/AT DRAGON SHIELD.png";
import Kuromi from "../images/Kuromi Cover.png";
import chilling from "../images/Chilling.png";
import celeETB from "../images/Celebrations_ETB.png";
import PkmAca from '../images/Pkm_Academy.png';
import FuSt from '../images/Fusion_Strike.png';
import GalarRapi from '../images/GalarianRapi.png';
import DragonS from '../images/Dragon Shield Matte Sleeves - Art Sleeves Series.png';
import Case100 from '../images/Ultimate Guard Flip Deck Case 100+.png';
import Profolio from '../images/BCW 9-Pocket Pro-Folio LX.png';
import Katana from '../images/ultimate guard katana sleeves.png';
import Dex from '../images/Dex Protection.png';
import CardStorage from '../images/Pro-Player 500-Card Storage Box.png';
import UltimateGuard from '../images/Ultimate Guard 400.png';
import Nest1000 from '../images/Dragon Shield Nest 1000.png';
import Blue from '../images/BCW Deck Case LX.png';
import PhantomRage from '../images/Caja de refuerzo Yu-Gi-Oh! Phantom Rage.png';
import MaximumGold from '../images/Colección Premium YuGiOh Maximum Gold.png';
import StructureDeck from '../images/Mazo de estructura Yu-Gi-Oh! Sacred Beasts Structure Deck.png';
import Lightning from '../images/Lightning.png';
import Latas from '../images/Colección de latas Yugioh 2023 Mega Tin.png';


/* Plantilla de productos
 {
   name: 
   price: 
   image: 
   category: 
   seccion: 
   cantidad: 
 },
*/

const products = [
  {
    name: "Elite Trainer Box Paradox Rift Bramaluna",
    price: "999",
    image: FerroSala,
    category: "Hot Topic",
    det:
      "Sumérgete en el intrigante universo de Paradox Rift con nuestra Elite Trainer Box. Descubre cartas exclusivas, accesorios de primera calidad y una guía detallada, todo en una caja con diseño único. Almacena con estilo y prepárate para desafiar la realidad con la Elite Trainer Box de Paradox Rift. ¡Mejora tu colección y estrategia de juego ahora!",
    seccion: "Pokemon", 
    cantidad: "10",
  },
  {
    name: "Elite Trainer Box Paradox Rift Ferro Paladin",
    price: "999",
    image: FerroPala,
    category: "Hot Topic",
    det:
      "Sumérgete en el intrigante universo de Paradox Rift con nuestra Elite Trainer Box. Descubre cartas exclusivas, accesorios de primera calidad y una guía detallada, todo en una caja con diseño único. Almacena con estilo y prepárate para desafiar la realidad con la Elite Trainer Box de Paradox Rift. ¡Mejora tu colección y estrategia de juego ahora!",
    seccion: "Pokemon",
    cantidad: "8", 
  },

  {
    name: "Obsidian Flames ETB",
    price: "790",
    image: obsidian_flames,
    category: "Ofertas",
    det:
      "Desata el poder de Obsidian Flames con nuestra Elite Trainer Box. Cartas exclusivas, accesorios de calidad y una guía práctica en una caja elegante. ¡Impulsa tu experiencia de juego y colección a nuevas alturas!",
    seccion: "Pokemon", 
    cantidad: "15", 
  },
  {
    name: "Obsidian Flames Booster Pack",
    price: "1690",
    image: boosterpack_ob,
    category: "Ofertas",
    det:
      "Desata la emoción con nuestro Booster Pack de Pokémon Obsidian Flames. Cada sobre contiene la promesa de aventuras emocionantes y encuentros con Pokémon fascinantes. Descubre cartas exclusivas de la serie Obsidian Flames, con ilustraciones impresionantes y habilidades estratégicas. ¿Estás listo para capturar la llama de la emoción y fortalecer tu mazo? Sumérgete en la magia de Pokémon con cada apertura de este Booster Pack de Obsidian Flames. ¡Atrapa la emoción y haz crecer tu colección hoy!",
    seccion: "Pokemon", 
    cantidad: "20", 
  },
  {
    name: "Yugioh Booster Pack - Saga de ojos azules",
    price: "2049 MXN",
    image: yigiohboosyer,
    category: "Hot Topic",
    det:
      "Explora el poder mítico con nuestro Booster Pack de la Saga del Dragón Blanco de Ojos Azules. Cada paquete es una puerta hacia la magia y la estrategia, ofreciendo la posibilidad de desbloquear cartas emblemáticas y poderosas. Sumérgete en la leyenda con la emoción de obtener el codiciado Dragón Blanco de Ojos Azules. ¡Prepárate para la grandeza con cada apertura de este Booster Pack único en su clase!",
    seccion: "YugiOh", 
    cantidad: "5", 
  },
  {
    name: "Yugi-Oh Legendary Collection",
    price: "2220",
    image: yugiohlegend,
    category: "Ofertas",
    det:
      "Revive la épica saga de Yu-Gi-Oh con nuestra Legendary Collection. Esta colección icónica reúne cartas legendarias, incluyendo algunas de las más buscadas y poderosas. Con un diseño exclusivo, la Legendary Collection es un tesoro para coleccionistas y duelistas. ¡Sumérgete en la nostalgia y eleva tu juego con esta colección legendaria de Yu-Gi-Oh!",
    seccion: "YugiOh", 
    cantidad: "12", 
  },
  {
    name: "Dragon Shield Cover Cards Black",
    price: "250",
    image: AtDS,
    category: "Variados",
    det:
      "Protege tus cartas con estilo y durabilidad con las fundas Dragon Shield AT en elegante negro. Estas fundas de alta calidad ofrecen una capa adicional de seguridad para tus cartas, manteniéndolas en perfecto estado. Con un ajuste perfecto y una sensación premium, las fundas Dragon Shield AT en negro son la elección ideal para los coleccionistas y jugadores serios. ¡Mantén tu mazo seguro y destacando con estas fundas Dragon Shield AT en un intenso y clásico color negro!",
    seccion: "Variaditos", 
    cantidad: "18", 
  },
  {
    name: "Kuromi TCG Cover ",
    price: "148",
    image: Kuromi,
    category: "Variados",
    det:
      "Eleva la presentación de tus cartas con nuestras fundas Kuromi. Con el encanto inconfundible de Kuromi, estas fundas no solo ofrecen protección sino también un toque de estilo único. Diseñadas para destacar, estas fundas son ideales para aquellos que buscan fusionar la moda con la funcionalidad. Protege tus cartas con el toque distintivo de Kuromi y haz que tu mazo se destaque en cada partida. ¡Haz una declaración de estilo en cada juego con nuestras exclusivas fundas Kuromi!",
    seccion: "Variaditos",
    cantidad: "25", 
  },

// ------------------------------Pokemon--------------------------------

  {
    name: "Caja de refuerzo Pokémon TCG: Chilling Reign",
    price: "699",
    image: chilling, // Agrega la URL correspondiente
    category: "Pokemon TCG",
    det:
      "Sumérgete en el frío encanto de Chilling Reign, una expansión que presenta nuevas formas de Pokémon y emocionantes cartas de entrenador. Descubre paisajes nevados y enfrenta desafíos con poderosas cartas de hielo y nuevas estrategias tácticas.",
      seccion: "Pokemon",
    cantidad: "20",
  },
  {
    name: "Colección Especial Pokémon TCG: Celebrations Elite Trainer Box",
    price: "999",
    image: celeETB, 
    category: "Pokemon TCG",
    det:
      "Celebra el legado de Pokémon con la Elite Trainer Box de Celebrations. Esta colección especial incluye una selección única de cartas que rinden homenaje a momentos icónicos de la historia de Pokémon. Además, disfruta de accesorios exclusivos para entrenadores de élite.",
      seccion: "Pokemon",
    cantidad: "15",
  },
  {
    name: "Set de inicio Pokémon TCG: Battle Academy",
    price: "299",
    image: PkmAca, 
    category: "Pokemon TCG",
    det:
      "Inicia tu viaje en el mundo del Pokémon TCG con el Battle Academy Set. Este set de inicio proporciona todo lo que necesitas para aprender a jugar y sumergirte en emocionantes duelos Pokémon. Incluye mazos preconstruidos, guías de juego y accesorios esenciales.",
      seccion: "Pokemon",
    cantidad: "25",
  },
  {
    name: "Deck temático Pokémon TCG: Galarian Rapidash",
    price: "499",
    image: GalarRapi, // Agrega la URL correspondiente
    category: "Pokemon TCG",
    det:
      "Domina las llanuras de Galar con el poder de Rapidash. Este deck temático te sumerge en la región de Galar con cartas que capturan la esencia y la velocidad de este elegante Pokémon. ¡Prepárate para desatar la galopante fuerza de Galarian Rapidash!",
      seccion: "Pokemon",
    cantidad: "18",
  },
  {
    name: "Caja de refuerzo Pokémon TCG: Sword & Shield - Fusion Strike",
    price: "799",
    image: FuSt, // Agrega la URL correspondiente
    category: "Pokemon TCG",
    det:
      "Fusiona estrategias y desata nuevas combinaciones de poder con la expansión Fusion Strike. Esta caja de refuerzo presenta cartas que destacan la sinergia entre Pokémon de diferentes tipos. Descubre la emocionante fusión de tácticas en cada sobre.",
      seccion: "Pokemon",
    cantidad: "22",
  },

//------------------------------YugiOh------------------------------------------

  {
    name: "Caja de refuerzo Yu-Gi-Oh! Phantom Rage",
    price: "899",
    image: PhantomRage, // Agrega la URL correspondiente
    category: "Yu-Gi-Oh!",
    det:
      "Adéntrate en la oscuridad con Phantom Rage, una expansión que introduce nuevas formas de magia y monstruos. Desata el poder de los fantasmas y domina a tus oponentes con cartas de alta potencia estratégica.",
    seccion: "YugiOh",
    cantidad: "12",
  },
  {
    name: "Colección Premium Yu-Gi-Oh!: Maximum Gold",
    price: "1299",
    image: MaximumGold, // Agrega la URL correspondiente
    category: "Yu-Gi-Oh!",
    det:
      "Experimenta el lujo del oro con la colección Maximum Gold. Cada sobre contiene cartas brillantes en dorado premium, destacando algunas de las cartas más icónicas de la historia de Yu-Gi-Oh!. Un deleite visual para cualquier coleccionista.",
    seccion: "YugiOh",
    cantidad: "10",
  },
  {
    name: "Mazo de estructura Yu-Gi-Oh!: Sacred Beasts Structure Deck",
    price: "699",
    image: StructureDeck, // Agrega la URL correspondiente
    category: "Yu-Gi-Oh!",
    det:
      "Despierta a las bestias sagradas con este mazo de estructura. Basado en las formidables bestias mitológicas, este deck te permite invocar y controlar poderosos monstruos que pueden cambiar el rumbo de cualquier duelo.",
    seccion: "YugiOh",
    cantidad: "15",
  },
  {
    name: "Caja de refuerzo Yu-Gi-Oh! Lightning Overdrive",
    price: "799",
    image: Lightning, // Agrega la URL correspondiente
    category: "Yu-Gi-Oh!",
    det:
      "Siente la velocidad y la electricidad con Lightning Overdrive. Esta expansión presenta nuevas cartas que canalizan la energía relámpago para desencadenar efectos asombrosos. Prepárate para la tormenta.",
    seccion: "YugiOh",
    cantidad: "18",
  },
  {
    name: "Colección de latas Yu-Gi-Oh!: 2023 Mega Tin",
    price: "499",
    image: Latas, // Agrega la URL correspondiente
    category: "Yu-Gi-Oh!",
    det:
      "Las latas Mega Tin del 2023 son una obra maestra coleccionable. Cada lata contiene cartas promocionales exclusivas y una selección de cartas poderosas para mejorar tus estrategias de juego. Un tesoro para cualquier duelista ambicioso.",
    seccion: "YugiOh",
    cantidad: "20",
  },

//---------------------Accessorios-----------------------


  {
    name: "Dragon Shield Matte Sleeves - Art Sleeves Series",
    price: "199",
    image: DragonS, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det: "Dale un toque artístico a tu mazo con estas fundas protectoras mate de Dragon Shield. La serie Art Sleeves presenta ilustraciones únicas y ofrece una protección duradera para tus cartas favoritas.",
    seccion: "Variaditos",
    cantidad: "20",
  },
  {
    name: "Ultimate Guard Flip Deck Case 100+",
    price: "279",
    image: Case100, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det:
      "La Flip Deck Case de Ultimate Guard es la elección perfecta para llevar tus mazos a cualquier parte. Con capacidad para más de 100 cartas con fundas, esta caja duradera ofrece un acceso rápido y seguro a tus cartas.",
    seccion: "Variaditos",
    cantidad: "12",
  },
  {
    name: "BCW 9-Pocket Pro-Folio LX",
    price: "129",
    image: Profolio, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det:
      "Mantén tus cartas organizadas con el Pro-Folio LX de BCW. Este portafolios de 9 bolsillos es ideal para exhibir y proteger tus cartas de colección, ya sea en casa o mientras te desplazas.",
    seccion: "Variaditos",
    cantidad: "18",
  },
  {
    name: "Ultimate Guard Katana Sleeves",
    price: "149",
    image: Katana, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det:
      "Experimenta la suavidad y la durabilidad con las fundas Katana de Ultimate Guard. Estas fundas de alta calidad ofrecen una protección premium para tus cartas, mientras que su claridad permite que los detalles brillen.",
    seccion: "Variaditos",
    cantidad: "25",
  },
  {
    name: "Dex Protection Supreme Game Chest",
    price: "899",
    image: Dex, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det:
      "La Supreme Game Chest de Dex Protection es una solución elegante para transportar y almacenar tus mazos. Con compartimentos ajustables y espacio para dados y accesorios, es la opción ideal para jugadores organizados.",
    seccion: "Variaditos",
    cantidad: "8",
  },
  {
    name: "Pro-Player 500-Card Storage Box",
    price: "299",
    image: CardStorage, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det:
      "Almacena tus cartas con seguridad en esta robusta caja de almacenamiento de 500 cartas de Pro-Player. Con un diseño resistente y duradero, es perfecta para guardar mazos múltiples o una colección en crecimiento.",
    seccion: "Variaditos",
    cantidad: "15",
  },
  {
    name: "Ultimate Guard Arkhive 400+",
    price: "549",
    image: UltimateGuard, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det:
      "La Arkhive 400+ de Ultimate Guard es una solución de almacenamiento versátil con capacidad para más de 400 cartas con fundas. Su diseño modular permite apilar varias cajas de forma segura.",
    seccion: "Variaditos",
    cantidad: "10",
  },
  {
    name: "Dragon Shield Nest 1000",
    price: "1299",
    image: Nest1000, // Agrega la URL correspondiente
    category: "Variados",
    det:
      "Maximiza tu espacio de almacenamiento con el Dragon Shield Nest 1000. Este estuche rígido puede contener hasta 1000 cartas con fundas y ofrece una protección robusta para tu colección.",
    seccion: "Variaditos",
    cantidad: "5",
  },
  {
    name: "BCW Deck Case LX",
    price: "149",
    image: Blue, // Agrega la URL correspondiente
    category: "Accesorios TCG",
    det:
      "Protege tus mazos con estilo con el Deck Case LX de BCW. Esta caja resistente cuenta con cierre magnético y puede contener hasta 80 cartas con fundas, manteniendo tus mazos seguros durante tus partidas.",
    seccion: "Variaditos",
    cantidad: "20",
  },
  // ... Otros productos ...

];

export default products; 
