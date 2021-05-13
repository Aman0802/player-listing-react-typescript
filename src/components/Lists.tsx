import { render } from '@testing-library/react'
import React from 'react'

interface IProps {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

// const Lists = (props: IProps) => {
const Lists: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map(person => (
      <li className="List">
        <div className="List-header">
          <img className="List-img" src={person.url} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
      </li>
    ))
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default Lists
