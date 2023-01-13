import Task from '../../components/Taks/Task.jsx';
import './Backlog.css';


function Backlog({tasks, onDragStart, onDragOver, onDrop, loading, error}) {

    return (
        <div onDragOver={onDragOver} onDrop={(e) => onDrop(e, 0)} className='Backlog-wrapper'>
            <h2>Backlog</h2>
            <div className='Tasks-wrapper'>
                {loading || error ? (
                    <span>{error || 'Loading...'}</span>
                ) : (
                    tasks.map((task) => (
                        <Task onDragStart={onDragStart} id={task.id} key={task.id} title={task.title} body={task.body}/>)
                    )
                )}
            </div>
        </div>
    );
}

export default Backlog;
