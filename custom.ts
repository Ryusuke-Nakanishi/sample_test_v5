/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
* カラフルな炎のパーティクル
*/
enum FlameParticle {
    //% block="🔥 赤い炎"
    RedFlame,
    //% block="🟢 緑の炎"
    GreenFlame,
    //% block="🔵 青い炎"
    BlueFlame,
    //% block="🟣 紫の炎"
    PurpleFlame,
    //% block="🟠 オレンジの炎"
    OrangeFlame
}

/**
 * Custom blocks
 */
//% color=#5B9BD5 icon="\uf06e" block="まほう"
namespace magic {
    //% block="✨ %particle の まほうをつける"
    //% blockExternalInputs=true
    //% particle.defl=FlameParticle.RedFlame
    export function emitParticleAtProjectiles(particle: FlameParticle) {
        // それぞれのエンティティの足元でパーティクルを生成
        mobs.enchant(
            mobs.target(NEAREST_PLAYER),
            "flame",
            1
        )
    }
}
