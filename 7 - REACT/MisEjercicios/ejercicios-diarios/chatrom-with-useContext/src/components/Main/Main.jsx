// import { ChatBox } from "../ChatBox/ChatBox";
import React from 'react';
import {LiveChat} from '../LiveChat/LiveChat'

export function Main({ users }) {
  return (
    <main>
      {users.map(id => <LiveChat idUser={id} key={id}/>)}
    </main>
  );
}

