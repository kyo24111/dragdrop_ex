import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function App() {
  const [items] = useState([
    {id: 0, text: "item0"},
    {id: 1, text: "item1"},
    {id: 2, text: "item2"},
    ]);

  const onDragEnd = (result) => {
    console.log("from " + String(result.destination.index) + " to " + String(result.source.index))
    const remove = items.splice(result.source.index, 1,);
    items.splice(result.destination.index, 0, remove[0]);
  }
  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable draggableId={item.text} index={index} key={item.id}>
                  {(provided) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.text}
                  </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
