import {
    GiFoxTail,
    GiGemPendant,
    GiHeartEarrings,
    GiKevlarVest,
    GiMuscularTorso,
    GiRolledCloth,
    GiSonicShoes,
    GiTrousers
} from "react-icons/gi";
import {FaRedhat} from "react-icons/fa6";
import {PiShirtFoldedFill} from "react-icons/pi";
import {TbShirtFilled} from "react-icons/tb";
import {BsHandbagFill, BsWatch} from "react-icons/bs";
import {RiEmojiStickerFill} from "react-icons/ri";
import {IoIosGlasses} from "react-icons/io";

export const clothingTypes = [
    {
        name: 'Włosy',
        dictKey: 'hair',
        type: 2,
        icon: <GiFoxTail color="#BF40BF	"/>
    },
    {
        name: 'Tors',
        dictKey: 'torso',
        type: 3,
        icon: <GiMuscularTorso color="#BF40BF	"/>
    },
    {
        name: 'Top',
        dictKey: 'top',
        type: 11,
        icon: <PiShirtFoldedFill color="#BF40BF	"/>
    },
    {
        name: 'Podkoszulek',
        dictKey: 'undershirt',
        type: 8,
        icon: <TbShirtFilled color="#BF40BF	"/>
    },
    {
        name: 'Spodnie',
        dictKey: 'legs',
        type: 4,
        icon: <GiTrousers color="#BF40BF	"/>
    },
    {
        name: 'Buty',
        dictKey: 'shoes',
        type: 6,
        icon: <GiSonicShoes color="#BF40BF	"/>
    },
    {
        name: 'Torba',
        dictKey: 'bag',
        type: 5,
        icon: <BsHandbagFill color="#BF40BF	"/>
    },
    {
        name: 'Akcesorium',
        dictKey: 'accesories',
        type: 7,
        icon: <GiGemPendant color="#BF40BF	"/>
    },
    {
        name: 'Pancerz',
        dictKey: 'armor',
        type: 9,
        icon: <GiKevlarVest color="#BF40BF	"/>
    },
    {
        name: 'Naklejki',
        dictKey: 'decals',
        type: 10,
        icon: <RiEmojiStickerFill color="#BF40BF	"/>
    },
]

export const propTypes = [
    {
        name: 'Czapki',
        dictKey: 'hat',
        type: 0,
        isProp: true,
        icon: <FaRedhat color="#BF40BF	"/>
    },
    {
        name: 'Okulary',
        dictKey: 'glasses',
        type: 1,
        isProp: true,
        icon: <IoIosGlasses color="#BF40BF	"/>
    },
    {
        name: 'Kolczyki',
        dictKey: 'earrings',
        type: 2,
        isProp: true,
        icon: <GiHeartEarrings color="#BF40BF	"/>
    },
    {
        name: 'Zegarki',
        dictKey: 'watches',
        type: 6,
        isProp: true,
        icon: <BsWatch color="#BF40BF	"/>
    },
    {
        name: 'Bransoletki',
        dictKey: 'bracelets',
        type: 7,
        isProp: true,
        icon: <GiRolledCloth color="#BF40BF	"/>
    }
]