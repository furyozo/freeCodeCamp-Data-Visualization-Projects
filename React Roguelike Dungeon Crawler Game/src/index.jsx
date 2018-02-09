// node modules and components importing
import React from 'react';
import {render} from 'react-dom';

// import GameMap from './js/components/GameMap.jsx';

function Entity (xcoord, ycoord, type) {
  this.xcoord = xcoord;
  this.ycoord = ycoord;
  this.type = type;
  this.health = 0;
  this.visible = true;
}

// 30x20
var map1 =
[
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0,
  0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
var finalmap =
[
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

var currentMap = [];

var items = ["wooden stick", "brass knucles", "pocket knife", "lead pipe", "machette", "iron sword", "the sword of Achilles", "Mjölnir"];

// main app component
class Game extends React.Component {

  constructor(props) {
    super(props);

    this.getPlayerPosition = this.getPlayerPosition.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.gameLost = this.gameLost.bind(this);
    this.movePlayer = this.movePlayer.bind(this);
    this.checkKey = this.checkKey.bind(this);
    this.initKeys = this.initKeys.bind(this);
    this.spawnItems = this.spawnItems.bind(this);
    this.init = this.init.bind(this);
    this.moveDarkness = this.moveDarkness.bind(this);
    this.toggleDarkness = this.toggleDarkness.bind(this);

    this.maps = [map1];

    this.currentHealth = 100;
    this.currentWeapon = "fists";
    this.currentAttack = 10;
    this.nextLevel = 0;
    this.currentLevel = 1;
    this.currentDungeon = 1;

    this.darkness = true;
  }

  componentDidMount() {
    this.init(this.maps[0]);
  }

  getPlayerPosition() {
    for (var i = 0; i < currentMap.length; i++) {
      if (currentMap[i].type === 2)
        return currentMap[i];
    }
  }

  getPosition(x, y) {
    for (var i = 0; i < currentMap.length; i++) {
      if (currentMap[i].xcoord === x && currentMap[i].ycoord === y)
        return currentMap[i];
    }
  }

  moveDarkness() {
    for (var i = 0; i < currentMap.length; i++) {
      currentMap[i].visible = false;
    }
    var position = this.getPlayerPosition();
    position.visible = true;

    this.getPosition(position.xcoord+1, position.ycoord+1).visible = true;
    this.getPosition(position.xcoord+1, position.ycoord).visible = true;
    this.getPosition(position.xcoord+1, position.ycoord-1).visible = true;
    this.getPosition(position.xcoord-1, position.ycoord).visible = true;
    this.getPosition(position.xcoord, position.ycoord+1).visible = true;
    this.getPosition(position.xcoord, position.ycoord-1).visible = true;
    this.getPosition(position.xcoord-1, position.ycoord+1).visible = true;
    this.getPosition(position.xcoord-1, position.ycoord-1).visible = true;

    if (this.getPosition(position.xcoord+2, position.ycoord))
      this.getPosition(position.xcoord+2, position.ycoord).visible = true;
    if (this.getPosition(position.xcoord-2, position.ycoord))
      this.getPosition(position.xcoord-2, position.ycoord).visible = true;
    if (this.getPosition(position.xcoord, position.ycoord+2))
      this.getPosition(position.xcoord, position.ycoord+2).visible = true;
    if (this.getPosition(position.xcoord, position.ycoord-2))
      this.getPosition(position.xcoord, position.ycoord-2).visible = true;

    this.forceUpdate();
  }

  toggleDarkness () {
    if (this.darkness) {
      for (var i = 0; i < currentMap.length; i++) {
        currentMap[i].visible = true;
      }
    }
    else {
      for (var i = 0; i < currentMap.length; i++) {
        currentMap[i].visible = false;
      }
      this.moveDarkness();
    }
    this.darkness = !this.darkness;
    this.forceUpdate();
  }

  gameLost() {
    this.maps = [map1];
    this.init(this.maps[0]);
    this.forceUpdate();
    this.currentHealth = 100;
    this.currentWeapon = "fists";
    this.currentAttack = 10;
    this.nextLevel = 0;
    this.currentLevel = 1;
    this.currentDungeon = 1;
  }

  movePlayer(xCoord, yCoord) {

    var newTileType = currentMap[xCoord * 30 + yCoord].type;

    // running into the wall
    if (newTileType === 0)
      return;
    // next level
    else if (newTileType === 3) {
      if (this.currentDungeon === 1) {
        this.maps = [map1.reverse()];
        this.init(this.maps[0]);
        this.forceUpdate();
      }
      else {
        this.maps = [finalmap];
        this.init(this.maps[0]);
        this.forceUpdate();
      }
      this.currentDungeon ++;
    }
    // picked up item
    else if (newTileType === 4) {
      this.currentAttack += 10;
      if (this.currentAttack/10 <= 7)
        this.currentWeapon = items[this.currentAttack/10];
    }
    // monster killing
    else if (newTileType === 5) {
      this.currentHealth -= Math.floor(Math.random() * (15 - 5) + 5);
      currentMap[xCoord * 30 + yCoord].health -= Math.floor(Math.random() * (this.currentAttack+5 - this.currentAttack-5) + this.currentAttack-5);
      if (this.currentHealth <= 0) {
        this.gameLost();
        return;
      }
      else if (currentMap[xCoord * 30 + yCoord].health > 0)
        return
      else {
        this.nextLevel += 20;
        if (this.nextLevel >= 100) {
          this.nextLevel = this.nextLevel % 100;
          this.currentLevel += 1;
          this.currentHealth += 25;
          this.currentAttack += 5;
        }
      }
    }
    // picking up health points
    else if (newTileType === 6) {
      this.currentHealth += 20;
    }
    else if (newTileType === 7) {
      this.currentHealth -= Math.floor(Math.random() * (60 - 50) + 50);
      currentMap[xCoord * 30 + yCoord].health -= Math.floor(Math.random() * (this.currentAttack+5 - this.currentAttack-5) + this.currentAttack-5);
      if (this.currentHealth <= 0) {
        this.gameLost();
        return;
      }
      else if (currentMap[xCoord * 30 + yCoord].health > 0)
        return
      else {
        $('#VictoryModal').modal({show: 'true'});
      }
    }

    var position = this.getPlayerPosition();

    currentMap[position.xcoord * 30 + position.ycoord].type = 1;
    currentMap[xCoord * 30 + yCoord].type = 2;

    if (this.darkness)
      this.moveDarkness();

    this.forceUpdate();
  }

  checkKey(e) {
    e = e || window.event;
    var position = this.getPlayerPosition()
    if (e.keyCode == '38' || e.keyCode == '87') {      // up arrow
      this.movePlayer(position.xcoord - 1, position.ycoord);
    }
    else if (e.keyCode == '40' || e.keyCode == '83') { // down arrow
      this.movePlayer(position.xcoord + 1, position.ycoord);
    }
    else if (e.keyCode == '37' || e.keyCode == '65') { // left arrow
      this.movePlayer(position.xcoord, position.ycoord - 1);
    }
    else if (e.keyCode == '39' || e.keyCode == '68') { // right arrow
      this.movePlayer(position.xcoord, position.ycoord + 1);
    }
    this.forceUpdate();
  }

  initKeys() {
    document.onkeydown = this.checkKey;
  }

  spawnItems(i) {
    if (i !== 1) // cell is not empty
      return i;
    else if (Math.random() <= 0.0075) // item
      return 4;
    else if (Math.random() <= 0.01) // health
      return 6;
    else if (Math.random() <= 0.025) // monster
      return 5;
    else
      return 1;
  }

  // initialize the first cells on start
  init(GameMap) {
    currentMap = [];
    for (var i = 0; i < GameMap.length; i++) {
      var x = new Entity(Math.floor(i/30), i % 30, this.spawnItems(this.maps[0][i]));
      if (x.type === 5) {
        x.health = 30;
      }
      else if (x.type === 7) {
        x.health = 200;
      }
      currentMap.push(x);
    }
    this.initKeys();
    this.forceUpdate();

    if (this.darkness)
      this.moveDarkness();
  }

  // render the cell board an buttons
  render () {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h4 className="pull-left">Health: {this.currentHealth} <span className="blue">|</span> Weapon: {this.currentWeapon} <span className="blue">|</span> Attack: {this.currentAttack} <span className="blue">|</span> Level: {this.currentLevel} <span className="blue">|</span> Next Level: {this.nextLevel} / 100 <span className="blue">|</span> Dungeon: {this.currentDungeon}</h4>
          <button className="btn btn-primary pull-right" onClick={this.toggleDarkness}><span className="glyphicon glyphicon-sunglasses" aria-hidden="true"></span> DARKNESS</button>
          <br/><br/>
          <hr/>
          {
          currentMap.map(function(key, i) {
            if (key.visible) {
              if (key.type === 1) {
                return (
                  <div id={i} className="board-cell empty-cell" key={i}></div>
                );
              }
              else if (key.type === 2) {
                return (
                  <div id={i} className="board-cell player-cell" key={i}></div>
                )
              }
              else if (key.type === 3) {
                return (
                  <div id={i} className="board-cell escape-cell" key={i}></div>
                )
              }
              else if (key.type === 4) {
                return(
                  <div id={i} className="board-cell item-cell" key={i}></div>
                )
              }
              else if (key.type === 5) {
                return(
                  <div id={i} className="board-cell monster-cell" key={i}></div>
                )
              }
              else if (key.type === 6) {
                return(
                  <div id={i} className="board-cell health-cell" key={i}></div>
                )
              }
              else if (key.type === 7) {
                return(
                  <div id={i} className="board-cell boss-cell" key={i}></div>
                )
              }
              else if (key.type === 0){
                return (
                  <div id={i} className="board-cell wall-cell" key={i}></div>
                );
              }
            }
            else {
              return (
                <div id={i} className="board-cell dark-cell" key={i}></div>
              );
            }
          }, this)
          }
        </div>

        <div id="VictoryModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">CONGRATULATIONS! YOU HAVE WON THE GAME!</h4>
              </div>
              <div className="modal-body">
                <img className="img-responsive" src="http://www.patsusmilch.com/wp-content/uploads/2014/11/happy-kitten-kittens-5890512-1600-1200.jpg" alt="image"/>
              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.gameLost}>Again!</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

render(<Game />, document.getElementById('app'));
