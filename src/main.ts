import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

document.addEventListener("DOMContentLoaded", initApp)

function initApp():void {
    const fullList = FullList.instance
    const template = ListTemplate.instance

    const itemEntryForm = 
        document.getElementById("itemEntryForm") as 
        HTMLFormElement
    itemEntryForm.addEventListener(
        "submit", (event: SubmitEvent): void => {
            event.preventDefault()

            const input = document.getElementById("newItem") as
                HTMLInputElement
            const newEntryText: string = input.value.trim()
            if (!newEntryText) return

            const itemId: number = fullList.list.length + 1
            
            const newItem = new ListItem(
                itemId.toString(), 
                newEntryText
            )

            fullList.addItem(newItem)
            template.render(fullList)
        }
    )

    const clearitems = document.getElementById("clearItemsButton") as
        HTMLButtonElement
    clearitems.addEventListener('click', (): void => {
        fullList.clearList()
        template.clear()
    })

    fullList.load()
    template.render(fullList)

}

