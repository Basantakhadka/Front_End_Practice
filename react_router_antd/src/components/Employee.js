
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button ,DatePicker, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { Table} from "antd";



function Employee() {
    //getting the values from local storage
    const getDataFromLS =()=>{
    const data = localStorage.getItem('employee');
    if(data){
       return JSON.parse(data);
    } else{
        return [];
    }
    }

    // employee array of object
    const [employee,setEmployee]=useState(getDataFromLS());

    //input field states
    const [Firstname,setFirstname]=useState('');
    const [Lastname,setLastname]=useState('');
    const [Email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [web,setWeb]=useState('');
    const [intro,setIntro]=useState('');

 // form layout 
    const { Option } = Select;

    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 14,
        },
      };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+977</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
   // form sumbmit behaviour
    const handleAddFormSumbit = (e) => {
        alert("submitted");
        let employees={
            Firstname,
            Lastname,
            Email,
            phone,
            web,
            intro
        }
        setEmployee([...employee,employees]);
        setFirstname('');
        setLastname('');
        setEmail('');
        setPhone('');
        setWeb('');
        setIntro('');
      };
      //saving data into local storage
      useEffect(()=>{
          localStorage.setItem('employee',JSON.stringify(employee));
      },[employee])


      // table ant design
      const columns = [
        {
          title: 'FirstName',
          dataIndex: 'Firstname',
          key: 'Firstname',
        },
        {
          title: 'Lastname',
          dataIndex: 'Lastname',
          key: 'Lastname',
        },
        {
          title: 'Email',
          dataIndex: 'Email',
          key: 'Email',
        },
        {
          title: 'phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'website',
          dataIndex: 'web',
          key: 'web',
        },
        {
          title: 'Introduction',
          dataIndex: 'intro',
          key: 'intro',
        },
      ];
    return(
        <div className=" mt-5" >
            <div style={{  border: "2px outset", alignContent:"center", margin:"0 auto", width:"60%"}}>
                <h2>Employee Form</h2>  
                <p>Please fill in this form to register</p>
                <hr/>
                <Form {...layout} onFinish={handleAddFormSumbit}>
                    <Form.Item name={['user', 'Firstname']} label="First Name" rules={[{  required: true,},]}>
                         <Input onChange={(e)=> setFirstname(e.target.value)} value={Firstname}/>
                    </Form.Item>

                     <Form.Item  name={['user', 'Lastname']} label="Last Name" rules={[{ required: true,},]}>
                        <Input onChange={(e)=> setLastname(e.target.value)} value={Lastname} />
                    </Form.Item>

                    <Form.Item name={['user', 'email']} label="Email Address" rules={[{ type: 'email',required:true,},]}>
                        <Input onChange={(e)=> setEmail(e.target.value)} value={Email}/>
                    </Form.Item>

                    <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter your phone number!',},]}>
                        <Input onChange={(e)=> setPhone(e.target.value)} value={phone} addonBefore={prefixSelector} style={{ width: '100%',}}/>
                    </Form.Item>

                     <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99,},]}>
                            <InputNumber />
                    </Form.Item>

                    <Form.Item label="Start Date"  rules={[{ required:true, }]}>
                                <DatePicker/>
                    </Form.Item>

                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select placeholder="Select gender" allowClear>
                          <Option value="male">male</Option>
                          <Option value="female">female</Option>
                          <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
            
                    <Form.Item name={['user', 'website']} label="Website">
                        <Input onChange={(e)=> setWeb(e.target.value)} value={web} />
                    </Form.Item>

                    <Form.Item name={['user', 'introduction']} label="Introduction">
                        <Input.TextArea  onChange={(e)=> setIntro(e.target.value)} value={intro}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5}}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="mt-5" style={{margin:"0 auto"}}>
                    {employee.length > 0 && 
     
                    <Table dataSource={employee} columns={columns} style={{overflow:"hidden"}}/>
                    
                    }
                    { employee.length < 1 && <div> no recors are available </div>}

                </div>
                
                
         </div> 

         
    );
}

export default Employee;