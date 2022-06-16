import React,  { useContext} from 'react'
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Context } from '../context';


export default function Task({title, id, completed, filter, }) {
    const {editTask, deleteTask} = useContext(Context)

    if(filter === 'Active'){
        if(!completed){
            return (
                <>
                <Checkbox checked={completed} onChange={() => editTask(id)}>{title}</Checkbox>
        
                <DeleteOutlined onClick={() => deleteTask(id)}/>
                </>
            )
        }
    }
    else if(filter === 'Completed'){
        if(completed){
            return (
                <>
                <Checkbox checked={completed} onChange={() => editTask(id)}>{title}</Checkbox>
        
                <DeleteOutlined onClick={() => deleteTask(id)}/>
                </>
            )
        }
    }
    else{
        return (
            <>
            <Checkbox checked={completed} onChange={() => editTask(id)}>{title}</Checkbox>
        
            <DeleteOutlined onClick={() => deleteTask(id)}/>
            </>
        )
    }
    
}
