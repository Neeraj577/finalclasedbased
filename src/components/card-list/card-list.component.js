import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("render from card comp");
    const { monsters } = this.props;

    return (
      <div classname="cardlist">
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <img
                src={`https://robohash.org/${monster.id}?set=set2&sixe=140*140`}
                alt={`monster ${monster.name}`}
              />
              <h2>{monster.name}</h2>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
