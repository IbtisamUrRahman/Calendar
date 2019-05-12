import { Table, Divider, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

ReactDOM.render(
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column
        title="First Name"
        dataIndex="firstName"
        key="firstName"
      />
      <Column
        title="Last Name"
        dataIndex="lastName"
        key="lastName"
      />
    </ColumnGroup>
    <Column
      title="Age"
      dataIndex="age"
      key="age"
    />
    <Column
      title="Address"
      dataIndex="address"
      key="address"
    />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <span>
          <a href="javascript:;">Invite {record.lastName}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      )}
    />
  </Table>,
  mountNode
);

<div className="w-1/4 h-12 totalOrders">
<h2>Average Order Value</h2>
<div>
  <table className="fullwidth">
    <tr className="fullwidth">
      <th className="halfwidth"></th>
      <th className="halfwidth text-3xl textcolorred">86%</th>
    </tr>
    <tr className="fullwidth">
      <th className="halfwidth text-5xl font-thin">$12</th>
      <th className="halfwidth">
        <table>
          <tr className="">
            <th className="width-1-3 barChart"><div className="vredbar1"></div></th>
            <th className="width-1-3 barChart"><div className="vredbar2"></div></th>
            <th className="width-1-3 barChart"><div className="vredbar3"></div></th>
          </tr>
        </table>
      </th>
    </tr>
    <tr className="fullwidth">
      <th className="halfwidth"><p className="text-grey">ORDERS</p></th>
      <th className="halfwidth"><p className="text-grey center">order growth</p></th>
    </tr>
  </table>
</div>
</div>