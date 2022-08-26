class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  create() {
    this.add.text(20,20, "Loading game..."); // x & y coords + text to display
    this.scene.start("playGame");
  }

}