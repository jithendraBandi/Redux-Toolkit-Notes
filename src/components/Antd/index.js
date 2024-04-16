import {Table, Tag, Modal, Input, Select, Button} from 'antd';
import {useState} from 'react';
import {EditOutlined, DeleteOutlined, SearchOutlined, PlusOutlined, ReloadOutlined, UnorderedListOutlined} from '@ant-design/icons';
import './index.css'

const Antd = () => {
    const columns = [
        {
            key:'id',
            title: 'ID',
            dataIndex: 'id',
            sorter: (record1, record2) => record1.id - record2.id
        },
        {
            key:'name',
            title: 'NAME',
            dataIndex: 'name'
        },
        {
            key:'startDate',
            title: 'START DATE',
            dataIndex: 'startDate'
        },
        {
            key:'endDate',
            title: 'END DATE',
            dataIndex: 'endDate'
        },
        {
            key:'allocation',
            title: 'ALLOCATION',
            dataIndex: 'allocation',
            sorter: (record1, record2) => record1.id - record2.id
        },
        {
            key:'monthlyFacing',
            title: 'MONTLY FACING',
            dataIndex: 'monthlyFacing',
            sorter: (record1, record2) => record1.id - record2.id
        },
        {
            key:'weeklyFacing',
            title: 'WEEKLY FACING',
            dataIndex: 'weeklyFacing',
            sorter: (record1, record2) => record1.id - record2.id
        },
        {
            key:'supression',
            title: 'SUPRESSION',
            dataIndex: 'supression'
        },
        {
            key:'researchLeader',
            title: 'RESEARCH LEADER',
            dataIndex: 'researchLeader'
        },
        {
            key:'status',
            title: 'STATUS',
            dataIndex: 'status',
            render: status => {
                let tagColor;
                switch (status){
                    case('LIVE'):
                        tagColor='green';
                        break;
                    case('IN PR'):
                        tagColor='blue';
                        break;
                    case('PAUSE'):
                        tagColor='red';
                        break;
                    case('IN QA'):
                        tagColor='yellow';
                        break;
                    case('IN DR'):
                        tagColor='purple';
                        break;
                    default:
                        tagColor='black';
                }
                return (
                    <Tag color={tagColor}>{status}</Tag>
                )
            },
            filters:[
                {text:'LIVE', value:'LIVE'},
                {text:'IN PR', value:'IN PR'},
                {text:'PAUSE', value:'PAUSE'},
                {text:'IN QA', value:'IN QA'},
                {text:'IN DR', value:'IN DR'}
            ],
            onFilter:(value, record) => {
                return record.status === value
            }
        },
        {
            key:'action',
            title: 'ACTION',
            render: (record) => (<>
                <EditOutlined style={{color:'blue', marginRight:'8px',cursor:'pointer'}} onClick={() => editRecord(record)}/>
                <DeleteOutlined style={{cursor:'pointer',color:'red'}} onClick={() => deleteRecord(record)}/>
            </>
            )
        }
    ]
    const data = [
        {
            key:1,
            id:123,
            name:"GOOGLE",
            startDate:"2024-04-04",
            endDate:"2024-04-24",
            allocation:1000,
            monthlyFacing:100,
            weeklyFacing:50,
            supression:"Domain,Email,Company name,Null",
            researchLeader:"Venkat",
            status:"LIVE"
        },
        {
            key:2,
            id:1234,
            name:"MICROSOFT",
            startDate:"2024-04-04",
            endDate:"2024-04-24",
            allocation:1000,
            monthlyFacing:100,
            weeklyFacing:50,
            supression:"Domain,Email,Company name,Null",
            researchLeader:"Venkat",
            status:"IN PR"
        },
        {
            key:3,
            id:1235,
            name:"DELOITTE",
            startDate:"2024-04-04",
            endDate:"2024-04-24",
            allocation:1000,
            monthlyFacing:100,
            weeklyFacing:50,
            supression:"Domain,Email,Company name,Null",
            researchLeader:"Venkat",
            status:"PAUSE"
        },
        {
            key:4,
            id:1236,
            name:"YAHOO",
            startDate:"2024-04-04",
            endDate:"2024-04-24",
            allocation:1000,
            monthlyFacing:100,
            weeklyFacing:50,
            supression:"Domain,Email,Company name,Null",
            researchLeader:"Venkat",
            status:"IN QA"
        },
        {
            key:5,
            id:1237,
            name:"FACEBOOK",
            startDate:"2024-04-04",
            endDate:"2024-04-24",
            allocation:1000,
            monthlyFacing:100,
            weeklyFacing:50,
            supression:"Domain,Email,Company name,Null",
            researchLeader:"Venkat",
            status:"IN DR"
        }
    ]
    const statusModes = ['LIVE', 'IN PR', 'PAUSE', 'IN QA', 'IN DR'];

    const newCampaignObject = {
        id: Math.ceil(Math.random()*1000),
        name:"",
        startDate:"",
        endDate:"",
        allocation:"",
        monthlyFacing:"",
        weeklyFacing:"",
        supression:"",
        researchLeader:"",
        status:""
    }

    const [list, setList] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const [currentRecord, setCurrentRecord] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [showAddCampaignModal, setShowAddCampaignModal] = useState(false);
    const [newCampaign, setNewCampaign] = useState(newCampaignObject);

    const editRecord = record => {
        setShowModal(true);
        setCurrentRecord(record);
    }

    const deleteRecord = record => {
        const updatedList = list.filter(eachRecord => eachRecord.id !== record.id);
        setList(updatedList);
    }

    const changeName = event => setCurrentRecord(prev => ({...prev, name:event.target.value}));
    const changeAllocation = event => setCurrentRecord(prev => ({...prev, allocation:event.target.value}));
    const changeMonthlyFacing = event => setCurrentRecord(prev => ({...prev, monthlyFacing:event.target.value}));
    const changeWeeklyFacing = event => setCurrentRecord(prev => ({...prev, weeklyFacing:event.target.value}));
    const changeResearchLeader = event => setCurrentRecord(prev => ({...prev, researchLeader:event.target.value}));
    const changeStatus = event => setCurrentRecord(prev => ({...prev, status:event}));
    
    const changeSearch = event => setSearchInput(event.target.value);

    const addName = event => setNewCampaign(prev => ({...prev, name:event.target.value}));
    const addAllocation = event => setNewCampaign(prev => ({...prev, allocation:event.target.value}));
    const addMonthlyFacing = event => setNewCampaign(prev => ({...prev, monthlyFacing:event.target.value}));
    const addWeeklyFacing = event => setNewCampaign(prev => ({...prev, weeklyFacing:event.target.value}));
    const addSupression = event => setNewCampaign(prev => ({...prev, supression:event.target.value}));
    const addResearchLeader = event => setNewCampaign(prev => ({...prev, researchLeader:event.target.value}));
    const addStatus = event => setNewCampaign(prev => ({...prev, status:event}));
    const addStartDate = event => setNewCampaign(prev => ({...prev, startDate: event.target.value}))
    const addEndDate = event => setNewCampaign(prev => ({...prev, endDate: event.target.value}))

    const addCampaign = () => {
        setShowAddCampaignModal(true);
    }

    return (
        <div className='padding'>
            <Modal
                title="Add Campaign"
                open={showAddCampaignModal}
                okText="Add"
                onCancel={() => {
                    setShowAddCampaignModal(false);
                    setNewCampaign(newCampaignObject);
                }}
                onOk={() => {
                    setList(prevList => ([...prevList, newCampaign]));
                    setShowAddCampaignModal(false);
                    setNewCampaign(newCampaignObject);
                }}
            >
                <Input placeholder='Enter Name' onChange={addName} value={newCampaign.name}/>
                <Input type="date" value={newCampaign.startDate} onChange={addStartDate} />
                <Input type="date" value={newCampaign.endDate} onChange={addEndDate} />
                <Input placeholder='Enter Allocation' onChange={addAllocation} value={newCampaign.allocation} />
                <Input placeholder='Enter Monthly Facing' onChange={addMonthlyFacing} value={newCampaign.monthlyFacing} />
                <Input placeholder='Enter Weekly Facing' onChange={addWeeklyFacing} value={newCampaign.weeklyFacing} />
                <Input placeholder='Enter Supression' onChange={addSupression} value={newCampaign.supression} />
                <Input placeholder='Enter Research Leader' onChange={addResearchLeader} value={newCampaign.researchLeader} />
                <Select placeholder="Select Status" value={newCampaign.status} onChange={addStatus} style={{width:150}}>
                    {statusModes.map((mode, index) => {
                        return <Select.Option key={index} value={mode}>{mode}</Select.Option>
                    })}
                </Select>
            </Modal>
            <Modal
                title="Edit Record"
                open={showModal}
                okText="Save"
                onCancel={() => setShowModal(false)}
                onOk={() => {
                    setList(prevList => {
                        return prevList.map(eachRecord => {
                            if (eachRecord.id === currentRecord.id) return currentRecord;
                            return eachRecord;
                        })
                    })
                    setShowModal(false);
                }}
            >
                <Input onChange={changeName} value={currentRecord.name}/>
                <Input onChange={changeAllocation} value={currentRecord.allocation} />
                <Input onChange={changeMonthlyFacing} value={currentRecord.monthlyFacing} />
                <Input onChange={changeWeeklyFacing} value={currentRecord.weeklyFacing} />
                <Input onChange={changeResearchLeader} value={currentRecord.researchLeader} />
                <Select placeholder="Select Status" value={currentRecord.status} onChange={changeStatus}>
                    {statusModes.map((mode, index) => {
                        return <Select.Option key={index} value={mode}>{mode}</Select.Option>
                    })}
                </Select>
            </Modal>
            <div className='row'>
                <div className='adjacent'>
                    <h1>Campaign List</h1>
                    <Input placeholder='Search Name' prefix={<SearchOutlined />} className='search-input' allowClear onChange={changeSearch} value={searchInput} />
                </div>
                <div className='right-nav'>
                    <Button type='primary' icon={<PlusOutlined />} onClick={addCampaign}>Add Campaign</Button>
                    <Button type='primary'>
                        <ReloadOutlined onClick={() => setList(data)}/>
                    </Button>
                    <Button type='primary'>
                        <UnorderedListOutlined />
                    </Button>
                </div>
            </div>
            <Table pagination={false} columns={columns} dataSource={list.filter(record => record.name.toLowerCase().includes(searchInput.toLowerCase()))}></Table>
        </div>
    )
}

export default Antd;