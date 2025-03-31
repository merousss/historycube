import React from "react";


const colors = {
  admin: '#f04f43',
  user: '#6214f3',
  moderator: '#0f9bec'
}

const names = {
  admin: 'Администратор',
  user: 'Игрок',
  moderator: 'Модератор'
}

export const RoleTag = ({role}) => {

  return(
    <div className="pr-role-tag" style={{background: colors[role]}}>
      {names[role]}
    </div>
  );
}