export interface Item {
    id: string,
    item: string,
    checked: boolean
}

export default class ListItem implements Item {

    constructor (
        private _id: string = '', 
        private _item: string = '', 
        private _checked: boolean = false
    ) {}

    get id(): string {
        return this._id
    }

    set id(id: string) {
        this._id = id
    }

    get item(): string {
        return this._item
    }

    set item(x: string) {
        this._item = x
    }

    get checked(): boolean {
        return this._checked
    }

    set checked(x: boolean) {
        this._checked = x
    }
}