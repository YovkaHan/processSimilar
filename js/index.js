/**
 * Created by Jordan3D on 5/19/2018.
 *
 * У нас есть прямоугольное игровое поле, состоящее из ячеек. В каждой ячейке может находится один игровой элемент.
 * При выборе любой из ячеек мы должны удалить из поля элемент и всю связанную группу таких же элементов.
 * Как бы Вы реализовывали поиск элементов такой группы?
 *
 * Реализация: через рекурсивный поиск по соседним ячейкам с добавлением отработанных ячеек в буфер
 * Field.processSimilar()
 */
"use strict";

const logic = {
    coonfig: {
        rows: 7,
        colls: 6
    },
    field: {
        c1: {
            id: "c1",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 0,
                y: 0
            }
        },
        c2: {
            id: "c2",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 1,
                y: 0
            }
        },
        c3: {
            id: "c3",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 2,
                y: 0
            }
        },
        c4: {
            id: "c4",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 3,
                y: 0
            }
        },
        c5: {
            id: "c5",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 4,
                y: 0
            }
        },
        c6: {
            id: "c6",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 5,
                y: 0
            }
        },
        c7: {
            id: "c7",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 0,
                y: 1
            }
        },
        c8: {
            id: "c8",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 1,
                y: 1
            }
        },
        c9: {
            id: "c9",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 2,
                y: 1
            }
        },
        c10: {
            id: "c10",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 3,
                y: 1
            }
        },
        c11: {
            id: "c11",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 4,
                y: 1
            }
        },
        c12: {
            id: "c12",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 5,
                y: 1
            }
        },
        c13: {
            id: "c13",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 0,
                y: 2
            }
        },
        c14: {
            id: "c14",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 1,
                y: 2
            }
        },
        c15: {
            id: "c15",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 2,
                y: 2
            }
        },
        c16: {
            id: "c16",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 3,
                y: 2
            }
        },
        c17: {
            id: "c17",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 4,
                y: 2
            }
        },
        c18: {
            id: "c18",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 5,
                y: 2
            }
        },
        c19: {
            id: "c19",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 0,
                y: 3
            }
        },
        c20: {
            id: "c20",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 1,
                y: 3
            }
        },
        c21: {
            id: "c21",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 2,
                y: 3
            }
        },
        c22: {
            id: "c22",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 3,
                y: 3
            }
        },
        c23: {
            id: "c23",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 4,
                y: 3
            }
        },
        c24: {
            id: "c24",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 5,
                y: 3
            }
        },
        c25: {
            id: "c25",
            type: "cell",
            content: {
                id: "f3",
                type: "figure"
            },
            coords: {
                x: 0,
                y: 4
            }
        },
        c26: {
            id: "c26",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 1,
                y: 4
            }
        },
        c27: {
            id: "c27",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 2,
                y: 4
            }
        },
        c28: {
            id: "c28",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 3,
                y: 4
            }
        },
        c29: {
            id: "c29",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 4,
                y: 4
            }
        },
        c30: {
            id: "c30",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 5,
                y: 4
            }
        },
        c31: {
            id: "c31",
            type: "cell",
            content: {
                id: "f3",
                type: "figure"
            },
            coords: {
                x: 0,
                y: 5
            }
        },
        c32: {
            id: "c32",
            type: "cell",
            content: {
                id: "f3",
                type: "figure"
            },
            coords: {
                x: 1,
                y: 5
            }
        },
        c33: {
            id: "c33",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 2,
                y: 5
            }
        },
        c34: {
            id: "c34",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 3,
                y: 5
            }
        },
        c35: {
            id: "c35",
            type: "cell",
            content: {
                id: "f4",
                type: "figure"
            },
            coords: {
                x: 4,
                y: 5
            }
        },
        c36: {
            id: "c36",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 5,
                y: 5
            }
        },
        c37: {
            id: "c37",
            type: "cell",
            content: {
                id: "f3",
                type: "figure"
            },
            coords: {
                x: 0,
                y: 6
            }
        },
        c38: {
            id: "c38",
            type: "cell",
            content: {
                id: "f3",
                type: "figure"
            },
            coords: {
                x: 1,
                y: 6
            }
        },
        c39: {
            id: "c39",
            type: "cell",
            content: {
                id: "f3",
                type: "figure"
            },
            coords: {
                x: 2,
                y: 6
            }
        },
        c40: {
            id: "c40",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 3,
                y: 6
            }
        },
        c41: {
            id: "c41",
            type: "cell",
            content: {
                id: "f1",
                type: "figure"
            },
            coords: {
                x: 4,
                y: 6
            }
        },
        c42: {
            id: "c42",
            type: "cell",
            content: {
                id: "f2",
                type: "figure"
            },
            coords: {
                x: 5,
                y: 6
            }
        }
    },
    entities: {
        figure: {
            f1: {
                code: "&#9824;"
            },
            f2: {
                code: "&#9827;"
            },
            f3: {
                code: "&#9825;"
            },
            f4: {
                code: "&#9826;"
            },
            fBlank: {
                code: ""
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", ready);

/** Класс Ячейка
 * id,
 * content,
 * coords,
 * element
 *
 * click()
 * render()
 * deleteContent()
 * */
class Cell {
    constructor(id, content, coords, click){
        this.id = id;
        this.content = content;
        this.coords = coords;
        this.element = null;

        this.parentClick = click;

        this.click = this.click.bind(this);
        this.render = this.render.bind(this);
        this.deleteContent = this.deleteContent.bind(this);
    }
    click() {
        this.parentClick(this.id);
    }
    deleteContent(){
        this.content.id = 'fBlank';
        this.element.innerHTML = "";
    }
    render() {
        const view = document.createElement('DIV');

        view.className= 'c-cell';

        view.setAttribute('id', this.id);
        view.setAttribute('x', this.coords.x);
        view.setAttribute('y', this.coords.y);

        view.addEventListener('click', ()=>{
            this.click();
        });

        const child = document.createElement('DIV');
        child.className = 'figure';
        /*
         Сокращу процедуру отображение контента
         */
        child.innerHTML = logic.entities[this.content.type][this.content.id].code;
        view.appendChild(child);

        this.element = view;

        return view;
    }
}

/**Координаты векторов смещения по сторонам
 * */
const sides = {
    1: {
        x:0,
        y:-1
    },
    2: {
        x:1,
        y:0
    },
    3: {
        x:0,
        y:1
    },
    4: {
        x:-1,
        y:0
    },
};

/** Класс Поле
 * cells
 *
 * click()
 * render()
 * findCell()
 * processSimilar()
 * */
class Field {
    static get sides() { return sides}

    constructor() {
        this.click = this.click.bind(this);
        this.findCell = this.findCell.bind(this);
        this.processSimilar = this.processSimilar.bind(this);

        this.cells = function(root){
            const result = {};
            const field = logic.field;

            for(let c in field){
                const cell = new Cell(
                    field[c].id,
                    field[c].content,
                    field[c].coords,root.click
                );
                result[cell.id] = cell;
            }
            return result;
        }(this);

        this.render = this.render.bind(this);
    }

    click(cellId) {
        const currentCell = this.cells[cellId];
        let buffer = {};

       this.processSimilar(
            currentCell,
            buffer
        );

       // Исчезнуть
        for(let c in buffer){
            buffer[c].deleteContent();
        }
    }
    findCell(x,y){
        for(let c in this.cells){
            if(this.cells[c].coords.x === x && this.cells[c].coords.y ===y){
                return this.cells[c];
            }
        }
        return null;
    }
    processSimilar(cell, buffer){

        /** Добавить в буфер ячейку если ее там нет или выйти */
        if(buffer.hasOwnProperty(cell.id)){
            return null;
        }else {
            buffer[cell.id] = cell;
        }

        const sides = Field.sides;

        /** Поиск по "сторонам" */
        for(let s in sides){
            const side = sides[s];
            const x = cell.coords.x+side.x;
            const y = cell.coords.y+side.y;

            const nextCell = this.findCell(x,y);

            if(nextCell && cell.content.id === nextCell.content.id){
                this.processSimilar(nextCell, buffer)
            }
        }
        return null;
    }
    render() {
        const view = document.createElement('DIV');
        view.className= 'c-field';

        // Create board

        const board = function(num){
            const result =  document.createElement('DIV');
            result.className = 'board';

            for(let i=0; i<num; i++){
                const row = document.createElement('DIV');
                row.className = 'row';

                result.appendChild(row);
            }
            return result
        }(logic.coonfig.rows);

        for(let y=0; y<logic.coonfig.rows; y++){
            for(let x=0; x<logic.coonfig.colls; x++){

                for(let c in this.cells){
                    if(this.cells[c].coords.x === x && this.cells[c].coords.y === y){
                        board.childNodes[y].appendChild(this.cells[c].render())
                    }
                }
            }
        }

        view.appendChild(board);
        return view;
    }
}

function ready() {
    const root = document.getElementById('root');

    const field = new Field();

    root.appendChild(field.render());
}
