class Piso {
  constructor(x, y, w, h) {
    //propriedades
    //this.

    var options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
  }

  //funções

  show() {
    //centraliza o retangulo
    rectMode(CENTER);

    rect(this.body.position.x, this.body.position.y, this.w, this.h);
  }
}
