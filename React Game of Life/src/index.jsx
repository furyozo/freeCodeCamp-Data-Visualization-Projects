// node modules and components importing
import React from 'react';
import {render} from 'react-dom';

/*
  Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
  Any live cell with two or three live neighbours lives on to the next generation.
  Any live cell with more than three live neighbours dies, as if by overpopulation.
  Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

import RecipeRows from './js/components/RecipeRow.jsx';

const cellCSS = {
  float: 'left',
  height: '30px',
  width: '30px',
  backgroundColor: '#2196f3',
  border: '1px solid #0d47a1',
}
const activecellCSS = {
  float: 'left',
  height: '30px',
  width: '30px',
  backgroundColor: '#3f51b5',
  border: '1px solid #0d47a1',
}

function Cell (xcoord, ycoord, active) {
  this.xcoord = xcoord;
  this.ycoord = ycoord;
  this.active = active;
}

// main app component
class GameofLife extends React.Component {

  constructor(props) {
    super(props);
    this.initCells = this.initCells.bind(this);
    this.nextState = this.nextState.bind(this);
    this.checkCellState = this.checkCellState.bind(this);
    this.getNeighborCount = this.getNeighborCount.bind(this);
    this.getCellByCoords = this.getCellByCoords.bind(this);
    this.startGenerating = this.startGenerating.bind(this);
    this.stopGenerating = this.stopGenerating.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.setActive = this.setActive.bind(this);
    this.cellarr = [];
    this.generation = 0;
    this.generationInterval;
    this.running = false;
    this.initCells();
  }

  // after mounting, set the interval of generating next generations
  componentDidMount() {
    var self = this;
    this.generationInterval = setInterval(function() {
      self.nextState();
    }, 200);
    this.running = true;
  }

  startGenerating () {
    if (this.running)
      return;
    var self = this;
    this.generationInterval = setInterval(function() {
      self.nextState();
    }, 200);
    this.running = true;
  }

  stopGenerating() {
    clearInterval(this.generationInterval);
    this.running = false;
  }

  clearBoard() {
    for (var i = 0; i < this.cellarr.length; i++) {
      this.cellarr[i].active = false;
    }
    this.nextState();
    clearInterval(this.generationInterval);
    this.running = false;
    this.generation = 0;
  }

  setActive (i) {
    if (this.cellarr[i].active)
      this.cellarr[i].active = false;
    else
      this.cellarr[i].active = true;
    this.forceUpdate();
  }

  // get cell by it's coordinates
  getCellByCoords(x, y) {
    if (x === -1) x = 24;
    if (x === 25) x = 0;
    if (y === -1) y = 24;
    if (y === 25) y = 0;
    for (var i = 0; i < this.cellarr.length; i++) {
      if (this.cellarr[i].xcoord === x && this.cellarr[i].ycoord === y)
        return this.cellarr[i];
    }
  }

  // get the number of active neighbours of a cell
  getNeighborCount(x, y) {
    var tmp = 0;
    if (this.getCellByCoords(x-1, y-1).active) tmp ++;
    if (this.getCellByCoords(x-1, y).active)   tmp ++;
    if (this.getCellByCoords(x-1, y+1).active) tmp ++;
    if (this.getCellByCoords(x, y-1).active)   tmp ++;
    if (this.getCellByCoords(x, y+1).active)   tmp ++;
    if (this.getCellByCoords(x+1, y-1).active) tmp ++;
    if (this.getCellByCoords(x+1, y).active)   tmp ++;
    if (this.getCellByCoords(x+1, y+1).active) tmp ++;
    return tmp;
  }

  // initialize the first cells on start
  initCells() {
    for (var x = 0; x < 25; x ++) {
      for (var y = 0; y < 25; y ++) {
        if (Math.random() >= 0.25)
          var cell = new Cell(x, y, false);
        else
          var cell = new Cell(x, y, true);
        this.cellarr.push(cell);
      }
    }
    this.generation ++;
  }

  // create a new cell by checking the old cells state
  checkCellState(cell) {
    var x = this.getNeighborCount(cell.xcoord, cell.ycoord);
    var newCell = new Cell(cell.xcoord, cell.ycoord, false);
    if (cell.active && x < 2)
      newCell.active = false;
    else if (cell.active && (x === 3 || x === 2))
      newCell.active = true;
    else if (cell.active && x > 3)
      newCell.active = false;
    else if (!cell.active && x === 3)
      newCell.active = true;
    return newCell;
  }

  // generate next generation of cells
  nextState() {
    var tmp = [];
    for (var i = 0; i < this.cellarr.length; i++) {
      var cell = this.getCellByCoords(this.cellarr[i].xcoord, this.cellarr[i].ycoord);
      var newCell = this.checkCellState(cell);
      tmp.push(newCell);
    }
    this.cellarr = tmp;
    this.generation ++;
    this.forceUpdate();
  }

  // render the cell board an buttons
  render () {
    return (
      <div>
        {
        this.cellarr.map(function(key, i) {
          if (key.active) {
            return (
              <div id={i} className="board-cell" style={activecellCSS} key={i} onClick={() => this.setActive(i)}></div>
            );
          }
          else {
            return (
              <div id={i} className="board-cell" style={cellCSS} key={i} onClick={() => this.setActive(i)}></div>
            );
          }
        }, this)
        }
        <div className="row">
          <div className="col-xs-12 text-center">
            <div className="btn-group pull-center">
              <button type="button" className="btn btn-primary btn-lg" onClick={this.startGenerating}>START</button>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.stopGenerating}>PAUSE</button>
              <button type="button" className="btn btn-primary btn-lg" onClick={this.clearBoard}>CLEAR</button>
            </div>
            <p>Current Generation: {this.generation}</p>
          </div>
        </div>
      </div>
    );
  }
}

render(<GameofLife />, document.getElementById('app'));
