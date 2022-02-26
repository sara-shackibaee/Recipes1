

import React , {useState} from 'react';
import { Table } from 'antd';
import {CaretLeftOutlined ,CaretDownOutlined,CaretRightOutlined, EditOutlined} from '@ant-design/icons'
import { EditAttributesOutlined } from '@mui/icons-material';
const MTable = () => {
    const [isactive , setIsactive] =  useState(false);
   function etitsss(){
        setIsactive(!isactive)
        // console.log(record,'record')
   }
    const columns = [
        
        // {
        //     title: '',
        //     key: 'nn',
        //     fixed: 'right',
        //     width: 100,
        //     render: (record) => {return(<CaretRightOutlined style={{color:'red'}} onClick={()=>{etitsss(record)}} rotate={isactive?'90':'0'}>action</CaretRightOutlined>)},
        //   },
       
        {
            title: 'Name',
             dataIndex: 'name',
              key: 'name' ,
        },
       
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        

        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (record) => {return(<EditOutlined style={{color:'red'}} onClick={()=>{etitsss(record)}}>action</EditOutlined>)},
          },
       
      ];


    const data = [
        {
          key: 1,
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
          eju:'it'
        },
        {
          key: 2,
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
          eju:'it'
        },
        {
          key: 3,
          name: 'Not Expandable',
          age: 29,
          address: 'Jiangsu No. 1 Lake Park',
          description: 'This not expandable',
          eju:'it'
        },
        {
          key: 4,
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
          eju:'it'
        },
      ];


      const expandedRowRender = () => {
          setIsactive(!isactive)
        return (
          <div>helllllo sara</div>
        );
      };
      
   
    function sasiuu(value) {
        return <p style={{color:'green'}}>{value}</p>
    }
    return (
       

            <Table
                    columns={columns}
                    expandable={{
                    expandedRowRender: record => {return sasiuu(record.eju)},
                    }}
                    dataSource={data}
            />
    )
}

export default MTable;







