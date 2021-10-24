import React from 'react'
import Layout from '../components/Layout'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../components/Table' 

const getData = () => {
  const data = [
    {
      name: 'Justin Reid',
      title: 'Waiter',
 
      points: '93',
      role: 'Clocked Out',
      imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Mary Freidman',
      title: "Head Chef",
      points: '70',
      role: 'Clocked In',
      imgUrl: 'https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jennifer Powell',
      title: 'Waitress',

      points: '89',
      role: "Clocked In",
      imgUrl: 'https://images.unsplash.com/photo-1581841064838-a470c740e8ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      title: 'Manager',

      points: '38',
      role: 'Off',
      imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Marcus Alexander',
      title: 'Chef',
  
      points: '45',
      role: 'Clocked In',
      imgUrl: 'https://images.unsplash.com/photo-1597346908500-28cda8acfe4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cameron Williamson',
      title: 'Waiter',

      points: '96',
      role: 'Clocked Out',
      imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Catherine Taylor',
      title: 'Waitress',

      points: '76',
      role: 'Off',
      imgUrl: 'https://images.unsplash.com/photo-1556015048-4d3aa10df74c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Morris Jones',
        title: 'Assistant Manager',
  
        points: '62',
        role: 'Clocked In',
        imgUrl: 'https://images.unsplash.com/photo-1589279715734-6631a314dfa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Charles Smith',
        title: 'Janitor',
  
        points: '99',
        role: 'Off',
        imgUrl: 'https://images.unsplash.com/photo-1593839677138-2a6800bb519d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Lauren Kellerman',
        title: 'Bartender',
  
        points: '81',
        role: 'Clocked Out',
        imgUrl: 'https://images.unsplash.com/photo-1545205597-85ce61ef3ef1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Allison Keller',
      title: 'Chef',
      points: '47',
      role: 'Off',
      imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]
  return [...data]
}

function TeamView() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Title",
      accessor: 'title',
    },
    {
      Header: "Status",
      accessor: 'role',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      Header: "Performance",
      accessor: 'points',
      Cell: StatusPill,
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
    </Layout>
  );
}

export default TeamView;
