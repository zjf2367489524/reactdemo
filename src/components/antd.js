import React, { useState } from 'react'
import { 
    Layout, 
    Button, 
    Divider, 
    Space,
    Affix,
    Breadcrumb,
    Dropdown,
    Menu,
    Pagination,
    Steps,
    AutoComplete,
    Checkbox,
    Cascader,
    DatePicker,
    Select,
    Input,
    Rate,
    Radio,
    Switch,
    Slider,
    Transfer,
    Upload,
    Avatar,
    Badge,
    Collapse,
    Carousel,
    Calendar,
    Empty,
    Descriptions,
    Timeline
} from 'antd'

const { Header, Content, Sider, Footer } = Layout
const { SubMenu } = Menu
const { Step } = Steps
const { Option } = AutoComplete
const { RangePicker } = DatePicker
const { Panel } = Collapse

const $Content = { backgroundColor: '#FFF',padding: '1em' }

const $CascaderOption = [
    {
        value: 'lty',
        label: 'lty',
        children: [
            {
                value: 'yzl',
                label: 'yzl'
            }, {
                value: 'yzly',
                label: 'yzly',
                children: [
                    {
                        value: 'zymk',
                        label: 'zymk'
                    }
                ]
            }
        ]
    }, {
        value: 'yzl',
        label: 'yzl',
        children: [
            {
                value: 'mqx',
                label: 'mqx'
            }
        ]
    }
]

const $menu = (
    <Menu theme="dark">
        <Menu.Item key="1"><span> 1st menu item </span></Menu.Item>
        <Menu.Item key="2"><span> 2nd menu item </span></Menu.Item>
        <Menu.Item key="3"><span> 3rd menu item </span></Menu.Item>
        <Menu.Item key="4" danger><span> a danger item </span></Menu.Item>
        <SubMenu key="sub1" title="Navigation Two">
            <Menu.Item key="5">Option 3</Menu.Item>
            <Menu.Item key="6">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
                <Menu.Item key="7">Option 5</Menu.Item>
                <Menu.Item key="8">Option 6</Menu.Item>
            </SubMenu>
        </SubMenu>
    </Menu>
)

const selectBefore = (
    <Select defaultValue="http://">
        <Option value="http://">http://</Option>
          <Option value="https://">https://</Option>
    </Select>
);

const SliderMarks = {
    0: 'lty',
    33: 'yzl',
    67: 'yh',
    100: {
        style: { color: '#F00' },
        label: <strong>mqx</strong>
    }
}

const UploadProps = {
    action:'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  };

function Antd(props) {
    const [AutoCompleteState, setAutoCompleteState] = useState([])

    const handleAutoComplete = (val) => {
        let $res = []

        if (!val|| val.indexOf('@') != -1) {
            $res = []
        } else {
            $res = ['lty.com', 'yzl.com', 'yh.com', 'mqx.com'].map(item => `${val}@${item}`)
        }

        setAutoCompleteState($res)
    }

    const [RadioState, setRadioState] = useState([])

    const handleRadioState = (e) => {
        setRadioState(e.target.value)
    }

    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider style={{backgroundColor: '#00aaff'}}>Sider</Sider>
                <Content style={{...$Content}}>
                    <Affix offsetTop={10}><div>Affix</div></Affix>
                    <Divider orientation="left">Button</Divider>
                    <Space>
                        <Button type="primary" shape="circle">btn</Button>
                        <Button type="dashed" disabled>btn</Button>
                    </Space>
                    <Divider orientation="left">Breadcrumb</Divider>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>1</Breadcrumb.Item>
                        <Breadcrumb.Item>2</Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider orientation="left">Dropdown</Divider>
                    <Dropdown overlay={$menu}>
                        <Button>Dropdown</Button>
                    </Dropdown>
                    <Divider orientation="left"></Divider>
                    <Pagination total={500}></Pagination>
                    <Pagination simple defaultCurrent={2} total={50}></Pagination>
                    <Divider orientation="left"></Divider>
                    <Steps current={1} percent={30}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>
                    <Steps
                        type="navigation"
                        size="small">
                        <Step status="finish" title="finish 1" />
                        <Step status="finish" title="finish 2" />
                        <Step status="process" title="current process" />
                        <Step status="wait" title="wait" disabled />
                    </Steps>
                    <Divider orientation="left">AutoComplete</Divider>
                    <AutoComplete style={{width:256}} onSearch={handleAutoComplete}>
                        {
                            AutoCompleteState.map(val => (
                                <Option key={val} value={val}>{val}</Option>
                            ))
                        }
                    </AutoComplete>
                    <Divider orientation="left">Checkbox</Divider>
                    <Checkbox indeterminate={true}>vsinger</Checkbox>
                    <Checkbox.Group options={['lty', 'yzl', 'yh', 'mqx']} value={['lty']}></Checkbox.Group>
                    <Divider orientation="left">Cascader</Divider>
                    <Cascader options={$CascaderOption}></Cascader>
                    <Divider orientation="left">DataPicker</Divider>
                    <DatePicker picker="year" />
                    <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm"/>
                    <Divider orientation="left">Input</Divider>
                    <Input addonBefore={selectBefore} defaultValue="mysite" />
                    <Divider orientation="left">Rate</Divider>
                    <Rate allowHalf defaultValue={2.5} />
                    <Divider orientation="left">Radio</Divider>
                    <Radio.Group value={RadioState} onChange={handleRadioState}>
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3} disabled>C</Radio>
                        <Radio value={4}>D</Radio>
                    </Radio.Group>
                    <Divider orientation="left">Switch</Divider>
                    <Switch checkedChildren="开启" unCheckedChildren="关闭" />
                    <Divider orientation="left">Slider</Divider>
                    <Slider defaultValue={30} disabled />
                    <Slider range defaultValue={[20, 50]} />
                    <Slider style={{height: '256px'}} step={null} vertical defaultValue={30} marks={SliderMarks} />
                    <Divider orientation="left">Select</Divider>
                    <Select mode="tags" style={{width: '100%'}}>
                        <Select.OptGroup label="lty">
                            <Select.Option value="yzl">yzl</Select.Option>
                            <Select.Option value="yh">yh</Select.Option>
                            <Select.Option value="mqx">mqx</Select.Option>
                        </Select.OptGroup>
                    </Select>
                    <Divider orientation="left">Transfer</Divider>
                    <Divider orientation="left">Upload</Divider>
                    <Upload {...UploadProps}><Button>Upload</Button></Upload>
                    <Divider orientation="left">Avatar Badge</Divider>
                    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                    <Badge count={2}>
                        <Avatar shape="square">LTY</Avatar>
                    </Badge>
                    <Badge count={25} overflowCount={20} />
                    <Divider orientation="left">Collapse</Divider>
                    <Collapse bordered={false} accordion>
                        <Panel header="lty" key="1">lty</Panel>
                        <Panel header="yzl" key="2">yzl</Panel>
                        <Panel header="yh" key="3">yh</Panel>
                        <Panel header="mqx" key="4">mqx</Panel>
                    </Collapse>
                    <Divider orientation="left">Carousel</Divider>
                    <Carousel style={{backgroundColor: '#00aaff', height: '128px', width:'256px'}} autoplay>
                        <div><b>1</b></div>
                        <div><b>2</b></div>
                    </Carousel>
                    <Divider orientation="left">Calendar</Divider>
                    <Calendar />
                    <Divider orientation="left">Empty</Divider>
                    <Empty />
                    <Divider orientation="left">Descriptions</Divider>
                    <Descriptions title="User Info">
                        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                        <Descriptions.Item label="Remark">empty</Descriptions.Item>
                        <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                        </Descriptions.Item>
                    </Descriptions>
                    <Divider orientation="left">Timeline</Divider>
                    <Timeline pending="wait a monent" mode="alternate">
                        <Timeline.Item color="green">lty</Timeline.Item>
                        <Timeline.Item>yzl</Timeline.Item>
                        <Timeline.Item>yh</Timeline.Item>
                        <Timeline.Item>mqx</Timeline.Item>
                    </Timeline>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default Antd