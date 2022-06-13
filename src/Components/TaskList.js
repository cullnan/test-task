import React, {useState} from 'react'
import Task from './Task'
import { Segmented , List } from 'antd'

export default function TaskList({tasks}) {
    const [selected, setSelected] = useState("All")

    return (
        <>
        <List
            size='large'
            footer={<Segmented value={selected} onChange={(e) => setSelected(e)} options={['All', 'Active', 'Completed']} />}
            bordered
            dataSource={tasks}
            renderItem={(item) => <List.Item><Task key={item.id} {...item} filter={selected} /></List.Item>}
        />
        </>
    )
}