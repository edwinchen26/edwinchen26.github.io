console.clear();

const PI = Math.PI;
const h1 = document.querySelector("h1");

class Context {
  constructor(onEnd) {
    this.onEnd = onEnd;
    this.width = 21;
    this.height = 21;
    if (this.load()) {
      console.log("LOADING FROM LOCAL");
      this.updateArea(this.areaCoords());
      h1.innerText = `${this.score}/${this.moves} ${this.area.key}`;
    } else {
      console.log("LOADING FROM DEFAULT");
      this.reset();
      this.save();
    }
    window.addEventListener("keydown", e => {
      e.preventDefault();
      let code = e.keyCode;
      if (!this.directionKeys.includes(code)) return;
      this.code = code;
      this.move();
    });
    window.addEventListener("keyup", e => {
      e.preventDefault();
      let code = e.keyCode;
      if (!this.directionKeys.includes(code)) return;
      if (this.code === code) this.code = null;
    });
  }

  reset() {
    this.score = 0;
    this.moves = 0;
    this.history = [];
    this.historyCheck = [];
    this.conquered = {};
    this.x = Math.floor(this.width * 0.5);
    this.y = Math.floor(this.height * 0.5);
    this.updateArea(this.areaCoords());
  }

  areaCoords() {
    let x = Math.floor(this.x / this.width),
      y = Math.floor(this.y / this.height);
    return { x, y, key: `${x},${y}` };
  }

  set x(val) {
    this.relX = this._rel(val, this.width);
    this._x = val;
  }
  set y(val) {
    this.relY = this._rel(val, this.height);
    this._y = val;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }

  move() {
    if (!this.code) return;
    let coords = [0, 0];
    if (this.code === this.direction.S) coords = this.directionFactors.S;
    else if (this.code === this.direction.N) coords = this.directionFactors.N;
    else if (this.code === this.direction.W) coords = this.directionFactors.W;
    else if (this.code === this.direction.E) coords = this.directionFactors.E;
    let [x, y] = coords;

    let areaCoords = this.areaCoords();
    let histVal = [this.relX, this.relY, areaCoords.x, areaCoords.y];
    this.history.push(histVal);
    this.historyCheck.push(histVal.join("-"));
    this.history = this.score === 0 ? [] : this.history.slice(this.score * -1);
    this.historyCheck =
      this.score === 0 ? [] : this.historyCheck.slice(this.score * -1);
    this.x += x;
    this.y += y;
    let currArea = this.areaCoords();
    let newArea = areaCoords.key !== currArea.key;
    if (newArea) this.updateArea(currArea);
    this._collisions(x, y);
    this.moves++;
    h1.innerText = `${this.score}/${this.moves} ${this.area.key}`;
    this.save();
  }

  updateArea(currArea) {
    this.area = this.conquered[currArea.key];
    if (this.area) {
      // console.log('OLD AREA');
    } else {
      // console.log('NEW AREA');
      this.area = this._buildArea(currArea);
      this.conquered[currArea.key] = this.area;
    }
  }

  save() {
    let obj = {
      moves: this.moves,
      score: this.score,
      history: this.history,
      historyCheck: this.historyCheck,
      conquered: this.conquered,
      x: this.x,
      y: this.y
    };
    localStorage.setItem("SNAKE", JSON.stringify(obj));
  }

  load() {
    let obj = localStorage.getItem("SNAKE");
    if (obj) {
      obj = JSON.parse(obj);
      this.moves = obj.moves;
      this.score = obj.score;
      this.history = obj.history;
      this.historyCheck = obj.historyCheck;
      this.conquered = obj.conquered;
      this.x = obj.x;
      this.y = obj.y;
      return true;
    }
    return false;
  }

  _rel(position, max) {
    if (position >= 0) return position % max;
    return (max - Math.abs(position) % max) % max;
  }

  _buildArea({ x, y, key }) {
    let self = this,
      keys = gKeys(),
      dist = Math.min(1, Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) / 100),
      { obstacles, token } = gLayout(key, dist);
    token.exists = true;
    let hue = Math.atan2(y - 0, x - 0) * 180 / PI,
      sat = Math.round(100 * dist);
    // sat = distance, HUE = radial position
    return {
      x,
      y,
      key,
      keys,
      hue,
      sat,
      token,
      obstacles
    };

    function gLayout(key, dist) {
      let v = new Math.seedrandom(key)
        .quick()
        .toFixed(14)
        .split(".")[1];
      let obstacles = {};
      if (key !== "0,0") {
        for (let i = 2; i < v.length; i += 2) {
          let x = location(v[i], self.width),
            y = location(v[i + 1], self.height);
          obstacles[x] = obstacles[x] || {};
          obstacles[x][y] = true;
        }
      }
      let tokenX = location(v[0], self.width),
        tokenY = location(v[1], self.height);
      if (obstacles[tokenX]) delete obstacles[tokenX];
      let token = { x: tokenX, y: tokenY };
      return { obstacles, token };
    }

    function gKeys() {
      let W = gkey(x - 1, y),
        N = gkey(x, y - 1),
        NW = gkey(x - 1, y - 1),
        NE = gkey(x + 1, y - 1),
        E = gkey(x + 1, y),
        S = gkey(x, y + 1),
        SW = gkey(x - 1, y + 1),
        SE = gkey(x + 1, y + 1);

      return { W, N, NW, NE, E, S, SW, SE };

      function gkey(x, y) {
        return `${x},${y}`;
      }
    }

    function location(val, fact) {
      return Math.round(parseInt(val) / 10 * (fact - 2)) + 1;
    }
  }

  _collisions(x, y) {
    let hitObstacle =
      this.area.obstacles[this.relX] &&
      this.area.obstacles[this.relX][this.relY];
    let hitSelf = this.historyCheck.includes(
      [this.relX, this.relY, this.area.x, this.area.y].join("-")
    );
    if (hitObstacle || hitSelf) {
      console.log("COLLIDE!", { hitSelf, hitObstacle });
      this.onEnd({ hitSelf, hitObstacle });
      this.x -= x;
      this.y -= y;
    }
    let hitToken =
      this.relX === this.area.token.x && this.relY === this.area.token.y;
    if (hitToken) {
      this.area.token.exists = false;
      this.score++;
      this.area.obstacles = {};
    }
  }

  get directionKeys() {
    return [37, 38, 39, 40];
  }

  get directionFactors() {
    return { W: [-1, 0], N: [0, -1], E: [1, 0], S: [0, 1] };
  }

  get direction() {
    return { W: 37, N: 38, E: 39, S: 40 };
  }
}

class Engine {
  constructor(context) {
    this.context = context;
    this.update();

    this.tick = 0;
  }

  update() {
    this.width = this.context.width;
    this.height = this.context.height;
    this.cvs = document.querySelector("main canvas:first-child");
    this.cvs.width = this.width * 3;
    this.cvs.height = this.height * 3;
    this.ctx = this.cvs.getContext("2d");
    this.cvsMap = document.querySelector("canvas:not(:first-child)");
    this.cvsMap.width = this.width * 3;
    this.cvsMap.height = this.height * 3;
    this.ctxMap = this.cvsMap.getContext("2d");
  }

  start() {
    this.running = true;
    this.run();
  }

  stop() {
    this.running = false;
  }

  run() {
    if (!this.running) return;
    window.requestAnimationFrame(this.run.bind(this));
    this.tick++;
    let rat = Math.abs((this.tick % 50) / 49 * 2 - 1);

    this._drawAreas();
    this._drawMap();

    let self = this;

    let len = this.context.history.length - 1;
    let areaX = this.context.area.x,
      areaY = this.context.area.y;
    for (let i = len; i > len - this.context.score; i--) {
      let hist = this.context.history[i];
      if (hist) {
        let offX = (areaX - hist[2]) * -this.width,
          offY = (areaY - hist[3]) * -this.height;
        if (areaX !== hist[2] || areaY !== hist[3])
          this.ctx.fillStyle = `hsl(0, 0%, 50%)`;
        else this.ctx.fillStyle = `hsl(0, 0%, 70%)`;
        let pos = rel(hist[0] + offX, hist[1] + offY);
        this.ctx.fillRect(pos.x, pos.y, 1, 1);
      }
    }

    this.ctx.fillStyle = `hsl(0, 0%, 100%)`;
    let x = Math.round(this.width * 0.5) + this.width,
      y = Math.round(this.height * 0.5) + this.height;
    this.ctx.fillRect(x, y, 1, 1);

    this.ctx.fillStyle = `hsl(${rat * 45}, 100%, 70%)`;
    if (this.context.area.token.exists) {
      let token = rel(this.context.area.token.x, this.context.area.token.y);
      this.ctx.fillRect(token.x, token.y, 1, 1);
    }

    function rel(x, y) {
      return {
        x: self.width + x - self.context.relX + Math.round(self.width * 0.5),
        y: self.height + y - self.context.relY + Math.round(self.height * 0.5)
      };
    }
  }

  _drawMap() {
    this.ctxMap.clearRect(0, 0, this.width * 3, this.height * 3);
    let cX = this.context.area.x,
      cY = this.context.area.y;
    let halfW = Math.round(this.width * 0.5) + this.width - 1,
      halfH = Math.round(this.height * 0.5) + this.height - 1;
    Object.values(this.context.conquered).forEach(({ x, y, hue, sat }) => {
      let main = x === cX && y === cY,
        relX = x - cX + halfW,
        relY = y - cY + halfH;
      this.ctxMap.fillStyle = main
        ? `hsl(${hue}, ${sat}%, 95%)`
        : `hsl(${hue}, ${sat}%, 35%)`;
      this.ctxMap.fillRect(relX, relY, 1, 1);
    });
  }

  _drawAreas() {
    this.ctx.clearRect(0, 0, this.width * 3, this.height * 3);
    this._drawArea(this.context.area, this.region.C, true);
    let N = this.context.conquered[this.context.area.keys.N],
      NW = this.context.conquered[this.context.area.keys.NW],
      NE = this.context.conquered[this.context.area.keys.NE],
      E = this.context.conquered[this.context.area.keys.E],
      S = this.context.conquered[this.context.area.keys.S],
      SW = this.context.conquered[this.context.area.keys.SW],
      SE = this.context.conquered[this.context.area.keys.SE],
      W = this.context.conquered[this.context.area.keys.W];
    this._drawArea(N, this.region.N);
    this._drawArea(NW, this.region.NW);
    this._drawArea(NE, this.region.NE);
    this._drawArea(E, this.region.E);
    this._drawArea(S, this.region.S);
    this._drawArea(SW, this.region.SW);
    this._drawArea(SE, this.region.SE);
    this._drawArea(W, this.region.W);
  }

  get region() {
    return {
      NW: [0, 0],
      N: [1, 0],
      NE: [2, 0],
      W: [0, 1],
      C: [1, 1],
      E: [2, 1],
      SW: [0, 2],
      S: [1, 2],
      SE: [2, 2]
    };
  }

  _drawArea(area, [offX, offY], main = false) {
    if (!area) return;
    let { hue, sat } = area;
    let relX =
        offX * this.width - this.context.relX + Math.round(this.width * 0.5),
      relY =
        offY * this.height - this.context.relY + Math.round(this.height * 0.5);
    this.ctx.fillStyle = main
      ? `hsl(${hue}, ${sat}%, 15%)`
      : `hsl(${hue}, ${sat}%, 10%)`;
    this.ctx.fillRect(relX, relY, this.width, this.height);
    this.ctx.fillStyle = main
      ? `hsl(${hue}, ${sat}%, 10%)`
      : `hsl(${hue}, ${sat}%, 5%)`;
    Object.keys(area.obstacles).forEach(x => {
      Object.keys(area.obstacles[x]).forEach(y => {
        this.ctx.fillRect(parseInt(x) + relX, parseInt(y) + relY, 1, 1);
      });
    });
  }
}

let context = new Context(onEnd);
let engine = new Engine(context);

function onEnd({ hitSelf, hitObstacle }) {
  if (hitSelf)
    alert(
      `You hit yourself and died in sector ${this.area.key}. You scored ${
        context.score
      } in ${context.moves} moves.`
    );
  else
    alert(
      `You hit an obstacle and died in sector ${this.area.key}. You scored ${
        context.score
      } in ${context.moves} moves.`
    );
  context.reset();
}

engine.start();
