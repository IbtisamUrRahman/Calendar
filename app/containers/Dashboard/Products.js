import React, {Component} from 'react';
import { Table, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import './CSS/Overview.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'PRODUCER',
  dataIndex: 'producer',
  key: 'producer',
},  {
  title: 'PACKAGING',
  dataIndex: 'packaging',
  key: 'packaging',
},
{
  title: 'RETAIL PRICE($)',
  dataIndex: 'retailprice',
  key: 'retailproice',
},
{
  title: 'UNITSOLD($)',
  dataIndex: 'unitesold',
  key: 'unitesold',
}, {
  title: 'TOTALSOLD($)',
  dataIndex: 'totalsold',
  key: 'totalsold',
}, ];

const data = [{
  key: '1',
  name: 'Growers Extra Dry Apple',
  id: 60,
  producer: '-',
  packaging: '8 x 2000 mL bottles',
  retailprice: '$9.60', 
  unitesold: 2, 
  totalsold: '$183.20'

}, {
  key: '2',
  name: 'Inniskillin Pinot Grigio VQA',
  id: 191,
  producer: 'Arterra Wines..',
  packaging: '750 mL bottle', 
  retailprice: '$14.95', 
  unitesold: 12, 
  totalsold: '$183.20', 
}, {
  key: '3',
  name: 'Inniskillin Pinot Grigi',
  id: 191,
  producer: 'Arterra Wines..',
  packaging: '750 mL bottle', 
  retailprice: '$14.95', 
  unitesold: 12, 
  totalsold: '$183.20',
}, 
{ key: '4',
name: 'Inniskillin Pinot Grigi',
id: 191,
producer: 'Arterra Wines..',
packaging: '750 mL bottle', 
retailprice: '$14.95', 
unitesold: 12, 
totalsold: '$183.20',
}, {
  key: '5',
  name: 'Inniskillin Pinot Grigi',
  id: 191,
  producer: 'Arterra Wines..',
  packaging: '750 mL bottle', 
  retailprice: '$14.95', 
  unitesold: 12, 
  totalsold: '$183.20',
}, 
{
  key: '6',
  name: 'Inniskillin Pinot Grigi',
  id: 191,
  producer: 'Arterra Wines..',
  packaging: '750 mL bottle', 
  retailprice: '$14.95', 
  unitesold: 12, 
  totalsold: '$183.20',
}];
export default class Overview2 extends Component {
  render(){
    return (
      <>
      <div className="flex flex-row">
        <div className='searchInput'> <Input placeholder="Search"/></div>
        <div className='searchButton'> <Button type="primary">Search</Button></div>
        <div className='downloadCsvButton'><Button type="primary">Download CSV</Button></div>
        </div>
      <div>
      <div className="productsTable">
          <Table columns={columns} dataSource={data} />
      </div> 
      </div>
      </>
      
    );
  }
}
