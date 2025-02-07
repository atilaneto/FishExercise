var config = {
type: Phaser.AUTO,
width: 800,
height: 600,

scene: {
    preload: preload,
    create: create,
    update: update
}
};

var game = new Phaser.Game(config);

function preload() {
    //precisei rodar o çonsole.log' pois estava com alguns problemas na exibição das imagens.
    console.log("Teste para carregar as imagens...")

    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('coral', 'assets/icon.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('peixe', 'assets/peixes/shark.png');
}

function create() {
    
    this.add.image(400, 300, 'mar');

//posicionando o coral no canto inferior esquerdo.
    this.add.image(400/ 3, 300/0.6, 'coral');
    //posicionando a logo no centro inferior.

    this.add.image(400, 525, 'logo').setScale(0.5);
//aqui tentei posicionar o tubarão no centro da tela no momento de abertura da página, todavia parece não ter funcionado
peixinho = this.add. image(800/ 2, 600/ 2, 'peixe'); 

}



function update() {
    //adicionando controles no peixe, para que ele acompanhe os movimentos do mouse
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}

console.log(resposta)
