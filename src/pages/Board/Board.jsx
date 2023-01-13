import Lane from '../../components/Lane/Lane.jsx';
import './Board.css';
import useDataFetching from '../../hooks/useDataFetching';
import {useEffect, useState} from 'react';
import Backlog from "../Backlog/Backlog.jsx";

const lanes = [
    {id: 0, title: 'Backlog'},
    {id: 1, title: 'To Do'},
    {id: 2, title: 'In Progress'},
    {id: 3, title: 'Review'},
    {id: 4, title: 'Done'},
];

function onDragStart(e, id) {
    e.dataTransfer.setData('id', id);
};

function onDragOver(e) {
    e.preventDefault();
};


function Board() {
    const [loading, error, data] =
        useDataFetching(`/resourse.json`);

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(data);
    }, [data]);

    function onDrop(e, laneId) {
        const id = e.dataTransfer.getData('id');
        const updatedTasks = tasks.filter((task) => {
            if (task.id.toString() === id) {
                task.lane = laneId;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return (
        <>
            <div className='Board-wrapper'>
                {lanes.map((lane) => {
                    if (lane.id !== 0) {
                        return (
                            <Lane
                                key={lane.id}
                                laneId={lane.id}
                                title={lane.title}
                                loading={loading}
                                error={error}
                                tasks={tasks.filter((task) =>
                                    task.lane === lane.id)}
                                onDragStart={onDragStart}
                                onDragOver={onDragOver}
                                onDrop={onDrop}
                            />
                        )
                    }
                })}
            </div>
            <Backlog
                    lanes={lanes}
                    loading={loading}
                    lineId={0}
                    error={error}
                    tasks={tasks.filter((task) =>
                        task.lane === 0)}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDrop={onDrop}/>
        </>
    );
}

export default Board;
