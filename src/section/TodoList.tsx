import {useState} from "react";
import {createItem, filterItems, getInitialItems, removeItem, updateItem} from "../feature/todoList/itemLogic";
import Header from "../component/todoList/Header";
import AddNewTodo from "../component/todoList/AddNewTodo";
import ListItems from "../component/todoList/ListItems";


const TodoList = (): JSX.Element => {
    const [items, setItems] = useState<any>(getInitialItems());
    const [newItemName, setNewItemName] = useState('');

    const add = (name: string) => {
        const item = createItem(name);
        setItems([...items, item]);
    };

    const update = (id: string, updates: any) => {
        setItems(updateItem(items, id, updates));
    };

    const remove = (id: string) => {
        setItems(removeItem(items, id));
    };

    const unpackedItems = filterItems(items, {packed: false});
    const packedItems = filterItems(items, {packed: true});

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: 900, padding: 16, gap: 10}}>
                <Header items={items}/>
                <AddNewTodo newItemName={newItemName} setNewItemName={setNewItemName} addItem={add}/>
                <div style={{display: 'flex', gap: 10}}>
                    <ListItems title={'packed Items'} items={packedItems} update={update} remove={remove}/>
                    <ListItems title={'unpacked Items'} items={unpackedItems} update={update} remove={remove}/>
                </div>
            </div>
        </div>
    )
}

export default TodoList