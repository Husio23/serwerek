import * as alt from 'alt-server';

const clothesMap = {
    hair: 2,
    torso: 3,
    legs: 4,
    bag: 5,
    shoes: 6,
    accesories: 7,
    undershirt: 8,
    armor: 9,
    decals: 10,
    top: 11
}

const propsMap = {
    hat: 0,
    glasses: 1,
    earrings: 2,
    watches: 6,
    bracelets: 7
}

let clothCache = {}

const preparePlayerSkin = (player) => {
    Object.entries(clothCache).forEach(([key, {dlc, drawableId, textureId, isProp}]) => {
        if (!isProp) {
            player.setDlcClothes(alt.hash(dlc ?? ''), clothesMap[key], drawableId, textureId)
        } else {
            player.setDlcProp(alt.hash(dlc ?? ''), propsMap[key], drawableId, textureId);
        }
    })
}

alt.on('playerConnect', (player) => {
    player.model = 'mp_f_freemode_01';

    player.spawn(-157.52, -305.446, 39.73);
})

alt.onClient('client:genderChange', (player, gender) => {
    player.model = gender === 'female' ? 'mp_f_freemode_01' : 'mp_m_freemode_01';
    preparePlayerSkin(player);
})

alt.onClient('client:clothChange', (player, state) => {
    clothCache = state
    preparePlayerSkin(player);
})